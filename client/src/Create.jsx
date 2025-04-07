import { Button } from '@/components/ui/button';
import { doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { chatSession } from './service/AIModal';
import { db } from "./service/firebaseConfig.jsx";
import './style.css';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import Header from './components/Header';
import { toast } from 'react-toastify';

const AI_PROMPT = 
`Generate a detailed travel itinerary for a trip to {location} for exactly {totalDays} days (no more, no less) for {traveler} with a total budget of ₹{totalBudget} for {peopleCount} people. The itinerary should be customized based on the selected pace ({pace}), pet-friendliness ({hasPets}), and preferences.

IMPORTANT: Only include attractions, restaurants, and activities that are actually located in {location}. Do not include places from nearby cities or regions.

1. ACCOMMODATIONS (5-6 options):
   - Hotel name, full address (must be in {location})
   - Price/night (total for {peopleCount} people)
   - Must be under ₹{maxHotelBudget}/night total
   - High-quality image URL and exact geo-coordinates
   - Rating (1-5), number of reviews
   - Detailed amenities list
   - Brief description highlighting unique features
   - Pet-friendly status (if {hasPets} is true)

2. DAILY ITINERARY ({pace} pace):
   STRICT REQUIREMENTS:
   - Plan exactly {totalDays} days, no more or less
   - Only include attractions physically located in {location}
   - Each attraction must have a verified address in {location}
   - Do not suggest places that are too far or in different cities

   Each day must include:
   - Morning activities (09:00 AM - 12:00 PM)
   - Afternoon activities (12:00 PM - 04:00 PM)
   - Evening activities (04:00 PM - 08:00 PM)

   Each activity MUST have:
   - Place name and verified address in {location}
   - Detailed description of the attraction
   - High-quality image URL
   - Exact geo-coordinates (verified in {location})
   - Ticket prices and booking URLs
   - Time slots in HH:MM AM/PM format
   - Estimated duration
   - Pet-friendly status (if {hasPets})

   Transport details between locations:
   - Only use transport options available in {location}
   - Include actual local rates for taxis/autos
   - Specify exact pickup/drop points

3. FOOD & DINING:
   {mealsPerDay} meals/day @ ₹{mealBudget}/meal/person
   STRICT REQUIREMENTS:
   - Only include restaurants actually located in {location}
   - Each restaurant must have a verified address in {location}
   - Do not suggest places from nearby cities

   Each restaurant MUST include:
   - Restaurant name and exact address in {location}
   - Cuisine type (featuring local specialties)
   - Time slots (e.g., "Breakfast: 08:00 AM - 09:00 AM")
   - Actual price range from the restaurant
   - Local signature dishes
   - Image URL and exact geo-coordinates
   - Current ratings and reviews
   - Pet-friendly status (if {hasPets})
   Include {dietaryPrefs} options

4. LIVE EVENTS ({eventDates}):
   For each event:
   - Name, venue, exact date/time
   - Description and highlights
   - Ticket prices (total for group)
   - Booking URL and image URL
   - Age restrictions and requirements
   - Geo-coordinates

5. SHOPPING ({souvenirPrefs}):
   For each market/shop:
   - Market name and location
   - Operating hours
   - Best items to buy with price ranges
   - Local specialties
   - Geo-coordinates

6. BUDGET BREAKDOWN:
   - Category-wise costs
   - Per-person calculations
   - Daily budgets
   - Savings recommendations

Return valid JSON matching this structure:
{
  "tripDetails": {
    "location": "string",
    "dates": "string",
    "duration": "number",
    "travelers": "number",
    "pace": "string",
    "totalBudget": "number"
  },
  "accommodations": [
    {
      "hotelName": "string",
      "address": "string",
      "pricePerNight": "number",
      "totalPrice": "number",
      "rating": "number",
      "reviews": "number",
      "description": "string",
      "amenities": ["string"],
      "imageUrl": "string",
      "coordinates": {
        "latitude": "number",
        "longitude": "number"
      },
      "petFriendly": "boolean"
    }
  ],
  "itinerary": [
    {
      "day": "number",
      "theme": "string",
      "attractions": [
        {
          "placeName": "string",
          "description": "string",
          "timeSlots": {
            "start": "HH:MM AM",
            "end": "HH:MM PM"
          },
          "estimatedTime": "string",
          "ticketPricing": "number",
          "imageUrl": "string",
          "coordinates": {
            "latitude": "number",
            "longitude": "number"
          },
          "petFriendly": "boolean"
        }
      ],
      "travelDetails": [
        {
          "from": "string",
          "to": "string",
          "modeOfTransport": "string",
          "estimatedTravelTime": "string",
          "travelCost": "number"
        }
      ],
      "food": [
        {
          "restaurantName": "string",
          "cuisine": "string",
          "timeSlots": {
            "start": "HH:MM AM",
            "end": "HH:MM PM"
          },
          "priceRange": "string",
          "rating": "number",
          "imageUrl": "string",
          "coordinates": {
            "latitude": "number",
            "longitude": "number"
          },
          "petFriendly": "boolean"
        }
      ],
      "shopping": [
        {
          "marketName": "string",
          "bestSouvenirs": "string",
          "estimatedPrices": "string",
          "operatingHours": "string",
          "coordinates": {
            "latitude": "number",
            "longitude": "number"
          }
        }
      ],
      "liveEvents": [
        {
          "eventName": "string",
          "venue": "string",
          "dateTime": "string",
          "ticketPrice": "number",
          "description": "string",
          "imageUrl": "string",
          "bookingUrl": "string",
          "coordinates": {
            "latitude": "number",
            "longitude": "number"
          }
        }
      ]
    }
  ],
  "budgetSummary": {
    "totalCost": "number",
    "perPersonCost": "number",
    "categoryBreakdown": {
      "accommodation": "number",
      "activities": "number",
      "food": "number",
      "transport": "number",
      "shopping": "number"
    },
    "dailyBudget": "number"
  }
}`;

function Create() {
  const [place, setPlace] = useState(null);
  const [formData, setFormData] = useState({
    noOfDays: 5,
    budget: 'Moderate',
    customBudget: ''
  });
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const [preferences, setPreferences] = useState({
    adventureType: "",
    intensity: "balanced",
    freeTime: 2,
    hasPets: false,
    wantsSouvenirs: true,
    includeEvents: true,
    dietaryRestrictions: ""
  });

  const calculateEndDate = (startDate, days) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + parseInt(days));
    return date.toISOString().split('T')[0];
  };

  const parseBudget = (budgetStr, customValue) => {
    if (budgetStr === 'Custom') return Number(customValue || 0);
    if (!budgetStr) return 10000;
    if (budgetStr.includes('-')) {
      const [min, max] = budgetStr.split('-').map(Number);
      return (min + max) / 2;
    }
    if (budgetStr.startsWith('<')) return Number(budgetStr.slice(1));
    if (budgetStr.startsWith('>')) return Number(budgetStr.slice(1));
    return Number(budgetStr);
  };

  const calculatePeopleCount = () => {
    switch(formData.traveller) {
      case 'Just Me': return 1;
      case 'Couple': return 2;
      case 'Family': return Math.max(1, parseInt(formData.familyMembers) || 4);
      case 'Friends': return Math.max(1, parseInt(formData.friendsCount) || 4);
      default: return 1;
    }
  };

  const handleInputChange = (name, value) => {
    let formattedValue = value;
    
    if (name === 'budget') {
      setFormData(prev => ({
        ...prev,
        budget: value,
        customBudget: value === 'Custom' ? prev.customBudget : ''
      }));
      return;
    }

    if (name === 'startDate' && formData.noOfDays) {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        endDate: calculateEndDate(value, formData.noOfDays)
      }));
      return;
    }

    if (name === 'noOfDays' && formData.startDate) {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        endDate: calculateEndDate(formData.startDate, value)
      }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }));
  };

  const validateInputs = () => {
    const peopleCount = calculatePeopleCount();
    const totalBudget = parseBudget(formData.budget, formData.customBudget);

    if (!formData.location) {
      toast.error('Please select a destination');
      return false;
    }
    if (!formData.startDate) {
      toast.error('Please select start date');
      return false;
    }
    if (formData.noOfDays > 10) {
      toast.error('Maximum 10 days allowed');
      return false;
    }
    if (totalBudget / peopleCount < 1000) {
      toast.error('Minimum ₹1000/person required');
      return false;
    }
    if (formData.budget === 'Custom' && !formData.customBudget) {
      toast.error('Please enter custom budget amount');
      return false;
    }
    return true;
  };

  const generateTripPrompt = () => {
    const peopleCount = calculatePeopleCount();
    const totalBudget = parseBudget(formData.budget, formData.customBudget);
    const perPersonBudget = totalBudget / peopleCount;
    const perDayBudget = perPersonBudget / formData.noOfDays;

    return AI_PROMPT
      .replace(/{location}/g, formData.location?.label || '')
      .replace(/{totalBudget}/g, totalBudget)
      .replace(/{perPersonBudget}/g, Math.floor(perPersonBudget))
      .replace(/{peopleCount}/g, peopleCount)
      .replace(/{pace}/g, preferences.intensity)
      .replace(/{adventureActivity}/g, preferences.adventureType || 'none')
      .replace(/{adventureDay}/g, Math.floor(Math.random() * formData.noOfDays) + 1)
      .replace(/{freeTime}/g, preferences.freeTime)
      .replace(/{maxHotelBudget}/g, Math.floor(perDayBudget * 0.6))
      .replace(/{mealsPerDay}/g, 3)
      .replace(/{mealBudget}/g, Math.floor(perDayBudget * 0.3))
      .replace(/{dietaryPrefs}/g, preferences.dietaryRestrictions || 'no restrictions')
      .replace(/{eventDates}/g, `${formData.startDate} to ${formData.endDate}`)
      .replace(/{souvenirPrefs}/g, preferences.wantsSouvenirs ? 'souvenirs requested' : 'no souvenirs')
      .replace(/{hasPets}/g, preferences.hasPets ? 'true' : 'false');
  };

  const saveTrip = async (tripData) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user?.email) throw new Error('User not logged in');

      const docId = Date.now().toString();
      const peopleCount = calculatePeopleCount();
      const totalBudget = parseBudget(formData.budget, formData.customBudget);

      await setDoc(doc(db, "AITrips", docId), {
        userSelection: {
          ...formData,
          peopleCount,
          ...preferences
        },
        tripData,
        budgetDetails: {
          userBudget: totalBudget,
          perDayBudget: totalBudget / formData.noOfDays,
          perPersonBudget: totalBudget / peopleCount,
          estimatedTotalCost: tripData.budgetSummary?.totalCost || totalBudget,
          perDayEstimated: (tripData.budgetSummary?.totalCost || totalBudget) / formData.noOfDays,
          budgetDifference: (tripData.budgetSummary?.totalCost || totalBudget) - totalBudget
        },
        userEmail: user.email,
        id: docId,
        createdAt: new Date().toISOString()
      });

      navigate(`/view-trip/${docId}`);
    } catch (error) {
      console.error("Save error:", error);
      toast.error('Failed to save trip');
    }
  };

  const generateTrip = async () => {
    if (!validateInputs()) return;
    if (!localStorage.getItem('user')) {
      setOpenDialog(true);
      return;
    }

    setLoading(true);
    try {
      const prompt = generateTripPrompt();
      const result = await chatSession.sendMessage(prompt);
      
      if (!result?.response?.text()) throw new Error('Empty AI response');
      
      let tripData;
      try {
        tripData = JSON.parse(result.response.text());
      } catch (e) {
        const jsonMatch = result.response.text().match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error('Invalid JSON');
        tripData = JSON.parse(jsonMatch[0]);
      }

      await saveTrip(tripData);
    } catch (error) {
      console.error("Generation error:", error);
      toast.error('Failed to generate trip');
    } finally {
      setLoading(false);
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get(
          'https://www.googleapis.com/oauth2/v1/userinfo',
          { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
        );
        localStorage.setItem('user', JSON.stringify(userInfo.data));
        setOpenDialog(false);
        generateTrip();
      } catch (error) {
        console.error("Login error:", error);
        toast.error('Google login failed');
      }
    },
    onError: (error) => {
      console.error("Login error:", error);
      toast.error('Google login failed');
    }
  });

  return (
    <div className="bg-gray-50 min-h-screen" style={{ marginTop: "70px", width: "100%"}}>
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Plan Your Perfect Trip</h1>
        <p className="text-lg text-gray-600 mb-8">
          Answer a few questions and we'll create a customized itinerary
        </p>

        <div className="bg-white rounded-xl shadow-md p-6 space-y-8">
          {/* Destination */}
          <div>
            <h2 className="text-xl font-semibold mb-3">📍 Where are you going?</h2>
            <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              selectProps={{
                value: place,
                onChange: (value) => {
                  setPlace(value);
                  handleInputChange('location', value);
                },
                placeholder: "Search destinations...",
                styles: {
                  control: (base) => ({
                    ...base,
                    padding: '8px',
                    borderRadius: '8px',
                    borderColor: '#e5e7eb'
                  })
                }
              }}
            />
          </div>

          {/* Dates */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">📅 Start Date</h2>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg"
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => handleInputChange('startDate', e.target.value)}
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">⏳ Trip Duration</h2>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.noOfDays}
                onChange={(e) => handleInputChange('noOfDays', e.target.value)}
              >
                {[3,4,5,6,7].map(days => (
                  <option key={days} value={days}>{days} days</option>
                ))}
              </select>
            </div>
          </div>

          {/* Budget */}
          <div>
            <h2 className="text-xl font-semibold mb-3">💰 Budget Range</h2>
            <div className="grid grid-cols-4 gap-4">
              {['Cheap', 'Moderate', 'Luxury', 'Custom'].map(level => (
                <button
                  key={level}
                  className={`p-4 rounded-lg border transition-all ${
                    formData.budget === level 
                      ? 'border-blue-500 bg-blue-50 shadow-md' 
                      : 'border-gray-300 hover:border-blue-300'
                  } ${level === 'Custom' ? 'h-[150px]' : ''}`}
                  onClick={() => handleInputChange('budget', level)}
                >
                  <div className="text-2xl mb-2">
                    {level === 'Cheap' ? '💵' : 
                     level === 'Moderate' ? '💰' : 
                     level === 'Luxury' ? '💎' : '🎯'}
                  </div>
                  <h3 className="font-medium">{level}</h3>
                  {level !== 'Custom' ? (
                    <p className="text-sm text-gray-500 mt-1">
                      {level === 'Cheap' ? 'Under ₹5,000' : 
                       level === 'Moderate' ? '₹5,000-15,000' : 'Over ₹15,000'}
                    </p>
                  ) : (
                    <input
                      type="number"
                      min="1000"
                      max="100000"
                      className="w-full mt-2 p-2 border rounded text-sm"
                      placeholder="Enter amount"
                      value={formData.customBudget}
                      disabled={formData.budget !== 'Custom'}
                      onChange={(e) => handleInputChange('customBudget', e.target.value)}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Travelers */}
          <div>
            <h2 className="text-xl font-semibold mb-3">👥 Traveling With</h2>
            <div className="grid grid-cols-4 gap-4">
              {['Just Me', 'Couple', 'Family', 'Friends'].map(type => (
                <button
                  key={type}
                  className={`p-3 rounded-lg border transition-all ${
                    formData.traveller === type
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:border-blue-300'
                  }`}
                  onClick={() => handleInputChange('traveller', type)}
                >
                  <div className="text-xl mb-1">
                    {type === 'Just Me' ? '👤' : 
                     type === 'Couple' ? '👫' : 
                     type === 'Family' ? '👪' : '👬'}
                  </div>
                  <span className="text-sm">{type}</span>
                </button>
              ))}
            </div>

            {formData.traveller === 'Family' && (
              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">
                  How many family members?
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  onChange={(e) => handleInputChange('familyMembers', e.target.value)}
                />
              </div>
            )}

            {formData.traveller === 'Friends' && (
              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">
                  How many friends?
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  onChange={(e) => handleInputChange('friendsCount', e.target.value)}
                />
              </div>
            )}
          </div>

          {/* Preferences */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">⚙️ Trip Preferences</h2>
            
            {/* Adventure */}
            <div>
              <label className="flex items-center space-x-3 mb-2">
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  checked={preferences.adventureType !== ""}
                  onChange={(e) => setPreferences(prev => ({
                    ...prev,
                    adventureType: e.target.checked ? "bungeeJumping" : ""
                  }))}
                />
                <span>Include adventure activities</span>
              </label>
              
              {preferences.adventureType && (
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                  value={preferences.adventureType}
                  onChange={(e) => setPreferences(prev => ({
                    ...prev,
                    adventureType: e.target.value
                  }))}
                >
                  <option value="bungeeJumping">Bungee Jumping</option>
                  <option value="paragliding">Paragliding</option>
                  <option value="scubaDiving">Scuba Diving</option>
                  <option value="whiteWaterRafting">White Water Rafting</option>
                </select>
              )}
            </div>

            {/* Pace */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Trip Pace
              </label>
              <div className="flex gap-4">
                {[
                  { id: "relaxed", label: "Relaxed", icon: "🛶" },
                  { id: "balanced", label: "Balanced", icon: "⚖️" },
                  { id: "fastPaced", label: "Fast-paced", icon: "🏃" }
                ].map(option => (
                  <button
                    key={option.id}
                    className={`flex-1 p-3 rounded-lg border transition-all ${
                      preferences.intensity === option.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-300'
                    }`}
                    onClick={() => setPreferences(prev => ({
                      ...prev,
                      intensity: option.id
                    }))}
                  >
                    <div className="text-xl mb-1">{option.icon}</div>
                    <span className="text-sm">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Other Preferences */}
            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  checked={preferences.wantsSouvenirs}
                  onChange={(e) => setPreferences(prev => ({
                    ...prev,
                    wantsSouvenirs: e.target.checked
                  }))}
                />
                <span>Include souvenir shopping</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  checked={preferences.includeEvents}
                  onChange={(e) => setPreferences(prev => ({
                    ...prev,
                    includeEvents: e.target.checked
                  }))}
                />
                <span>Include live events</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  checked={preferences.hasPets}
                  onChange={(e) => setPreferences(prev => ({
                    ...prev,
                    hasPets: e.target.checked
                  }))}
                />
                <span>Traveling with pets</span>
              </label>
            </div>
          </div>

          {/* Generate Button */}
          <div className="pt-6">
            <button
              onClick={generateTrip}
              disabled={loading || !formData.location}
              className={`w-full py-4 px-6 rounded-lg text-lg font-medium transition-all ${
                loading || !formData.location
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                  Generating...
                </div>
              ) : (
                'Generate My Trip'
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Login Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <div className="text-center py-6">
                <h3 className="text-xl font-bold mb-4">Sign In to Save Your Trip</h3>
                <div className="space-y-4">
                  <button
                    onClick={() => login()}
                    className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50"
                  >
                    <FcGoogle className="text-xl" />
                    Continue with Google
                  </button>
                  <button
                    onClick={() => navigate('/login')}
                    className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Use Email/Password
                  </button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Create;
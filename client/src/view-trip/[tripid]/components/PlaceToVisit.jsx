import React, { useEffect, useState } from 'react';
import PlaceCardItem from './PlaceCardItem';
import RestaurantCardItem from './RestaurantCardItem';

function PlaceToVisit({ trip }) {
  const itinerary = trip?.tripData?.itinerary || [];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const errorHandler = (error) => {
      setError(error.message);
      console.error('Global error:', error);
    };
    
    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  if (loading) return <div className="text-center py-8">Loading itinerary...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div className="p-8 bg-gray-50 max-w-6xl mx-auto">
      {/* Trip Overview Section */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {trip?.tripData?.tripDetails?.location || "Your Trip"}
        </h1>
        <p className="text-lg text-gray-600">
          {trip?.tripData?.tripDetails?.dates || "Dates not specified"}
        </p>
        <div className="mt-4 flex justify-center gap-4 text-sm text-gray-600">
          <span>👥 {trip?.tripData?.tripDetails?.travelers} Travelers</span>
          <span>📅 {trip?.tripData?.tripDetails?.duration} Days</span>
          <span>🎯 {trip?.tripData?.tripDetails?.pace} Pace</span>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 tracking-wide">
        ✨ Elite Journeys & Timeless Experiences
      </h2>

      {itinerary.map((dayData, index) => {
        const shoppingList = Array.isArray(dayData.shopping) ? dayData.shopping : [];
        
        return (
          <div key={index} className="mb-14 p-8 bg-white rounded-lg border border-gray-300">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6 border-b border-gray-300 pb-2">
              Day {dayData.day}: {dayData.theme}
            </h3>

            {/* Attractions Section */}
            {dayData.attractions?.length > 0 && (
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">🎯 Places to Visit</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  {dayData.attractions.map((attraction, attrIndex) => (
                    <PlaceCardItem key={attrIndex} place={attraction} />
                  ))}
                </div>
              </div>
            )}

            {/* Travel Details Section */}
            {dayData.travelDetails?.length > 0 && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">🚗 Transport Details</h4>
                {dayData.travelDetails.map((travel, travelIndex) => (
                  <div key={travelIndex} className="flex flex-col md:flex-row justify-between items-start md:items-center py-2 border-b last:border-0">
                    <div className="flex-1">
                      <p className="text-md text-gray-700">
                        {travel.modeOfTransport} 
                        <span className="mx-2">•</span>
                        <span className="font-medium">{travel.estimatedTravelTime}</span>
                      </p>
                      <p className="text-sm text-gray-500">
                        From: {travel.from || "Start"} → To: {travel.to || "Destination"}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-blue-600 font-medium">₹{travel.travelCost}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Food Section */}
            {dayData.food?.length > 0 && (
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">🍽️ Dining</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {dayData.food.map((restaurant, foodIndex) => (
                    <RestaurantCardItem key={foodIndex} restaurant={restaurant} />
                  ))}
                </div>
              </div>
            )}

            {/* Shopping Section */}
            {shoppingList.length > 0 && (
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">🛍️ Shopping Spots</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {shoppingList.map((shop, shopIndex) => (
                    <div key={shopIndex} className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                      <h5 className="text-lg font-semibold text-gray-800 mb-3">{shop.marketName}</h5>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">🎁 Best Buys:</span> {shop.bestSouvenirs}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">💰 Price Range:</span> {shop.estimatedPrices}
                        </p>
                        {shop.operatingHours && (
                          <p className="text-sm text-gray-700">
                            <span className="font-medium">⏰ Hours:</span> {shop.operatingHours.start} - {shop.operatingHours.end}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default PlaceToVisit;
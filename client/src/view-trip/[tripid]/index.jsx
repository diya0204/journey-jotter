import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'; 
import { db } from "../../service/firebaseConfig";
import InfoSection from './components/InfoSection';
import Hotels from './components/Hotels';
import LiveEvents from './components/LiveEvents'; 
import React, { useState, useEffect } from 'react';
import PlaceToVisit from './components/PlaceToVisit';
import BudgetSummary from './components/BudgetSummary'; // New component
import { toast } from 'react-toastify';

function Viewtrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    if (tripId) GetTripData();
  }, [tripId]);

  const GetTripData = async () => {
    try {
      const docRef = doc(db, 'AITrips', tripId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const tripData = docSnap.data();
        setTrip({
          ...tripData,
        
          liveEvents: tripData.tripData.itinerary?.flatMap(day => day.liveEvents || []) || []
        });
      } else {
        toast.error('No trip found!');
      }
    } catch (error) {
      toast.error('Error loading trip data');
      console.error(error);
    }
  };

  if (!trip) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
      <InfoSection trip={trip} />
      <BudgetSummary trip={trip} />
      <Hotels trip={trip} />
      <PlaceToVisit trip={trip} />
      <LiveEvents events={trip.liveEvents} />
    </div> 
  );
}

export default Viewtrip;
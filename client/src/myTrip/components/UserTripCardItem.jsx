import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetPlaceDetails } from '../../../service/GlobalApi';

const PHOTO_REF_URL = 'https://places.googleapis.com/v1/places/{NAME}/media?key=AIzaSyBLEg7pe65TJnh5q2f5geJ5SWzT7hHiAIs&maxHeightPx=800&maxWidthPx=1200';

function UserTripCardItem({ trip }) {
  const [photoUrl, setPhotoUrl] = useState('');

  useEffect(() => {
    if (trip) GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    try {
      const data = { textQuery: trip?.userSelection?.location?.label };
      const resp = await GetPlaceDetails(data);

      if (resp?.data?.places?.[0]?.photos?.length > 3) {
        const photoName = resp.data.places[0].photos[3].name;
        const newPhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
        setPhotoUrl(newPhotoUrl);
      }
    } catch (error) {
      console.error("Error fetching place photo:", error);
    }
  };

  if (!trip) return null;

  return (
    <Link to={`/view-trip/${trip?.id}`} className="block">
      <div className="hover:scale-105 transition-all cursor-pointer">
        <img 
          src={photoUrl || '/placeholder.jpg'} 
          alt={trip?.userSelection?.location?.label || 'Trip destination'} 
          className="object-cover rounded-xl h-[250px] w-full"
        />
        <div className="mt-3">
          <h2 className="font-bold text-lg">{trip?.userSelection?.location?.label}</h2>
          <h2 className="text-sm text-gray-500">
            {trip?.userSelection?.noOfDays} days trip with {trip?.userSelection?.budget} budget
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default UserTripCardItem;
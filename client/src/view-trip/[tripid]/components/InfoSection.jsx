import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';
import { IoIosSend } from "react-icons/io";
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';

function InfoSection({ trip }) {
  const [photoUrl, setPhotoUrl] = useState('');
  const [placeDetails, setPlaceDetails] = useState(null);

  useEffect(() => {
    if (trip?.userSelection?.location?.label) {
      fetchPlaceDetails();
    }
  }, [trip]);

  const fetchPlaceDetails = async () => {
    try {
      const data = { textQuery: trip.userSelection.location.label };
      const response = await GetPlaceDetails(data);
      const placeData = response.data?.places?.[0];
      setPlaceDetails(placeData);

      if (placeData?.photos?.[0]?.name) {
        const formattedPhotoUrl = PHOTO_REF_URL.replace('{NAME}', placeData.photos[0].name);
        setPhotoUrl(formattedPhotoUrl);
      }
    } catch (error) {
      console.error("Error fetching place details:", error);
      // Use default image as fallback
    }
  };

  const fetchUnsplashImage = async (location) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(location.split(',')[0])}&per_page=1&orientation=landscape`,
        {
          headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
          }
        }
      );
      const data = await response.json();
      if (data.results?.[0]?.urls?.regular) {
        return data.results[0].urls.regular;
      }
      throw new Error('No Unsplash image found');
    } catch (error) {
      console.error('Error fetching Unsplash image:', error);
      return '/IMAGES/istockphoto-508628776-612x612.webp';
    }
  };

  return (
    <div>
      {photoUrl ? (
        <img 
          src={photoUrl} 
          className="h-[300px] w-full object-cover rounded-xl" 
          alt={trip?.userSelection?.location?.label || "Location"}
          onError={async (e) => {
            e.target.onerror = null;
            const unsplashUrl = await fetchUnsplashImage(trip?.userSelection?.location?.label || "tourist destination");
            e.target.src = unsplashUrl;
          }}
        />
      ) : (
        <img 
          src='/IMAGES/istockphoto-508628776-612x612.webp' 
          className='h-[300px] w-full object-cover rounded-xl' 
          alt="Default Location" 
        />
      )}

      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-2xl">
              {trip?.userSelection?.location?.label || "Unknown Destination"}
            </h2>
            {placeDetails?.rating && (
              <span className="text-sm text-yellow-500">
                ⭐ {placeDetails.rating.toFixed(1)}
              </span>
            )}
          </div>
          {placeDetails?.formattedAddress && (
            <p className="text-sm text-gray-600">📍 {placeDetails.formattedAddress}</p>
          )}
          <div className="flex gap-5 text-xs md:text-md flex-wrap">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">
              📅 {trip?.userSelection?.noOfDays || 0} Day{trip?.userSelection?.noOfDays !== 1 ? 's' : ''}
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">
              💰 Budget: {trip?.userSelection?.budget || "Not specified"}
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">
              🥂 {trip?.userSelection?.traveller || 1} Traveler{trip?.userSelection?.traveller !== 1 ? 's' : ''}
            </h2>
            {trip?.userSelection?.intensityOptions && (
              <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">
                ⚡ {trip.userSelection.intensityOptions} Pace
              </h2>
            )}
          </div>
        </div>
        <Button aria-label="Send itinerary">
          <IoIosSend />
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;

import React, { useState, useEffect } from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState('');
  const [placeDetails, setPlaceDetails] = useState(null);
  console.log(placeDetails)
  useEffect(() => {
    if (place?.placeName) {
      fetchPlaceDetails();
    }
  }, [place]);

  const fetchPlaceDetails = async () => {
    try {
      const data = { textQuery: place.placeName };
      const response = await GetPlaceDetails(data);
      const placeData = response.data?.places?.[0];
      setPlaceDetails(placeData);

      if (placeData?.photos?.[0]?.name) {
        const formattedPhotoUrl = PHOTO_REF_URL.replace('{NAME}', placeData.photos[0].name);
        setPhotoUrl(formattedPhotoUrl);
      }
    } catch (error) {
      console.error('Error fetching place details:', error);
      if (place?.place_image_url) {
        setPhotoUrl(place.place_image_url);
      }
    }
  };

  const fetchUnsplashImage = async (placeName) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(placeName.split(',')[0])}&per_page=1&orientation=landscape`,
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
      return "/IMAGES/OIP (1).jpeg";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      
      {/* Time Slot Badge */}
      {place?.timeSlots && (
        <div className="bg-blue-50/80 px-4 py-2">
          <span className="text-sm text-blue-600 font-medium">
            🕒 {place.timeSlots.start} - {place.timeSlots.end}
          </span>
        </div>
      )}

      {/* Place Name */}
      <h4 className="text-xl font-semibold text-blue-600 px-4 py-3">
        {place?.placeName || "Unknown Attraction"}
      </h4>
      
      {/* Image Section */}
      <img
        src={photoUrl || place?.place_image_url || "/IMAGES/OIP (1).jpeg"}
        alt={place?.placeName || "Attraction image"}
        className="w-full h-48 object-cover"
        onError={async (e) => {
          e.target.onerror = null;
          const unsplashUrl = await fetchUnsplashImage(place?.placeName || "tourist attraction");
          e.target.src = unsplashUrl;
        }}
      />

      {/* Details Section */}
      <div className="p-4 bg-gray-50">
        {/* Title and Rating */}
        <div className="flex items-center justify-between mb-3">
          <h5 className="text-lg font-semibold text-gray-800">
            {place?.placeName}
          </h5>
          {placeDetails?.rating && (
            <span className="text-sm text-yellow-500">
              ⭐ {placeDetails.rating.toFixed(1)}
              {placeDetails.userRatingCount && (
                <span className="text-gray-500 text-xs ml-1">
                  ({placeDetails.userRatingCount})
                </span>
              )}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3">
          {place?.description || "No description available."}
        </p>

        {/* Recommended Time */}
        {place?.timeSlots && (
          <p className="text-sm text-blue-600 mb-3">
            🕒 Recommended Time: {place.timeSlots.start} - {place.timeSlots.end}
          </p>
        )}

        {/* Additional Information */}
        <div className="space-y-2">
          {placeDetails?.formattedAddress && (
            <p className="text-sm text-gray-600">
              📍 {placeDetails.formattedAddress}
            </p>
          )}
          <p className="text-sm text-gray-600">
            ⌛ Duration: {place?.estimatedTime || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            💰 Tickets: {place?.ticketPricing ? `₹${place.ticketPricing}` : "Free"}
          </p>
        </div>

        {/* Google Maps Link */}
        {place?.location?.latitude && place?.location?.longitude ? (
  <a
    href={`https://www.google.com/maps?q=${place.location.latitude},${place.location.longitude}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-blue-500 mt-3"
  >
    <FaMapLocationDot className="mr-2" />
    View on Google Maps
  </a>
) : (
  <a
    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place?.placeName || "Unknown Attraction")}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-blue-500 mt-3"
  >
    <FaMapLocationDot className="mr-2" />
    View on Google Maps
  </a>
)}

      </div>
    </div>
  );
}

export default PlaceCardItem;

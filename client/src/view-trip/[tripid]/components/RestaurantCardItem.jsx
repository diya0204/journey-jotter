import React, { useState, useEffect } from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';

export function RestaurantCardItem({ restaurant }) {
  const [photoUrl, setPhotoUrl] = useState('');
  const [placeDetails, setPlaceDetails] = useState(null);
  console.log(placeDetails)
  
  useEffect(() => {
    if (restaurant) {
      GetPlacePhoto();
    }
  }, [restaurant]);

  const GetPlacePhoto = async () => {
    try {
      const data = { textQuery: restaurant?.restaurantName };
      const response = await GetPlaceDetails(data);
      setPlaceDetails(response.data?.places?.[0]);
      const photoRef = response.data?.places?.[0]?.photos?.[0]?.name;


      if (photoRef) {
        const formattedPhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoRef);
        setPhotoUrl(formattedPhotoUrl);
      }
    } catch (error) {
      console.error('Error fetching place photo:', error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform border border-gray-200">
      
      {/* Restaurant Image */}
      <img
        src={photoUrl || restaurant?.restaurant_image_url || "/IMAGES/OIP (1).jpeg"}
        alt={restaurant?.restaurantName || "Restaurant image"}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/IMAGES/photo-1705346174602-83ae9e75c8e6.avif";
        }}
      />

      {/* Restaurant Info */}
      <div className="p-4">
        {/* Restaurant Name */}
        <h4 className="text-lg font-semibold text-gray-800 truncate">
          {restaurant?.restaurantName || "Unknown Restaurant"}
        </h4>

        {/* Cuisine */}
        <p className="text-sm text-gray-600 mt-1 truncate">
          🍛 <span className="font-medium">Cuisine:</span> {restaurant?.cuisine || "Not specified"}
        </p>

        {/* Average Price */}
        <p className="text-sm text-gray-600 mt-1">
          💰 <span className="font-medium">Avg. Price:</span> {restaurant?.priceRange || "N/A"}
        </p>

        {/* Dining Time Slot */}
        {restaurant?.timeSlots && (
          <p className="text-sm text-blue-600 font-medium mt-1">
            ⏰ Dining Time: {restaurant.timeSlots.start} - {restaurant.timeSlots.end}
          </p>
        )}

        {/* Google Maps Link */}
        {restaurant?.location?.latitude && restaurant?.location?.longitude ? (
          <a
            href={`https://www.google.com/maps?q=${restaurant.location.latitude},${restaurant.location.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 mt-3"
          >
            <FaMapLocationDot className="mr-2" />
            View on Google Maps
          </a>
        ) : (
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant?.restaurantName || "Unknown Restaurant")}`}
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

export default RestaurantCardItem;

import React, { useEffect, useState } from 'react';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';

function HotelCardItem({ hotel }) {
    const [photoUrl, setPhotoUrl] = useState(hotel?.imageURL || '/IMAGES/default-hotel.webp');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (hotel?.hotelName) {
            GetPlacePhoto();
        }
    }, [hotel]);

    const GetPlacePhoto = async () => {
        try {
            setIsLoading(true);
            const data = { textQuery: hotel?.hotelName };
            const result = await GetPlaceDetails(data);
            const fetchedPhotoName = result?.data?.places?.[0]?.photos?.[0]?.name;
            
            if (fetchedPhotoName) {
                const photoUrl = PHOTO_REF_URL.replace('{NAME}', fetchedPhotoName);
                setPhotoUrl(photoUrl);
            }
        } catch (error) {
            console.error("Error fetching hotel photo:", error);
            // Keep the default image if there's an error
            if (!hotel?.imageURL) {
                setPhotoUrl('/IMAGES/default-hotel.webp');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel?.hotelName + ", " + hotel?.hotelAddress)}`} 
            target='_blank' 
            rel='noopener noreferrer'
        > 
            <div className='hover:scale-105 transition-all cursor-pointer p-2 border rounded-xl shadow-sm bg-white'>  
                <div className='relative'>
                    <img 
                        src={photoUrl} 
                        className={`rounded-xl object-cover w-full h-40 ${isLoading ? 'animate-pulse bg-gray-200' : ''}`}
                        alt={hotel?.hotelName || "Hotel"}
                        onError={(e) => {
                            e.target.src = '/IMAGES/default-hotel.webp';
                            setIsLoading(false);
                        }}
                        onLoad={() => setIsLoading(false)}
                    />
                </div>
                <div className='my-2 flex flex-col gap-1'>
                    <h2 className='font-medium text-lg truncate'>{hotel?.hotelName || "Unknown Hotel"}</h2>
                    <h2 className='text-xs text-gray-500'>📍 {hotel?.address || "Address not available"}</h2>
                    <h2 className='text-sm font-semibold'>₹ {hotel?.pricePerNight || "N/A"} per night</h2>
                    <h2 className='text-sm text-yellow-500'>⭐ {hotel?.rating || "Not rated"}</h2>
                    <p className='text-xs text-gray-500'>{hotel?.description || "No description available."}</p>
                </div> 
            </div>
        </a>
    );
}

export default HotelCardItem;

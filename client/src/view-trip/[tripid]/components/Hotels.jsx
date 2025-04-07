import React from 'react';
import HotelCardItem from './HotelCardItem';

function Hotels({ trip }) {
    const hotels = trip?.tripData?.accommodations || []; 

    return (
        <div>
            <h2 className='font-bold text-xl mt-5'>Hotel Recommendations</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                {hotels.length > 0 ? (
                    hotels.map((hotel, index) => (
                        <HotelCardItem key={index} hotel={hotel} />
                    ))
                ) : (
                    <p className="text-gray-500">No hotels found.</p>
                )}
            </div>
        </div>
    );
}

export default Hotels;
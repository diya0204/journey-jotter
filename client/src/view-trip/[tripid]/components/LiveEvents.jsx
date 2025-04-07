import React from 'react';

function LiveEvents({ events }) {
  if (!events || events.length === 0) return null;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">🎪 Live Events & Experiences</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {events.map((event, index) => (
          <div key={index} className="p-4 border rounded-lg bg-white shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">{event.eventName}</h3>
              {event.ticketPrice > 0 && (
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  ₹{event.ticketPrice}
                </span>
              )}
            </div>
            
            <p className="text-sm text-gray-600 mb-2">
              📅 {event.eventDate} | 🕒 {event.eventTime}
            </p>
            
            {event.eventImageURL && (
              <img 
                src={event.eventImageURL} 
                alt={event.eventName}
                className="w-full h-48 object-cover rounded mb-3"
              />
            )}

            <div className="space-y-2">
              {event.venueName && (
                <p className="text-sm">
                  📍 {event.venueName} - {event.venueAddress}
                </p>
              )}
              {event.bookingInfo && (
                <a
                  href={event.bookingInfo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:underline text-sm"
                >
                  🎟️ Book Tickets
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveEvents;
import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './service/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';

function MyTrips() {
  const [user, setUser] = useState(null);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [locationImages, setLocationImages] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      navigate('/');
      return;
    }
    setUser(JSON.parse(userStr));
  }, [navigate]);

  useEffect(() => {
    if (user?.email) {
      fetchUserTrips();
    }
  }, [user]);

  const fetchUserTrips = async () => {
    try {
      const q = query(
        collection(db, 'AITrips'),
        where('userEmail', '==', user.email)
      );
      const querySnapshot = await getDocs(q);
      const tripsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTrips(tripsData);
    } catch (error) {
      console.error('Error fetching trips:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchLocationImage = async (location) => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(location.split(',')[0])}&per_page=1&orientation=landscape`,
          {
            headers: {
              Authorization:`Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
            }
          }
        );
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setLocationImages(prev => ({
            ...prev,
            [location]: data.results[0].urls.regular
          }));
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    if (trips.length > 0) {
      trips.forEach(trip => {
        const location = trip.userSelection?.location?.label;
        if (location && !locationImages[location]) {
          fetchLocationImage(location);
        }
      });
    }
  }, [trips]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-100 pt-20">
          <div className="animate-pulse">
            {/* Skeleton loading UI */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-64 rounded-b-lg">
              <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="h-20 bg-gray-300 rounded w-1/4"></div>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-lg shadow-md h-64"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 pt-20">
        {/* Profile Header Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex items-center space-x-6">
              <img
                src={user?.picture || `https://api.dicebear.com/7.x/adventurer/svg?seed=${user?.email || 'default'}`}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white bg-white"
              />
              <div>
                <h1 className="text-3xl font-bold">{user?.name}</h1>
                <p className="text-blue-100">{user?.email}</p>
                <p className="mt-2">
                  <span className="font-semibold">{trips.length}</span> trips planned
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trips Grid Section */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">My Trips</h2>
          {trips.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <h3 className="text-xl text-gray-600">No trips planned yet</h3>
              <button
                onClick={() => navigate('/create')}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Plan Your First Trip
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trips.map((trip) => {
                const location = trip.userSelection?.location?.label || 'travel';
                const imageUrl = locationImages[location] || 
                  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80'; // Default travel image
                
                return (
                  <div
                    key={trip.id}
                    onClick={() => navigate(`/view-trip/${trip.id}`)}
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <img
                      src={imageUrl}
                      alt={location}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">
                        {trip.userSelection?.location?.label}
                      </h3>
                      <p className="text-gray-600">
                        {trip.userSelection?.startDate} • {trip.userSelection?.noOfDays} days
                      </p>
                      <div className="mt-2">
                        <span className="inline-block px-2 py-1 text-sm rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MyTrips;
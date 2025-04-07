import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';
import UserTripCardItem from './UserTripCardItem'; 

function MyTrips() {
    const navigate = useNavigate();
    const [userTrips, setUserTrips] = useState([]);

    useEffect(() => {
        GetUserTrips();
    }, []);

    /**
     * Used to get all user trips
     */
    const GetUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigate('/');
            return;
        }

        setUserTrips([]);
        const q = query(collection(db, 'AITrips'), where('userEmail', '==', user.email));
        const querySnapshot = await getDocs(q);
        
        const trips = [];
        querySnapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
            trips.push(doc.data());
        });

        setUserTrips(trips);
    };

    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
            <h2 className='font-bold text-3xl'>My Trips</h2>
            <div className='grid grid-cols-2 mt-10 md:grid-cols-3 gap-5'>
                {userTrips.length > 0
                    ? userTrips.map((trip, index) => (
                        <UserTripCardItem trip={trip} key={index} />
                    ))
                    : [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <div key={index} className='h-[250px] w-full bg-gray-200 rounded-xl animate-pulse flex items-center justify-center'>
                            <h2 className='text-gray-400 text-lg'>Loading...</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default MyTrips;

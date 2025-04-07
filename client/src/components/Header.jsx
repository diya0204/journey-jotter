import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const user = localStorage.getItem('user');
      setIsLoggedIn(!!user);
    };

    checkLoginStatus();
    // Add event listener for storage changes
    window.addEventListener('storage', checkLoginStatus);
    
    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  const handleLoginClick = () => {
    if (isLoggedIn) {
      navigate('/myTrip');
    } else {
      navigate('/Login');
    }
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white fixed w-full z-10 top-0 left-0">
      <div className="logo">
        <a href="/Dashboard" className="text-white text-decoration-none text-xl font-semibold">
          Journey<span className="text-sky-400">jotter</span>
        </a>
      </div>
      <ul className="flex space-x-4">
        <li><a className="text-white hover:text-sky-400" href="/">Home</a></li>
        <li><a className="text-white hover:text-sky-400" href="/About">About</a></li>
        <li><a className="text-white hover:text-sky-400" href="/Packages">Packages</a></li>
        <li><a className="text-white hover:text-sky-400" href="/Create">Customize</a></li>
        <li><a className="text-white hover:text-sky-400" href="/Contact">Contact</a></li>
        <li>
          <button 
            className="text-white hover:text-sky-400" 
            onClick={handleLoginClick}
          >
            {isLoggedIn ? 'My Trips' : 'Login'}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;

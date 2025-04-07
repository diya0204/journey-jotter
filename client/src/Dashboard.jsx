/* eslint-disable no-unused-vars */
import React, { useEffect, useState, Fragment } from 'react';
import './Dashboard.css'; 
import Pricing from "./Pricing";
import { Link, useNavigate } from "react-router-dom";
import Portifolio from "./Portifolio";
import Section1 from './Section1';
import PopLogin from './PopLogin';
import ExpenseTracker from './ExpenseTracker';
import { AiFillFacebook } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { CiTwitter } from 'react-icons/ci';
import { FaLinkedin } from 'react-icons/fa';
import Chatbot from "./components/Chatbot";
import Header from "./components/Header";

const Dashboard = () => {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);
  const [showChatbot, setShowChatbot] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const slides = [
    '/IMAGES/grant-ritchie-x1w_Q78xNEY-unsplash.jpg',
    '/IMAGES/jony-y-msjjpXdEjIc-unsplash.jpg',
    '/IMAGES/kotagauni-srinivas-nn3kv42_R3A-unsplash.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleLoginClick = () => {
    if (isLoggedIn) {
      navigate('/myTrip');
    } else {
      navigate('/Login');
    }
  };

  return (
  <div className="overflow-y-hidden">
    <div >
      <Header />
      {/* Slideshow Background */}
      <div className="slideshow-container relative z-1">
        {slides.map((src, index) => (
          <div
            key={index}
            className={`mySlides absolute top-0 left-0 w-full h-screen bg-cover bg-center transition-opacity duration-1000 ${slideIndex === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
         <div className="text">
      <div className="over">
        <div className="over-content">
          <h1>Find your best travel itinerary With Us!</h1>
          <p>Comprehensive guide to your city.</p>
          <button className="cta-button"><a href='/Create'> Get Started →</a></button>
        </div>
      </div>
   
      </div>
      </div>

      {/* Hero Section */}
     
    </div>
    <div>
    <h2 className="text-center text-4xl font-extrabold: 800 m-10 ">Handpicked Collections for You</h2>
    <section className="popular-places bg-gray-100 m-10 ">
      
        <div className="places-grid">
          {[
            { 
              title: 'jaipur', 
              rating: 4.7, 
              location: 'Rajasthan', 
              image: 'IMAGES/GettyImages-518387310-04a30994bfb1461bb8000f1864ca1fc5 (1).jpg' 
            },
            { 
              title: 'Prayagraj', 
              rating: 4.3, 
              location: 'Uttar Pradesh', 
              image: 'IMAGES/Holy-Triangle-Ayodhya-Prayagraj-Banaras-01-768x432.jpg' 
            },
            { 
              title: 'Himachal Pradesh', 
              rating: 4.5, 
              location: 'Northern India', 
              image: 'IMAGES/kasol_theblondpost.webp' 
            },
            { 
              title: 'varanasi', 
              rating: 4.9, 
              location: 'Uttar Pradesh', 
              image: 'IMAGES/varanasi_for-web.jpg' 
            },
            { 
              title: 'Udaipur', 
              rating: 4.7, 
              location: 'Rajasthan', 
              image: 'IMAGES/1328400-city-palace-udaipur.jpg' 
            },
          ].map((place, index) => (
            <div className="place-card" key={index}>
              <img src={place.image} alt={place.title} className="place-image" />
              <div className="place-details">
                <h3>{place.title}</h3>
                <p>{place.location}</p>
                <span className="rating">⭐ {place.rating}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="fixed bottom-5 right-5 flex flex-col space-y-3 z-50">
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center gap-2"
            onClick={() => setShowChatbot(!showChatbot)}
          >
            <span className="text-xl">🤖</span>
            <span>Travel Assistant</span>
          </button>
        <a href="/ExpenseTracker" className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
          💰 Expense Tracker
        </a>
      </div>

      {/* Chatbot Component */}
      <Chatbot isVisible={showChatbot} onClose={() => setShowChatbot(false)} />


      </section>
      <PopLogin/>
      <Portifolio/>
      <Section1/>
      <Pricing/>
      <div>
      <div className="footerBottom bg-gray-900 text-white py-6">
      <div className="landingContainer flex flex-col md:flex-row justify-between items-center px-6">

        <div className="socialMediaLinks flex space-x-4">
      <a 
        className="flex justify-center items-center" 
        href="https://www.instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <BsInstagram className="text-gray-500 w-6 h-6" />
      </a>
      <a 
        className="flex justify-center items-center" 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <CiTwitter className="text-gray-500 w-6 h-6" />
      </a>
      <a 
        className="flex justify-center items-center" 
        href="https://www.linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-gray-500 w-6 h-6" />
      </a>
      <a 
        className="flex justify-center items-center" 
        href="https://www.facebook.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <AiFillFacebook className="text-gray-500 w-6 h-6" />
      </a>
    </div>

        {/* Company Info & Country Links */}
        <div className="pushRight flex flex-col text-center md:text-right mt-4 md:mt-0">
          <p className="text-lg font-bold"> 2025 JOURNEYJOTTER PVT. LTD.</p>
          <p className="mt-2">
            Country:
            <span className="font-black">
              <a
                className="border border-white px-2 ml-2"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                India
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
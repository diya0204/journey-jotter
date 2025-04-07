
import React from "react";
import "./TravelItinerary.css";
const TravelItinerary = ({ destination, onBack, onNext, onImageClick}) => {
    const activities = [
        {
          name: "City Palace",
          image: "https://s7ap1.scene7.com/is/image/incredibleindia/city-palace-udaipur-rajasthan-6-musthead-hero?qlt=82&ts=1727353245335",
          link: "CityPalace",
        },
        {
          name: "Jagdish Temple",
          image: "https://udaipurtourism.co.in/images/places-to-visit/headers/jagdish-temple-udaipur-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg",
          link: "JagdishTemple",
        },
        {
            name: "Ambrai Restaurant",
            image: "https://c8.alamy.com/comp/C4X0TP/view-of-city-palace-from-ambrai-restaurant-udaipur-rajasthan-india-C4X0TP.jpg",
            link: "AmbraiRestaurant",
        },
        {
            name: "Lake Pichola Boat Ride",
            image: "https://www.indianexcursions.co/wp-content/uploads/2016/11/shikhara-boat-ride-lake-pichola-udaipur-luxury-rajasthan-tour.jpg",
            link: "LakePichola",
        },
      ];
  return (
    <div className="travel-container">
      {/* Header Section */}
      <div className="headers">
        <h1>Udaipur</h1>
        <h2>Day 1 - Explore Majestic Forts & Palaces</h2>
        <div className="buttons">
          <button className="nav-button" onClick={() => onBack("BudgetUdaipur")}>Previous</button>
          <button className="nav-button" onClick={() => onNext("Udaipur2")}>Next</button>
        </div>
      </div>
      <div className="content">
        <h2 className="section-title">Activities</h2>
        <div className="activity-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card"
              onClick={() => activity.link && onImageClick(activity.link)}
              style={{ cursor: activity.link ? "pointer" : "default" }}>
              <img src={activity.image} alt={activity.name} />
              <div className="overlay">
                <h3>{activity.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default TravelItinerary;

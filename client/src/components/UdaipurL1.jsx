// eslint-disable-next-line no-unused-vars
import React from "react";
import "./UdaipurL1.css";
// eslint-disable-next-line react/prop-types, no-unused-vars
const UdaipurL1 = ({ destination, onBack, onNext, onImageClick}) => {
    const activities = [
        {
            name: "Taj Lake Palace",
            image: "https://static.toiimg.com/photo/31537194.cms",
            link: "TajLakePalace",
        },
        {
            name: "The Leela Palace",
            image: "https://www.theleela.com/prod/content/assets/styles/tl_840_604_webp/public/2024-01/Swimming-pool-view-udaipur.jpg.webp?VersionId=2hrpYFNPhUTLylNw0cUUVIjHfpCQZiYS&itok=7CXMogdO",
            link: "TheLeelaPalace",
        },
        {
            name: "Jag Mandir",
            image: "https://api.blessingsonthenet.com/uploads/hotels/6c5f6611ddf3b769cd1eb71a440436e0-1691422514750-Jagmandir%20Island%20Palace%20Udaipur.jpg",
            link: "JagMandir",
        },
        {
          name: "City Palace",
          image: "https://s7ap1.scene7.com/is/image/incredibleindia/city-palace-udaipur-rajasthan-6-musthead-hero?qlt=82&ts=1727353245335",
          link: "CityPalace",
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
        {
            name: "Monsoon Palace",
            image: "https://optimatravels.com/images/rajasthan-images/mansoon-palace-udaipur-head.jpg",
            link: "MonsoonPalace",
        }
      ];
  return (
    <div className="travel-container">
      {/* Header Section */}
      <div className="headerl">
        <h1>Udaipur</h1>
        <h2>Day 1 - Royal Heritage & Cultural Immersion</h2>
        <div className="buttons">
          <button className="nav-button" onClick={() => onBack("BudgetUdaipur")}>Previous</button>
          <button className="nav-button" onClick={() => onNext("UdaipurL2")}>Next</button>
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

export default UdaipurL1;

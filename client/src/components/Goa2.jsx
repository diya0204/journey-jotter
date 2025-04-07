// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Goa2.css";
// eslint-disable-next-line react/prop-types, no-unused-vars
const Goa2 = ({ destination, onBack, onNext}) => {
    const activities = [
      {
        name: "Dudhsagar Waterfalls",
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/f3/7c/34.jpg",
      },
        {
          name: "Spice Plantation",
          image: "https://7seasfly.com/wp-content/uploads/2024/01/tropical-plantation6.jpeg",
        },
        {
            name: "Old Goa",
            image: "https://makeithappen.co.in/wp-content/uploads/2021/12/Old-Goa-G1-Mobile-8.jpg",
        },
        {
            name: "Basilica of Bom Jesus",
            image: "https://www.seawatersports.com/images/places/basilica-of-bom-jesus.jpg",
        },
        {
            name: "Basilica of Se Cathedral",
            image: "https://s7ap1.scene7.com/is/image/incredibleindia/se-cathedral-goa-musthead-hero?qlt=82&ts=1726735420340",
        },
        {
            name: "Colva Beach",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5f/db/11/caption.jpg?w=300&h=300&s=1",
        },
        {
            name: "Palolem Beach",
            image: "https://www.tourmyindia.com/states/goa/image/palolem-beach-banner.webp",
        },
        {
            name: "Sunset Cruise on the Mandovi River",
            image: "https://traveladventuresgoa.com/wp-content/uploads/2019/08/boat-cruise-on-mandovi-2.jpg",
        },
        {
            name: "Seafood Shack",
            image: "https://www.tusktravel.com/blog/wp-content/uploads/2022/04/Fort-House-Hotel-Kochi2.jpg",
        }
      ];
  return (
    <div className="travel-container">
      {/* Header Section */}
      <div className="headerG2">
        <h1>Goa</h1>
        <h2>Day 2 - South Goa & Cultural Tour</h2>
        <div className="buttons">
          <button className="nav-button" onClick={onBack}>Previous</button>
          <button className="nav-button" onClick={onNext}>Next</button>
        </div>
      </div>
      <div className="content">
        <h2 className="section-title">Activities</h2>
        <div className="activity-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card">
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

export default Goa2;
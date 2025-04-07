// eslint-disable-next-line no-unused-vars
import React from "react";
import "./GoaL2.css";
// eslint-disable-next-line react/prop-types, no-unused-vars
const GoaL2 = ({ destination, onBack, onNext}) => {
    const activities = [
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
            name: "Museum of Christian Art",
            image: "https://www.soultravelling.in/system/images/000/589/044/9f422d4bc4f07c9e76ee9f377fb5ba26/original/i-Dzp2522-X2.jpg?1650094893",
        },
        {
            name: "Ferry Ride to Chorao Island",
            image: "https://content.jdmagicbox.com/comp/goa/l5/0832px832.x832.190823103322.m1l5/catalogue/chorao-ferry-ribandar-goa-ferry-services-t6l58whbsl.jpg",
        },
        {
            name: "Dr. Salim Ali Bird Sanctuary",
            image: "https://travelogyindia.b-cdn.net/storage/app/article/446/salim-ali-bird-sanctuary-goa-thumb.jpg",
        },
        {
            name: "Goa Marriott’s Waterfront Terrace",
            image: "https://b.zmtcdn.com/data/pictures/5/16519255/09a92909bc741a1e38c9baa6bde81de5_featured_v2.jpg",
        },
        {
            name: "Spice Plantation",
            image: "https://7seasfly.com/wp-content/uploads/2024/01/tropical-plantation6.jpeg",
          },
        {
            name: "Fado Music Performance",
            image: "https://th-i.thgim.com/public/life-and-style/fashion/iufvrt/article67650005.ece/alternates/FREE_1200/Entre%20Nos.jpg",
        },
        {
            name: "Cohiba",
            image: "https://b.zmtcdn.com/data/pictures/6/130966/fa381a8509f816bfe8949ba39cdb5711.jpg?fit=around|750:500&crop=750:500;*,*",
        }
      ];
  return (
    <div className="travel-container">
      {/* Header Section */}
      <div className="headerGl2">
        <h1>Goa</h1>
        <h2>Day 2 - Historical Exploration & Fine Dining</h2>
        <div className="buttons">
        <button className="nav-button" onClick={() => onBack("GoaL1")}>Previous</button>
        <button className="nav-button" onClick={() => onNext("GoaL3")}>Next</button>
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

export default GoaL2;

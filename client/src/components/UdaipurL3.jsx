// eslint-disable-next-line no-unused-vars
import React from "react";
import "./UdaipurL3.css";
// eslint-disable-next-line react/prop-types, no-unused-vars
const UdaipurL3 = ({ destination, onBack, onNext, onImageClick}) => {
    const activities = [
        {
            name: "The Leela Palace Spa",
            image: "https://images.squarespace-cdn.com/content/v1/5a5596188dd0411a8df1b41a/1684035730731-CHQ80MOFW6EYDRIYKS01/Couple+Treatment+Room.jpg",
            link: "TheLeelaPalace",
        },
        {
            name: "Shilpgram",
            image: "https://www.clubmahindra.com/blog/media/section_images/shuttersto-44b5e1d70cfd88c.jpg",
            link: "Shiplgram",
        },
        {
            name: "Vintage Car Museum",
            image: "https://stat.overdrive.in/wp-content/uploads/2016/09/Udaipur-Museum-3.jpg",
            link: "VintageCarMuseum",
        },
        {
          name: "Ahar Cenotaphs",
          image: "https://visitplacesindia.com/wp-content/uploads/2024/09/ahar-cenotaphs-udaipur.jpg",
          link: "AharCenotaphs",
        },
        {
            name: "Taj Lake Palace's Neel Kamal Restaurant",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/15/0a/7f/the-open-kitchen.jpg?w=900&h=500&s=1",
            link: "TajLakePalace",
        }
      ];
  return (
    <div className="travel-container">
      {/* Header Section */}
      <div className="headerl3">
        <h1>Udaipur</h1>
        <h2>Day 3 - Relaxation & Exclusive Experiences</h2>
        <div className="buttons">
          <button className="nav-button" onClick={() => onBack("UdaipurL2")}>Previous</button>
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

export default UdaipurL3;

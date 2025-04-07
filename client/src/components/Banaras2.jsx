// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Banaras2.css";
// eslint-disable-next-line react/prop-types, no-unused-vars
const Banaras2 = ({ destination, onBack, onNext, onImageClick}) => {
    const activities = [
        {
            name: "Sarnath",
            image: "https://cdn.getyourguide.com/img/tour/64818eab0a871.jpeg/99.jpg",
            link: "Sarnath",
        },
        {
            name: "Ramnagar Fort",
            image: "https://www.holidify.com/images/cmsuploads/compressed/Ramnagar_Fort%252C_Varanasi%252C_UP_20190116143129.JPG",
            link: "RamnagarFort",
        },
        {
            name: "Godowlia Market",
            image: "https://media1.thrillophilia.com/filestore/6nog73guri1v0sofb4lkv2liqwsu_1549261360_shutterstock_1061787332.jpg?w=400&dpr=2",
            link: "GodowliaMarket",
        },
        {
          name: "Varanasi’s Pind Balluchi",
          image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/67/63/0c/the-behind-yellow-doors.jpg?w=400&h=300&s=1",
          link: "PindBalluchi",
        }
      ];
  return (
    <div className="travel-container">
      {/* Header Section */}
      <div className="headerb2">
        <h1>Banaras</h1>
        <h2>Day 2 - Sarnath & Cultural Spots</h2>
        <div className="buttons">
          <button className="nav-button" onClick={() => onBack("Banaras1")}>Previous</button>
          <button className="nav-button" onClick={() => onNext("Banaras3")}>Next</button>
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

export default Banaras2;

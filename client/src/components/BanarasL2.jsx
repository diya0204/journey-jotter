// eslint-disable-next-line no-unused-vars
import React from "react";
import "./BanarasL2.css";
// eslint-disable-next-line react/prop-types, no-unused-vars
const BanarasL2 = ({ destination, onBack, onNext, onImageClick}) => {
    const activities = [
        {
            name: "Sarnath",
            image: "https://cdn.getyourguide.com/img/tour/64818eab0a871.jpeg/99.jpg",
            link: "Sarnath",
        },
        {
            name: "The Great Kabab Factory",
            image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/f9/33/31/photo0jpg.jpg",
            link: "TheGreatKababFactory",
        },
        {
            name: "Boat Ride on the Ganges",
            image: "https://holyvoyages.com/images/morning-boat-ride-in-varanasi.jpg",
            link: "BoatRideGanges",
          },
          {
            name: "Classical Music Concert at a Heritage Haveli",
            image: "https://www.travelplanraj.com/ckuploads/mornig-music.jpg",
            link: "HeritageHaveli",
          },
          {
              name: "Tandoor Villa",
              image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/54/a1/6e/tandoor-villa.jpg?w=900&h=500&s=1",
              link: "TandoorVilla",
          }
      ];
  return (
    <div className="travel-container">
      {/* Header Section */}
      <div className="headersb2">
        <h1>Banaras</h1>
        <h2>Day 2 - Sarnath & Cultural Immersion</h2>
        <div className="buttons">
          <button className="nav-button" onClick={() => onBack("BanarasL1")}>Previous</button>
          <button className="nav-button" onClick={() => onNext("BanarasL3")}>Next</button>
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

export default BanarasL2;

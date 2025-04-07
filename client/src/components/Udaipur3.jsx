/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Udaipur3.css";
// eslint-disable-next-line no-unused-vars
const Udaipur3 = ({destination, onBack, onImageClick}) => {
    const activities = [
        {
          name: "Eklingji Temple",
          image: "https://www.kalyantoursudaipur.com/blog/wp-content/uploads/2023/12/Thank.jpg",
          link: "EklingjiTemple",
        },
        {
          name: "Bapu Bazaar",
          image: "https://maharanacabs.in/wp-content/uploads/2018/11/udaipur-market-3.jpg",
          link: "BapuBazaar",
        },
        {
            name: "Ranakpur Jain Temple",
            image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2020/01/ranakpur-temple-jain-rajasthan-india-1.jpg",
            link: "RanakpurJainTemple",
        },
        {
            name: "Gulab Bagh",
            image: "https://im.hunt.in/cg//Udaipur/City-Guide/udai1.jpg",
            link: "GulabBagh",
        },
        {
            name: "Hathi Pol Bazaar",
            image: "https://media1.thrillophilia.com/filestore/j0re9camcvm8nhge4b750nqqxymj_istockphoto-1147478209-1024x1024-transformed.jpeg",
            link: "HathiPolBazaar",
        }
      ];
  return (
    <div className="travel-container">
      <div className="header3">
        <h1>Udaipur</h1>
        <h2>Day 3 - Temples & Local Markets</h2>
        <div className="buttons">
          <button className="nav-button" onClick={() => onBack("Udaipur.")}>Previous</button>
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

export default Udaipur3;
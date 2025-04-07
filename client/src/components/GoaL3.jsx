// eslint-disable-next-line no-unused-vars
import React from "react";
import "./GoaL3.css";
// eslint-disable-next-line react/prop-types, no-unused-vars
const GoaL3 = ({ destination, onBack, onNext}) => {
    const activities = [
        {
            name: "Island-hopping Tour to Grand Island",
            image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/d5/5d/24.jpg",
        },
        {
            name: "Island-hopping Tour to Butterfly Beach",
            image: "https://cdn1.tripoto.com/media/filter/tst/img/2052077/Image/1652178577_6y0rxn7b7ah41_scaled.jpeg.webp",
        },
        {
            name: "Titos Lane",
            image: "https://ab487509f8decc2c0cd2-9ff2a6143bff296f88e68c3257991f4b.ssl.cf6.rackcdn.com/7486960e426ffdbeca_place.jpg",
        },
        {
            name: "Panjim’s boutiques",
            image: "https://media.cntraveller.in/wp-content/uploads/2015/12/flame.jpg",
        },
        {
            name: "The Leela’s Susegado",
            image: "https://lh3.googleusercontent.com/DzhxW4ERPne4MWiTWPwGstqUu7W1jkP3MS5SjU9NMyq4zWxRjJD30Ken9avOToNG97a360d9g12NjKjky-54I0NeHIQo99foEzL9EL4=w1200-rw",
        },
        {
            name: "Taj’s Lobster Shack",
            image: "https://b.zmtcdn.com/data/pictures/7/130707/e0c1091a3ff56a3b39856d70284389ce.jpg?fit=around|750:500&crop=750:500;*,*",
        },
        {
            name: "SinQ Beach Club",
            image: "https://sinq.in/wp-content/uploads/2021/10/EZP_6090-scaled.jpg",
        },
        {
            name: "Cavala",
            image: "https://content.jdmagicbox.com/comp/goa/m9/0832px832.x832.100703114438.a3m9/catalogue/cavala-seaside-restaurant-calangute-goa-continental-restaurants-1skoxjtfr1.jpg",
          }
      ];
  return (
    <div className="travel-container">
      {/* Header Section */}
      <div className="headerGl3">
        <h1>Goa</h1>
        <h2>Day 3 - Island Hopping & Watersports Adventure</h2>
        <div className="buttons">
        <button className="nav-button" onClick={() => onBack("GoaL2")}>Previous</button>
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

export default GoaL3;

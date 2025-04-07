// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Goa1.css";
// eslint-disable-next-line react/prop-types, no-unused-vars
const Goa1 = ({ destination, onBack, onNext}) => {
    const activities = [
      {
        name: "Calangute Beach",
        image: "https://www.tourmyindia.com/socialimg/calangute-beach-goa.jpg",
      },
        {
          name: "Anjuna",
          image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/427331279.webp?k=602f1fcec94bdc90d3430652c06460f4e6f29a1a90a3d915bd5a18dd9fbc2fe0&o=",
        },
        {
            name: "Calangute",
            image: "https://bulbulonthewing.com/wp-content/uploads/2021/03/IMG_20210303_092501-1-min.jpg",
        },
        {
            name: "Baga Beach",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/95/baga-sea-beach.jpg?w=800&h=-1&s=1",
        },
        {
            name: "Goan breakfast at a local shack",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/b7/bb/bb/fantastic-foodfantastic.jpg?w=900&h=500&s=1",
        },
        {
            name: "Aguada Fort",
            image: "https://www.explorebees.com/uploads/Fort%20Aguada%20(3).jpg",
        },
        {
            name: "Arabian Sea",
            image: "https://goatourspackage.com/wp-content/uploads/2018/09/Dolphin-Safari-Boat-Tour-in-Goa.jpg",
        },
        {
            name: "Candolim Beach",
            image: "https://www.acroncandolimresortgoa.com/explore-goa/beaches-in-goa/candolim-beach/images/candolim-beach.jpg",
        },
        {
            name: "Anjuna Beach",
            image: "https://www.trawell.in/admin/images/upload/121905364Anjuna_Beach_Main.jpg",
        },
        {
            name: "Beach Shack",
            image: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/04/13155605/untitled-design-7.jpeg",
        },
        {
            name: "Mapusa",
            image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/29/52e1be93ddccd98f0a5be9d9d82cec9c_1000x1000.jpg",
        },
        {
            name: "Nightlife at Tito’s Lane",
            image: "https://www.seawatersports.com/images/places/titos-pub.jpg",
        }
      ];
  return (
    <div className="travel-container">
      {/* Header Section */}
      <div className="headerG1">
        <h1>Goa</h1>
        <h2>Day 1 - North Goa Exploration (Beaches & Nightlife)</h2>
        <div className="buttons">
        <button className="nav-button" onClick={() => onBack("BudgetGoa")}>Previous</button>
        <button className="nav-button" onClick={() => onNext("Goa2")}>Next</button>
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

export default Goa1;

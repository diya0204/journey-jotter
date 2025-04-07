// eslint-disable-next-line no-unused-vars
import React from "react";
import "./GoaL1.css";
// eslint-disable-next-line react/prop-types, no-unused-vars
const GoaL1 = ({ destination, onBack, onNext}) => {
    const activities = [
      {
        name: "The Leela",
        image: "https://www.distantfrontiers.in/wp-content/uploads/2021/11/Leela-Goa.jpg",
      },
        {
          name: "Taj Exotica",
          image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/5d/3f/exterior.jpg?w=700&h=-1&s=1",
        },
        {
            name: "W Goa",
            image: "https://q-xx.bstatic.com/xdata/images/hotel/max500/474143541.jpg?k=5a62500dd00d6081042a8a0377b07df0842f74b8a8f180d3fe7ec77733775aab&o=",
        },
        {
            name: "Spa Session by the Beach",
            image: "https://www.ahstatic.com/photos/8861_ho_00_p_1024x768.jpg",
        },
        {
            name: "Private Yoga Class by the Beach",
            image: "https://media-cdn.tripadvisor.com/media/photo-s/13/b5/2c/b4/the-beach-house-goa.jpg",
        },
        {
            name: "Alila Diwa",
            image: "https://d2mo2a5fvrklap.cloudfront.net/app/uploads/sites/14/2022/08/04194841/diwagoa-dine-vivo-hero-desktop.jpg",
        },
        {
            name: "Vagator Beach",
            image: "https://content.jdmagicbox.com/comp/goa/n3/0832px832.x832.220127234752.c6n3/catalogue/vagator-beach-bardez-goa-beaches-cvo2iouvu3.jpg?clr=",
        },
        {
            name: "Morjim Beach",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/b0/c2/4f/private-beach-hotels.jpg?w=1200&h=-1&s=1",
        },
        {
            name: "Thalassa",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/21/97/c0/thalassa-beach-boutique.jpg?w=1200&h=-1&s=1",
        },
        {
            name: "A Reverie",
            image: "https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL1VualhVMG54UW1tenRZRC1jeXVmMGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0Ijo2NDAsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsInRvRm9ybWF0IjogIndlYnAifX0=",
        },
        {
            name: "Gunpowder",
            image: "https://imgmediagumlet.lbb.in/media/2021/10/615e6d09a3d394569ca9d5b0_1633578249228.jpg",
        }
      ];
  return (
    <div className="travel-container">
      {/* Header Section */}
      <div className="headerGl1">
        <h1>Goa</h1>
        <h2>Day 1 - Luxe Beachside Relaxation & Sunset Cruise</h2>
        <div className="buttons">
        <button className="nav-button" onClick={() => onBack("BudgetGoa")}>Previous</button>
        <button className="nav-button" onClick={() => onNext("GoaL2")}>Next</button>
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

export default GoaL1;

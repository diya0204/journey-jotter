// eslint-disable-next-line no-unused-vars
import React from "react";
import "./BanarasL3.css";
// eslint-disable-next-line react/prop-types, no-unused-vars
const BanarasL3 = ({ destination, onBack, onNext, onImageClick}) => {
    const activities = [
        {
            name: "Ramnagar Fort",
            image: "https://www.holidify.com/images/cmsuploads/compressed/Ramnagar_Fort%252C_Varanasi%252C_UP_20190116143129.JPG",
            link: "RamnagarFort",
        },
        {
            name: "Brijrama Palace’s rooftop café with panoramic Ganga views",
            image: "https://q-xx.bstatic.com/xdata/images/hotel/max500/229517492.jpg?k=c6a0b313e442e19f968bc2e440ddbb497b3e8fb3d0e5622cb062cf39805c3ba8&o=",
            link: "BrijRamaPalace",
        },
        {
            name: "Godowlia Market",
            image: "https://media1.thrillophilia.com/filestore/6nog73guri1v0sofb4lkv2liqwsu_1549261360_shutterstock_1061787332.jpg?w=400&dpr=2",
            link: "GodowliaMarket",
          },
          {
            name: "Peshawri (ITC Mughal-style dining)",
            image: "https://b.zmtcdn.com/data/pictures/9/3400059/c58de1647a98e85c3791a470c176cdac.jpg?fit=around|960:500&crop=960:500;*,*",
            link: "Peshawri",
          }
      ];
  return (
    <div className="travel-container">
      {/* Header Section */}
      <div className="headersb3">
        <h1>Banaras</h1>
        <h2>Day 3 - Offbeat Exploration & Relaxation</h2>
        <div className="buttons">
          <button className="nav-button" onClick={() => onBack("BanarasL2")}>Previous</button>
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

export default BanarasL3;

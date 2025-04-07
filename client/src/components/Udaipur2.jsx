/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Udaipur2.css";
// eslint-disable-next-line no-unused-vars
const Udaipur2 = ({destination, onBack, onNext, onImageClick}) => {
    const activities = [
        {
          name: "Monsoon Palace",
          image: "https://optimatravels.com/images/rajasthan-images/mansoon-palace-udaipur-head.jpg",
          link: "MonsoonPalace",
        },
        {
          name: "Fateh Sagar Lake",
          image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHhv9Wdh_4ZfzGLXBe3mUgJczay2QBgUpV_V7_FQoa40eMvPjt3PRgzDcgzXnMKRHBgBX_rY9JFnDNoespc4XBpSljSh20wY8Xi3m8m_gjbNUomz4w6Uu4tsV07dh8rXZ5Al-9FG1xDTg/s720/Fateh+Sagar+Lake+in+Udaipur+-+Rajasthan+State+of+India-6.jpg",
          link: "FatehSagarLake",
        },
        {
            name: "Saheliyon Ki Bari",
            image: "https://www.theleela.com/prod/content/assets/styles/tl_1920_735/public/aio-banner/dekstop/Saheliyon-Ki-Bari-in-Udaipur.jpg.webp?VersionId=NmrSkX5Q3wo.2VR5QOOw92CyRAj0ACpH&itok=Ap--a5r7",
            link: "SaheliyonKiBari",
        },
        {
            name: "Shree Shiv Shakti Sweets & Restaurant",
            image: "https://b.zmtcdn.com/data/pictures/7/20538957/2fa2ce7af9f640d4b826cc8d2796be83_featured_v2.jpg",
            link: "ShriShivShaktiSweets",
        }
      ];
  return (
    <div className="travel-container">
      {/* Header Section */}
      <div className="header2">
        <h1>Udaipur</h1>
        <h2>Day 2 - Historical and Cultural Sights</h2>
        <div className="buttons">
          <button className="nav-button" onClick={() => onBack("TravelItinerary")}>Previous</button>
          <button className="nav-button" onClick={() => onNext("Udaipur3")}>Next</button>
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

export default Udaipur2;
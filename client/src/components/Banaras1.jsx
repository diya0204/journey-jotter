// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Banaras1.css";
// eslint-disable-next-line react/prop-types, no-unused-vars
const Banaras1 = ({ destination, onBack, onNext, onImageClick}) => {
    const activities = [
      {
        name: "Assi Ghat",
        image: "https://kashiyatra.in/wp-content/uploads/2023/10/assi-ghat-ganga-aarti.jpeg",
        link: "AssiGhat",
      },
        {
          name: "Kashi Vishwanath Temple",
          image: "https://www.prabhatkhabar.com/wp-content/uploads/2024/07/Kashi-Vishwanath-Temple.jpeg",
          link: "KashiVishwanathTemple",
        },
        {
            name: "Dashashwamedh Ghat Ganga Aarti",
            image: "https://zestycrush.com/wp-content/uploads/2024/08/Ganga-Aarti-Timing-in-Varanasi-1024x536.jpg",
            link: "DashashwamedhGhat",
        },
        {
            name: "Kashi Chat Bhandar",
            image: "https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nLzMwZThmNDJmZWRkYTQ2MTZhOTMxMWM5MzAyNmI1YzQ2IiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDAsImhlaWdodCI6NjQwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJ0b0Zvcm1hdCI6ICJ3ZWJwIn19",
            link: "KashiChatBhandar",
        },
      ];
  return (
    <div className="travel-container">
      {/* Header Section */}
      <div className="headerb1">
        <h1>Banaras</h1>
        <h2>Day 1 - Exploring the Ghats & Temples</h2>
        <div className="buttons">
          <button className="nav-button" onClick={onBack}>Previous</button>
          <button className="nav-button" onClick={onNext}>Next</button>
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
export default Banaras1;

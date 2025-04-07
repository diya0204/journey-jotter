/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const PindBalluchi = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Pind Balluchi</h1><br />
      <img 
        src="https://media-cdn.tripadvisor.com/media/photo-s/18/d5/ee/cf/pind-balluchi.jpg" 
        alt="Pind Balluchi Banaras" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 About Pind Balluchi</h2><br />
      <p>
        Pind Balluchi is a popular North Indian restaurant known for its authentic Punjabi cuisine, rustic ambiance, and delicious flavors. The restaurant offers a unique village-style dining experience with a wide range of traditional delicacies.
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🍽️ Specialties</h2><br />
      <ul style={{ textAlign: "left" }}>
        <li><strong>🍛 Dal Makhani:</strong> Creamy and rich black lentil curry.</li>
        <li><strong>🍗 Tandoori Chicken:</strong> Spiced and grilled chicken cooked in a clay oven.</li>
        <li><strong>🥘 Paneer Tikka:</strong> Marinated and grilled paneer cubes with smoky flavors.</li>
        <li><strong>🍹 Lassi:</strong> Refreshing and traditional Punjabi yogurt drink.</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Pind Balluchi, Varanasi, Uttar Pradesh, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 11:00 AM – 11:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Average Cost:</strong> ₹800 for two people (approx.)  
      </p><br />
      <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "center", borderCollapse: "collapse", marginBottom: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#3498DB", color: "white" }}>
            <th>From → To</th>
            <th>Distance (km)</th>
            <th>Walking Time</th>
            <th>Driving Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pind Balluchi → Ramnagar Fort</td>
            <td>7 km</td>
            <td>-</td>
            <td>22 min</td>
          </tr>
          <tr>
            <td>Pind Balluchi → Sarnath</td>
            <td>10 km</td>
            <td>-</td>
            <td>30 min</td>
          </tr>
          <tr>
            <td>Pind Balluchi → Godowlia Market</td>
            <td>3 km</td>
            <td>-</td>
            <td>10 min</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Pind Balluchi Banaras Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.680801712345!2d83.03757917511636!3d25.2806932775345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2c1f0e1f9fcd%3A0x5c9b5b36fbbf3e16!2sPind%20Balluchi!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>
      <button 
        onClick={onBack} 
        style={{
          padding: "10px 20px", 
          fontSize: "16px", 
          display: "flex",
          backgroundColor: "#003366",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginLeft: "10px",
          transition: "background-color 0.3s ease"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#0055aa"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#003366"}
      >
        Previous
      </button>
    </div>
  );
};

export default PindBalluchi;

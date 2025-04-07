/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const TajNadesarPalace = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Taj Nadesar Palace</h1><br />
      <img 
        src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201109282058364510-fefbe2f9-8c33-405c-8525-1585f0a137e4.jpg" 
        alt="Taj Nadesar Palace" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏨 About Taj Nadesar Palace</h2><br />
      <p>
        Taj Nadesar Palace is an opulent heritage hotel in Varanasi that offers a royal retreat with world-class hospitality.
        Nestled amidst lush gardens and mango orchards, it is an oasis of serenity and luxury. The palace has hosted many dignitaries
        and offers guests a unique experience of history and comfort.
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🍽️ Specialties</h2><br />
      <ul style={{ textAlign: "left" }}>
        <li><strong>🥂 Heritage Hospitality:</strong> Experience royal treatment and luxurious stays.</li>
        <li><strong>🍛 Fine Dining:</strong> Exquisite traditional and international cuisine.</li>
        <li><strong>🌿 Spa & Wellness:</strong> Rejuvenating treatments inspired by ancient therapies.</li>
        <li><strong>🏹 Polo & Horse Carriage Rides:</strong> A unique regal experience.</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Taj Nadesar Palace, Nadesar Palace Grounds, Varanasi, Uttar Pradesh, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> Open 24 Hours
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>💰 Average Cost:</strong> ₹25,000+ per night (approx.)
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
            <td>Taj Nadesar Palace → Brijrama Palace</td>
            <td>6.8 km</td>
            <td>-</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>Taj Nadesar Palace → Assi Ghat</td>
            <td>8.5 km</td>
            <td>-</td>
            <td>25 min</td>
          </tr>
          <tr>
            <td>Taj Nadesar Palace → Kashi Vishwanath Temple</td>
            <td>6.2 km</td>
            <td>-</td>
            <td>18 min</td>
          </tr>
          <tr>
            <td>Taj Nadesar Palace → Banaras Hindu University</td>
            <td>10.5 km</td>
            <td>-</td>
            <td>30 min</td>
          </tr>
          <tr>
            <td>Taj Nadesar Palace → New Vishwanath Temple</td>
            <td>10.0 km</td>
            <td>-</td>
            <td>28 min</td>
          </tr>
          <tr>
            <td>Taj Nadesar Palace → Manikarnika Ghat</td>
            <td>6.7 km</td>
            <td>-</td>
            <td>19 min</td>
          </tr>
          <tr>
            <td>Taj Nadesar Palace → Dashashwamedh Ghat</td>
            <td>5.9 km</td>
            <td>-</td>
            <td>17 min</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Taj Nadesar Palace Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.680801712345!2d83.03757917511636!3d25.2806932775345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2c1f0e1f9fcd%3A0x5c9b5b36fbbf3e16!2sTaj%20Nadesar%20Palace!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>

      <button 
        onClick={() => onBack()} 
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

export default TajNadesarPalace;

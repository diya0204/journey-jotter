/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const BrijramaPalace = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>BrijRama Palace</h1><br />
      <img 
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/86024401.jpg?k=48613e073c842006e59a06599921e1a3355f0039367457e89a640c4ebfe1f978&o=&hp=1" 
        alt="BrijRama Palace" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 About BrijRama Palace</h2><br />
      <p>
        BrijRama Palace is a luxurious heritage hotel located on the banks of the Ganges. Originally built in the 18th century, it offers a royal experience with traditional Banarasi hospitality, stunning river views, and elegant interiors.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌟 Highlights</h2><br />
      <ul style={{ textAlign: "left" }}>
        <li><strong>🏰 Heritage Hotel:</strong> One of the oldest structures in Varanasi, now a luxury stay.</li>
        <li><strong>🌊 Ganga View:</strong> Overlooks the sacred Ganges River.</li>
        <li><strong>🎭 Cultural Performances:</strong>Live music, traditional dance, flute lessons, yoga, and mehendi artwork.</li>
        <li><strong>🍽️ Fine Dining:</strong>Traditional Indian cuisine served in the hotel restaurant.</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> BrijRama Palace, Darbhanga Ghat, Varanasi, Uttar Pradesh, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Check-in:</strong> 2:00 PM | <strong>Check-out:</strong> 12:00 PM
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Room Tariff:</strong> ₹15,000+ per night (approx.)
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
            <td>BrijRama Palace → Assi Ghat</td>
            <td>2.5 km</td>
            <td>30 min</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>BrijRama Palace → Kashi Vishwanath Temple</td>
            <td>1 km</td>
            <td>15 min</td>
            <td>5 min</td>
          </tr>
          <tr>
            <td>BrijRama Palace → Banaras Hindu University</td>
            <td>7 km</td>
            <td>-</td>
            <td>25 min</td>
          </tr>
          <tr>
            <td>BrijRama Palace → New Vishwanath Temple</td>
            <td>7 km</td>
            <td>-</td>
            <td>25 min</td>
          </tr>
          <tr>
            <td>BrijRama Palace → Manikarnika Ghat</td>
            <td>1 km</td>
            <td>15 min</td>
            <td>5 min</td>
          </tr>
          <tr>
            <td>BrijRama Palace → Dashashwamedh Ghat</td>
            <td>0.5 km</td>
            <td>10 min</td>
            <td>5 min</td>
          </tr>
          <tr>
            <td>BrijRama Palace → Darbhanga Restaurant</td>
            <td>0 km</td>
            <td>0 min</td>
            <td>0 min</td>
          </tr>
          <tr>
            <td>BrijRama Palace → Ramnagar Fort</td>
            <td>7.5 km</td>
            <td>22 min</td>
          </tr>
          <tr>
            <td>BrijRama Palace → Godowlia Market</td>
            <td>1.2 km</td>
            <td>5 min</td>
          </tr>
          <tr>
            <td>BrijRama Palace → Peshawri (ITC Mughal-Style Dining)</td>
            <td>6.5 km</td>
            <td>20 min</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="BrijRama Palace Banaras Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.680801712345!2d83.03757917511636!3d25.2806932775345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2c1f0e1f9fcd%3A0x5c9b5b36fbbf3e16!2sBrijRama%20Palace!5e0!3m2!1sen!2sin!4v1712807896543"
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
export default BrijramaPalace;
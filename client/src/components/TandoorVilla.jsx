/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TandoorVilla = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Tandoor Villa</h1><br />

      {/* Image */}
      <img 
        src="https://b.zmtcdn.com/data/pictures/0/3900050/0bf1c3ef0c23a5bdd14dcaebc4b85d97_featured_v2.jpg" 
        alt="Tandoor Villa" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 About Tandoor Villa</h2><br />
      <p>
        Tandoor Villa is a popular dining destination in Varanasi, offering a blend of traditional Indian and Mughlai cuisine. Known for its rich flavors, impeccable service, and elegant ambiance, it is a must-visit for food lovers seeking an authentic culinary experience.
      </p><br />

      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🍽️ Specialties</h2><br />
      <ul style={{ textAlign: "left" }}>
        <li><strong>🔥 Tandoori Dishes:</strong> Tandoor Villa serves a variety of tandoori dishes, including chicken tandoori, kebabs, and paneer butter masala.</li>
        <li><strong>🍢 Seekh Kebabs:</strong> Minced meat skewers cooked in a clay oven.</li>
        <li><strong>🥘 Butter Chicken:</strong> A rich and creamy tomato-based curry with tender chicken.</li>
        <li><strong>🍹 Lassi:</strong> Refreshing traditional yogurt-based drink.</li>
      </ul><br />

      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Tandoor Villa, Varanasi, Uttar Pradesh, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 11:00 AM – 11:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Average Cost:</strong> ₹1000 for two people(approx.)  
      </p><br />

      {/* Distances Table */}
      <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "center", borderCollapse: "collapse", marginBottom: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#3498DB", color: "white" }}>
            <th>From → To</th>
            <th>Distance (km)</th>
            <th>Driving Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tandoor Villa → Sarnath</td>
            <td>10 km</td>
            <td>25 min</td>
          </tr>
          <tr>
            <td>Tandoor Villa → Boat Ride on the Ganges</td>
            <td>6 km</td>
            <td>18 min</td>
          </tr>
          <tr>
            <td>Tandoor Villa → Heritage Haveli</td>
            <td>4.5 km</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Tandoor Villa → The Great Kabab Factory</td>
            <td>3 km</td>
            <td>10 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Tandoor Villa Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.680801712345!2d83.03757917511636!3d25.2806932775345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2c1f0e1f9fcd%3A0x5c9b5b36fbbf3e16!2sTandoor%20Villa!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button with Hover Effect */}
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

export default TandoorVilla;

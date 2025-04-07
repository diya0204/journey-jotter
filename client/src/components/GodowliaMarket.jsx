/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const GodowliaMarket = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Godowlia Market</h1><br />
      
      {/* Image */}
      <img 
        src="https://indiafamousfor.com/wp-content/uploads/2024/05/Godowlia-Market.jpg" 
        alt="Godowlia Market" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🛍️ About Godowlia Market</h2><br />
      <p>
        Godowlia Market is one of the oldest and busiest markets in Varanasi, known for its vibrant streets filled with local handicrafts, silk sarees, brassware, and street food. It is a must-visit destination for tourists looking to experience the cultural and shopping hub of the city.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>✨ Major Attractions</h2><br />
      <ul style={{ textAlign: "left" }}>
        <li><strong>🛒 Traditional Handicrafts:</strong> Authentic Banarasi silk sarees, wooden toys, and brass items.</li>
        <li><strong>🍛 Street Food:</strong> Famous for Kachori-Sabzi, Jalebi, and Banarasi Paan.</li>
        <li><strong>🎭 Cultural Hub:</strong> A lively atmosphere with street performers, temple chants, and local festivities.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Godowlia Market, Varanasi, Uttar Pradesh 221001, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 9:00 AM – 10:00 PM
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
            <td>Godowlia Market → Ramnagar Fort</td>
            <td>5 km</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Godowlia Market → Sarnath</td>
            <td>10 km</td>
            <td>30 min</td>
          </tr>
          <tr>
            <td>Godowlia Market → Pind Balluchi</td>
            <td>3.5 km</td>
            <td>12 min</td>
          </tr>
          <tr>
            <td>Godowlia Market → BrijRama Palace</td>
            <td>1.2 km</td>
            <td>15 min</td>
            <td>5 min</td>
          </tr>
          <tr>
            <td>Godowlia Market → Peshawri (ITC Mughal-Style Dining)</td>
            <td>5.5 km</td>
            <td>-</td>
            <td>18 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Godowlia Market Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.157215523538!2d83.00257957511702!3d25.31764577751711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e11c2d4e8d1%3A0x1c2f69b45c3c56b!2sGodowlia%20Market!5e0!3m2!1sen!2sin!4v1712807896543"
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

export default GodowliaMarket;

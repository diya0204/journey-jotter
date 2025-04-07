/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Peshawri = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Peshawri(ITC Mughal-Style Dining)</h1><br />

      {/* Image */}
      <img 
        src="https://cache.marriott.com/content/dam/marriott-renditions/AGRLC/agrlc-mughal-pavilion-5758-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*" 
        alt="Peshawri ITC Dining" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🍽️ About Peshawri</h2><br />
      <p>
        Peshawri is a premium Mughal-style dining restaurant at ITC, renowned for its authentic North-West Frontier cuisine. It offers a rustic, elegant ambiance with traditional seating arrangements and signature dishes like Dal Bukhara, Murgh Malai Kebab, and Sikandari Raan.
      </p><br />

      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Distances to Popular Locations</h2><br />

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
            <td>Peshawri → Ramnagar Fort</td>
            <td>7 km</td>
            <td>18 min</td>
          </tr>
          <tr>
            <td>Peshawri → BrijRama Palace</td>
            <td>6.5 km</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>Peshawri → Godowlia Market</td>
            <td>5 km</td>
            <td>15 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📌 Location on Map</h2><br />
      <iframe
        title="Peshawri ITC Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.987654321!2d83.02212345!3d25.34567891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31abcd1234ef%3A0x56789abcd98765ef!2sITC%20Peshawri%20Varanasi!5e0!3m2!1sen!2sin!4v1712807896543"
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
export default Peshawri;
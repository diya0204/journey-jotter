/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const NathulaPass = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Nathula Pass</h1><br />
      
      {/* Image */}
      <img 
        src="https://holidays.tripfactory.com/sikkim/wp-content/uploads/sites/18/2024/05/Nathula-Pass.webp" 
        alt="Nathula Pass Sikkim" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏔️ About Nathula Pass</h2><br />
      <p>
      The name Nathu La is traditionally interpreted as the whistling pass, or more commonly as the listening ears pass. The Chinese government explains it as a place where snow is deepest and the wind strongest. According to G. S. Bajpai, it means flat ground from where the hill features gradually rise to right and left. Lepcha people who are native to the region call it ma-tho hlo/na tho lo; which may have possibly evolved to the present usage of the word.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌟 Why Visit Nathula Pass?</h2><br />
      <p>
      Nathula Pass in Sikkim is a must-see for nature lovers, history buffs, and adventure seekers. It is a high-altitude mountain pass that connects India and Tibet, and offers panoramic views, cultural experiences, and historical significance. 
Natural beauty: The pass offers stunning views of snow-capped peaks, rugged terrain, and beautiful landscapes
History: The pass is part of the ancient Silk Route and has played a key role in Sino-Indian trade
Adventure: The journey to the pass is an adventure in itself, with winding roads
Culture: Visitors can experience the vibrant culture of the region
Border: Visitors can explore the Indo-China border      </p><br />

      <ul style={{ textAlign: "left" }}>
        <li><strong>❄️ Snow Paradise:</strong> Experience snowfall and stunning Himalayan landscapes.</li>
        <li><strong>🇮🇳 Indo-China Border:</strong> Witness the historic border post guarded by the Indian Army.</li>
        <li><strong>🛤️ Old Silk Route:</strong> A historically significant trade route between India and Tibet.</li>
        <li><strong>📷 Stunning Views:</strong> Panoramic views of the Tibetan Plateau.</li>
        <li><strong>⚠️ Restricted Area:</strong> Requires a special permit for Indian nationals.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Nathula Pass, Indo-China Border, East Sikkim, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> Open for visitors from Wednesday to Sunday, 8:00 AM – 3:30 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> ₹200 per person (Permit required for Indian citizens only)  
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
            <td>Nathula Pass → Tsomgo Lake</td>
            <td>18 km</td>
            <td>45 min</td>
          </tr>
          <tr>
            <td>Nathula Pass → Baba Mandir</td>
            <td>7 km</td>
            <td>20 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Nathula Pass Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.626544789984!2d88.73824867513467!3d27.380298878106023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a8b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sNathula%20Pass!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button */}
      <button 
        onClick={() => onBack("SikkimL1")} 
        style={{
          padding: "10px 20px", 
          fontSize: "16px", 
          backgroundColor: "#003366",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          display: "flex",
          marginLeft: "10px"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#0055aa"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#003366"}
      >
        Previous
      </button>
    </div>
  );
};

export default NathulaPass;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const BhartiyaLokKalaMuseum = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Bhartiya Lok Kala Museum</h1><br />
      <img 
        src="https://lokkalamandal.com/img/slider/slider2.webp" 
        alt="Bhartiya Lok Kala Museum" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History of the Museum</h2><br />
      <p>
      Bharatiya Lok Kala Museum was set up by Mihir Chaudhary in the year 1952 to propagate and popularize folk culture found in arts, dances and the literature of the particular region. The enthralling collection is about 44 years old, reflecting its age-old charm and inspiring people to switch to a new form of artistic pleasures.
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌟 Highlights</h2><br />
      <p>The institution has a museum that exhibits collection of folk articles from Rajasthan like rural-dresses, ornaments, puppets, masks, dolls, folk musical instruments, folk deities and paintings. There is puppet theater(Kathputli) too where puppet shows are held at regular intervals.</p><br></br>
      <ul style={{ textAlign: "left" }}>
        <li><strong>🧵 Folk Costumes & Ornaments:</strong> A vast collection of traditional attire and jewelry from different parts of Rajasthan.</li>
        <li><strong>🎭 Puppets:</strong> The museum has a rare collection of puppets from various parts of India and abroad.</li>
        <li><strong>🎶 Folk Musical Instruments:</strong> Showcases rare and historical musical instruments used in Rajasthani folk music.</li>
        <li><strong>🖼️ Tribal Paintings:</strong> The museum has a collection of miniature paintings.</li>
        <li><strong>🎤 Live Puppet Shows:</strong>The museum has a puppet theater where puppet shows are held regularly. </li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Timings</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Bhartiya Lok Kala Museum, Near Chetak Circle, Udaipur, Rajasthan, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 9:00 AM – 6:00 PM (Daily)
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> ₹60 (Indians), ₹100 (Foreigners)
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎭 Puppet Show Timings:</strong> 12:00 PM, 3:00 PM, 5:00 PM
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
            <td>Bhartiya Lok Kala Museum → Bagore Ki Haveli</td>
            <td>3.1 km</td>
            <td>35 min</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>Bhartiya Lok Kala Museum → Upré by 1559 AD</td>
            <td>3.2 km</td>
            <td>38 min</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>Bhartiya Lok Kala Museum → Fateh Sagar Lake</td>
            <td>2.2 km</td>
            <td>25 min</td>
            <td>8 min</td>
          </tr>
          <tr>
            <td>Bhartiya Lok Kala Museum → Saheliyon Ki Bari</td>
            <td>2.5 km</td>
            <td>30 min</td>
            <td>9 min</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Bhartiya Lok Kala Museum Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.324057786725!2d73.68287187513621!3d24.592005678108215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sBhartiya%20Lok%20Kala%20Museum!5e0!3m2!1sen!2sin!4v1712807896543"
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

export default BhartiyaLokKalaMuseum;

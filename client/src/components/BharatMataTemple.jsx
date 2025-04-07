/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const BharatMataMandir = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Bharat Mata Mandir</h1><br />
      
      {/* Image */}
      <img 
        src="https://5.imimg.com/data5/PB/FT/GLADMIN-9721836/bharat-mata-temple-tour-package-services.png"
        alt="Bharat Mata Mandir Banaras" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 About Bharat Mata Mandir</h2><br />
      <p>
      Bharat Mata Temple Varanasi is also known as Mother India Temple.
 The “Mother India Temple” is a unique and iconic temple located in Varanasi, India. Unlike traditional temples dedicated to deities, the Mother India Temple is dedicated to the personification of India as a motherland, often referred to as “Bharat Mata” in Hindi, where “Bharat” stands for India and “Mata” means mother. The “Bharat Mata Temple” in Varanasi is a unique and significant temple that symbolizes the essence of India as a motherland. It is dedicated to the personification of India as a mother figure.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌟 Highlights</h2><br />
      <ul style={{ textAlign: "left" }}>
        <li><strong>🗺️ Marble Relief Map:</strong> A detailed topographical map of India.</li>
        <li><strong>🏛️ Architectural Significance:</strong> Unique temple structure celebrating national unity.</li>
        <li><strong>🙏 Spiritual & Patriotic Vibes:</strong> A blend of devotion and nationalism.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Bharat Mata Mandir, Varanasi, Uttar Pradesh, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 9:30 AM – 8:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> Free
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
            <td>Bharat Mata Mandir → Tulsi Manas Mandir</td>
            <td>5 km</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Bharat Mata Mandir → Manikarnika Ghat</td>
            <td>6 km</td>
            <td>18 min</td>
          </tr>
          <tr>
            <td>Bharat Mata Mandir → New Vishwanath Temple</td>
            <td>4 km</td>
            <td>12 min</td>
          </tr>
          <tr>
            <td>Bharat Mata Mandir → BHU Campus</td>
            <td>7 km</td>
            <td>20 min</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Bharat Mata Mandir Banaras Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.680801712345!2d83.03757917511636!3d25.2806932775345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2c1f0e1f9fcd%3A0x5c9b5b36fbbf3e16!2sBharat%20Mata%20Mandir!5e0!3m2!1sen!2sin!4v1712807896543"
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
export default BharatMataMandir;
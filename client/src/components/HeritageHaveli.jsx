/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const HeritageHaveli = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Heritage Haveli</h1><br />

      {/* Image */}
      <img 
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/560405507.jpg?k=88e69d763b6dba58883aa8145091096b98655eae88971c56193eaba377435284&o=&hp=1" 
        alt="Heritage Haveli, Banaras" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏰 About Heritage Haveli</h2><br />
      <p>
        Heritage Haveli in Banaras is a stunning example of traditional Indian architecture, offering visitors a glimpse into the city’s royal past. It combines Mughal, Rajput, and local Banarasi designs, making it a must-visit for history and culture lovers.
      </p><br />

      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 Historical Significance</h2><br />
      <p>
        The haveli has been home to several noble families over the centuries. It showcases intricate carvings, grand courtyards, and vintage décor, preserving the old-world charm of Varanasi. Many visitors come here to experience the blend of history and hospitality.
      </p>

      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>✨ Highlights</h2><br />
      <ul style={{ textAlign: "left" }}>
        <li><strong>🏛️ Traditional Architecture:</strong> Stunning Mughal & Rajput designs.</li>
        <li><strong>🛏️ Heritage Stay:</strong> Some havelis now function as boutique hotels.</li>
        <li><strong>🍛 Authentic Banarasi Cuisine:</strong> Experience royal dining.</li>
        <li><strong>📸 Photography Spot:</strong> Beautiful courtyards & intricate carvings.</li>
      </ul><br />

      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Heritage Haveli, Varanasi, Uttar Pradesh, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Visiting Hours:</strong> 9:00 AM – 8:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> Free (Some havelis may charge for guided tours)  
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
            <td>Heritage Haveli → Sarnath</td>
            <td>11 km</td>
            <td>30 min</td>
          </tr>
          <tr>
            <td>Heritage Haveli → Boat Ride on the Ganges</td>
            <td>3.5 km</td>
            <td>12 min</td>
          </tr>
          <tr>
            <td>Heritage Haveli → Tandoor Villa</td>
            <td>4.5 km</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Heritage Haveli → The Great Kabab Factory</td>
            <td>5 km</td>
            <td>16 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Heritage Haveli Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.234567891234!2d83.0023456789123!3d25.3012345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2c1f0e1f9fcd%3A0x5c9b5b36fbbf3e16!2sHeritage%20Haveli!5e0!3m2!1sen!2sin!4v1712807896543"
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

export default HeritageHaveli;

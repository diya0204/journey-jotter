/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ShriShivShaktiSweets = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Shri Shiv Shakti Sweets & Restaurant</h1><br />

      {/* Image */}
      <img 
        src="https://b.zmtcdn.com/data/pictures/4/20708054/ca4e4f953c1207c2abcba3048b2e7b4c_featured_v2.jpg" 
        alt="Shri Shiv Shakti Sweets & Restaurant Udaipur" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* History Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History</h2><br />
      <p>
        Shri Shiv Shakti Sweets & Restaurant is a renowned eatery in Udaipur, known for its authentic Rajasthani sweets and traditional cuisine.  
        It has been serving delicious local delicacies for decades, making it a favorite spot for tourists and locals alike.  
        The restaurant specializes in Mewari cuisine, offering a variety of sweets, snacks, and thalis that capture the essence of Rajasthan.  
        From Dal Baati Churma to Ghewar, the flavors here are a true representation of Rajasthani culinary heritage.
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🍽️ Menu Highlights</h2><br />
      <ul style={{ textAlign: "left" }}>
        <li><strong>🍛 Rajasthani Thali:</strong> A complete meal with Dal Baati Churma, Gatte Ki Sabzi, Ker Sangri, and more.</li>
        <li><strong>🍬 Famous Sweets:</strong> Ghewar, Malpua, Mawa Kachori, and Mohanthal are must-tries.</li>
        <li><strong>🥤 Refreshing Drinks:</strong> Traditional lassi, chaas(buttermilk), and kesar milk are popular choices.</li>
        <li><strong>🍲 Snacks & Street Food:</strong> Enjoy Kachori, Samosa, Mirchi Vada, and Pyaaz Kachori.</li>
        <li><strong>🔥 Spicy Curries:</strong> The restaurant is known for its authentic Laal Maas(spicy mutton curry).</li>
        <li><strong>🥘 Pure Vegetarian Options:</strong> Offers a variety of vegetarian dishes cooked in traditional style.</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Shri Shiv Shakti Sweets & Restaurant, Gulab Bagh Rd, Udaipur, Rajasthan 313001, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 8:00 AM – 10:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Price Range:</strong> ₹100 – ₹500 per meal  
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
            <td>Shri Shiv Shakti Sweets → Fateh Sagar Lake</td>
            <td>3.2 km</td>
            <td>40 min</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>Shri Shiv Shakti Sweets → Monsoon Palace</td>
            <td>7.8 km</td>
            <td>2 hrs</td>
            <td>21 min</td>
          </tr>
          <tr>
            <td>Shri Shiv Shakti Sweets → Saheliyon Ki Bari</td>
            <td>1.8 km</td>
            <td>22 min</td>
            <td>5 min</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Shri Shiv Shakti Sweets & Restaurant Udaipur Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.032584657972!2d73.68234587513515!3d24.61139667810579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5a6b6e5b1b3%3A0x6f4f8a1a9c8a4b57!2sShri%20Shiv%20Shakti%20Sweets%20%26%20Restaurant!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>
      <button 
        onClick={() => onBack("Udaipur2")} 
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

export default ShriShivShaktiSweets;

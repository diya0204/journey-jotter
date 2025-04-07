/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const KhecheopalriLake = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Khecheopalri Lake</h1><br />
      
      {/* Image */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/7/71/Foot_bridge_to_Khecheolpalri_Lake.jpg" 
        alt="Khecheopalri Lake Sikkim" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌊 About Khecheopalri Lake</h2><br />
      <p>
      Khecheopalri Lake, originally known as Kha-Chot-Palri(meaning the heaven of Padmasambhava), is a lake located near Khecheopalri village, 147 kilometres(91 mi) west of Gangtok in the West Sikkim district of the Northeastern Indian state of Sikkim.
Located 34 kilometres(21 mi) to the northwest of Pelling town, the lake is sacred for both Buddhists and Hindus, and is believed to be a wish fulfilling lake. The local name for the lake is Sho Dzo Sho, which means Oh Lady, Sit Here.
According to folklore legend related to Sikkim topography, the Khecheopalri is said to represent one of the four plexus of the human body namely, the thorax; the other three plexes are said to be represented by Yuksom(the third eye), Tashiding(head) and Pemayangtse(the heart).
The formation of the lake is estimated to be 3500 years old. The lake is situated amidst pristine forest at an altitude of 1,700 metres(5,600 ft) near Tsozo village. The lake drains a catchment area of the Ramam watershed(Ramam mountain gives its name to the valley) and has a drainage area of 12 square kilometres(4.6 sq mi) including area of bog of 70,100 square metres(755,000 sq ft). The periphery of lake has the shape of a foot.
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌟 Why Visit Khecheopalri Lake?</h2><br />
      <p>
      Khecheopalri Lake is situated at an altitude of 5,600ft and is estimated to be 3,500 years old. The name Khecheopalri literally translates to ‘heavenly abode of Padmasambhava’, the 8th century Buddhist master commonly believed to be the second Buddha. Even though the lake is surrounded by thick vegetation, there are no leaves on the surface of the waterbody. This is because the avifauna swoop down and keep the lake clear of leaves.
Prayer wheels along the wooden jetty lead you to the bank of Khecheopalri Lake. Numerous Tibetan prayer flags flutter in the wind and you feel as if you’ve walked into a magical kingdom. Khecheopalri Lake is also a pilgrimage site for both Buddhists and Hindus. Broad-leaved temperate trees and bamboo form a cluster around this lake making it a perfect recreational spot for travellers along the Buddhist religious circuit.
      </p><br />

      <ul style={{ textAlign: "left" }}>
        <li><strong>🙏 Spiritual Significance:</strong> A sacred pilgrimage site for Buddhists and Hindus.</li>
        <li><strong>🌳 Serene Atmosphere:</strong> Surrounded by lush green forests, perfect for meditation.</li>
        <li><strong>🐦 Unique Phenomenon:</strong> Birds prevent any leaves from floating on the water.</li>
        <li><strong>🚶 Trekking Experience:</strong> A short trek leads to the lake, offering scenic beauty.</li>
        <li><strong>📸 Photography Spot:</strong> A picturesque location for nature lovers.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Khecheopalri Lake, West Sikkim, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Best Time to Visit:</strong> March - May & September - November  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> ₹10 per person  
      </p><br />

      {/* Distances Table */}
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
            <td>Khecheopalri Lake → Pelling</td>
            <td>28 km</td>
            <td>-</td>
            <td>1 hr</td>
          </tr>
          <tr>
            <td>Khecheopalri Lake → Pemayangtse Monastery</td>
            <td>24 km</td>
            <td>-</td>
            <td>50 min</td>
          </tr>
          <tr>
            <td>Khecheopalri Lake → Sanga Choeling Monastery</td>
            <td>30 km</td>
            <td>-</td>
            <td>1 hr 10 min</td>
          </tr>
          <tr>
            <td>Khecheopalri Lake → Rabdentse Ruins</td>
            <td>28 km</td>
            <td>-</td>
            <td>1 hr</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Khecheopalri Lake Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.626544789984!2d88.23456757513467!3d27.318678878106023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a55b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sKhecheopalri%20Lake!5e0!3m2!1sen!2sin!4v1712807896543"
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

export default KhecheopalriLake;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const BakthangWaterfall = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Bakthang Waterfall</h1><br />
      
      {/* Image */}
      <img 
        src="https://images.unsplash.com/photo-1677773592270-f628ca2f12d6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Bakthang Waterfall" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 Overview</h2><br />
      <p>
      Bakthang Waterfall, located near Gangtok, Sikkim, is a captivating natural wonder that enthralls visitors with its beauty. Surrounded by lush greenery and flanked by rocky cliffs, the waterfall cascades gracefully, creating a mesmerizing sight and a tranquil ambiance. Its accessibility and serene surroundings make it a popular spot for both locals and tourists seeking a refreshing escape and a chance to immerse themselves in the picturesque landscapes of Gangtok.
Bakthang Waterfall, located near Gangtok in Sikkim, India, is a stunning natural marvel that captivates visitors with its cascading beauty. Surrounded by lush greenery and picturesque landscapes, the waterfall offers a serene and refreshing ambiance, making it a popular tourist attraction.
The Bakthang Waterfall is formed by the streams originating from the majestic Himalayan ranges. As the crystal-clear water descends gracefully over the rocks, it creates a mesmerizing sight and a soothing sound that soothes the senses. The area around the waterfall is well-maintained with viewing platforms, allowing visitors to get up close and personal with the gushing waters.
This attraction is not only popular among nature lovers and photographers but also draws pilgrims seeking a tranquil place for meditation and introspection. The enchanting beauty of Bakthang Waterfall offers a perfect escape from the hustle and bustle of urban life, and visitors can take leisurely walks along the nature trails, breathe in the fresh mountain air, and bask in the natural beauty of this pristine waterfall.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏞️ Description</h2><br />
      <p>
      The Bakthang waterfall is only 20 minutes drive from Gangtok town to a place called Swastik, adjacent to the army cantonment area. A serene waterfalls cascades down the rock forming a small pool down below. It is located along the 31A National Highway connecting to North Sikkim. In local language ‘Bak’ means a forest and ‘thang’ meaning meadow or place. The natural spring water source of this falls originates from the dense vegetation above this site which is preserved as a Smriti Ban by the Forest Department. This site is little away from the crowded market place and hidden from the urban sprawl. A offbeat place to relax and be completely free from pollution, noise and dust and much loved by many of the domestic visitors. The place also offers a cafeteria for tea and snacks and local photography services to take pictures with local costumes and dresses for visitors. Some of the adventure enthusiasts can also try rappelling down the cliff on a prefixed rope which is organized by the local tourism committee of the area. The local taxis conducting daily siteseeing tours of Gangtok include this spot as one of the points of interest to visitors.
      </p><br />

      <ul style={{ textAlign: "left" }}>
        <li><strong>💦 Scenic Waterfall:</strong> A beautiful natural cascade surrounded by greenery.</li>
        <li><strong>📷 Photography Spot:</strong> Ideal for capturing nature’s beauty.</li>
        <li><strong>🌳 Peaceful Environment:</strong> Great for relaxation and picnics.</li>
        <li><strong>🎢 Adventure Activities:</strong> Rope sliding available for thrill-seekers.</li>
        <li><strong>🏔️ Close to Gangtok:</strong> Easily accessible from the main city.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Bakthang Waterfall, Gangtok, Sikkim 737101, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> Open 24 Hours  
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
            <th>Walking Time</th>
            <th>Driving Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bakthang Waterfall → MG Marg</td>
            <td>3.5 km</td>
            <td>45 min</td>
            <td>12 min</td>
          </tr>
          <tr>
            <td>Bakthang Waterfall → Ganesh Tok</td>
            <td>2.0 km</td>
            <td>30 min</td>
            <td>7 min</td>
          </tr>
          <tr>
            <td>Bakthang Waterfall → Tashi View Point</td>
            <td>5.0 km</td>
            <td>-</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Bakthang Waterfall → Do Drul Chorten</td>
            <td>6.5 km</td>
            <td>-</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>Bakthang Waterfall → Namgyal Institute</td>
            <td>6.8 km</td>
            <td>-</td>
            <td>21 min</td>
          </tr>
          <tr>
            <td>Bakthang Waterfall → Enchey Monastery</td>
            <td>2.5 km</td>
            <td>35 min</td>
            <td>10 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Bakthang Waterfall Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.626544789984!2d88.61324867513467!3d27.337898878106023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a55b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sBakthang%20Waterfall!5e0!3m2!1sen!2sin!4v1712807896543"
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

export default BakthangWaterfall;

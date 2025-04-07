/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TsomgoLake = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Tsomgo Lake</h1><br />
      
      {/* Image */}
      <img 
        src="https://s7ap1.scene7.com/is/image/incredibleindia/tsomgo-lake-gangtok-sikkim-2-attr-hero?qlt=82&ts=1727355185446" 
        alt="Tsomgo Lake" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History</h2><br />
      <p>
      Tsomgo Lake is surrounded by numerous historical facts. Buddhist monks were said to be able to predict the future by studying the color of the lake in ancient times. The darker color of the water denotes a more promising or troubling future. At Guru Purnima and Raksha Bandhan, healers of Sikkim, known as Jhakhris, come to this lake to offer prayers and benefit from the healing qualities of the pure lake waters.
Tsomgo means source of water in Bhutia, and the source of the water of this lake remains a mystery to this day. Legend has it that the area where the lake now stands was once a shed where yaks lived, and the area surrounding the lake was once a tribal village. One night, the tribe oldest woman had a dream that the village would soon be filled with water, having left no signs of life. She alerted all the villagers, but no one tried to listen to her and dismissed her as insane. After failing to persuade the others to leave, she left the village with her yak, and the village was soon immersed in water. Leaving no trace of any human or animal soul, Sikkimese people now go to Changu Lake to pray to the spirits of the dead.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏔️ Significance</h2><br />
      <p>
      Tsomgo Lake holds great significance for the local Sikkimese people. The name Tsomgo means source of the water in Bhutia language. According to the local belief, the lake is sacred and is revered for its changing colors with the seasons. It is a place of spiritual and cultural importance, where rituals and practices are performed by the locals.
      </p><br />

      <ul style={{ textAlign: "left" }}>
        <li><strong>❄️ Frozen Lake:</strong> The lake remains frozen during winter and reflects the changing seasons.</li>
        <li><strong>🏞️ Scenic Beauty:</strong> Surrounded by steep mountains offering spectacular views.</li>
        <li><strong>🐴 Yak Rides:</strong> Tourists can enjoy a traditional yak ride around the lake.</li>
        <li><strong>🛕 Sacred Site:</strong> Considered holy by the local Buddhist and Hindu communities.</li>
        <li><strong>🌺 Rhododendrons:</strong> The surrounding area is known for vibrant rhododendron blooms in spring.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Tsomgo Lake, East Sikkim, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> Open 24 hours (Best visited during daylight)  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> Free (Permit Required)  
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
            <td>Tsomgo Lake → Baba Mandir</td>
            <td>16 km</td>
            <td>-</td>
            <td>40 min</td>
          </tr>
          <tr>
            <td>Tsomgo Lake → Yak Ride Point</td>
            <td>1 km</td>
            <td>15 min</td>
            <td>5 min</td>
          </tr>
          <tr>
      <td>Tsomgo Lake → Nathula Pass</td>
      <td>18 km</td>
      <td>-</td>
      <td>45 min</td>
    </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Tsomgo Lake Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.626544789984!2d88.61324867513467!3d27.337898878106023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a55b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sTsomgo%20Lake!5e0!3m2!1sen!2sin!4v1712807896543"
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

export default TsomgoLake;

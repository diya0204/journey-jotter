/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Pelling = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Pelling</h1><br />
      
      {/* Image */}
      <img 
        src="https://www.naturetravelagency.com/uploads/1700640836tourist%20places%20in%20pelling.jpg"
        alt="Pelling Sikkim" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌄 About Pelling</h2><br />
      <p>
        Pelling is a serene hill town in West Sikkim, known for its breathtaking views of Mount Kanchenjunga, ancient monasteries, and rich cultural heritage. It is a perfect destination for nature lovers and adventure seekers alike.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌟 Why Visit Pelling?</h2><br />
      <p>
      You can visit Pelling, Sikkim to see the Himalayas, Kanchenjunga, and waterfalls. Pelling is also a base for treks in West Sikkim. 
See the Himalayas: Pelling offers close views of the Himalayas and the snow-capped Kanchenjunga, the third-highest mountain of the world.
See waterfalls: The hills around Pelling are lined with waterfalls.
Go trekking: Pelling is a base for treks in West Sikkim.
Visit the Chenrezig statue and skywalk: The Chenrezig statue and skywalk complex includes a 137 ft statue of the bodhisattva Chenrezig and first glass skywalk of India.
Visit Khecheopalri Lake: This lake is surrounded by forested hills and has a monastery above it.
      </p><br />
      <ul style={{ textAlign: "left" }}>
        <li><strong>🏔️ Scenic Views:</strong> Unparalleled views of the Kanchenjunga range.</li>
        <li><strong>🏯 Monasteries:</strong> Visit the historic Pemayangtse and Sanga Choeling monasteries.</li>
        <li><strong>🏛️ Heritage Sites:</strong> Explore the ancient Rabdentse Ruins.</li>
        <li><strong>🏞️ Natural Beauty:</strong> Khecheopalri Lake, a sacred and tranquil spot.</li>
        <li><strong>🚶 Adventure:</strong> Ideal for trekking and outdoor activities.</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Pelling, West Sikkim, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Best Time to Visit:</strong> March - May & September - November  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Popular Activities:</strong> Sightseeing, trekking, and photography  
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
            <td>Pelling → Pemayangtse Monastery</td>
            <td>2 km</td>
            <td>25 min</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>Pelling → Sanga Choeling</td>
            <td>3 km</td>
            <td>40 min</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Pelling → Rabdentse Ruins</td>
            <td>4 km</td>
            <td>50 min</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>Pelling → Khecheopalri Lake</td>
            <td>32 km</td>
            <td>-</td>
            <td>1 hr 15 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Pelling Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.626544789984!2d88.24123457513467!3d27.315678878106023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a55b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sPelling!5e0!3m2!1sen!2sin!4v1712807896543"
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

export default Pelling;

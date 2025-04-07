/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const YakRide = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Yak Ride</h1><br />
      
      {/* Image */}
      <img 
        src="https://i.pinimg.com/736x/b3/71/65/b37165ec441661514cc657c1390cdd75.jpg" 
        alt="Yak Ride Sikkim" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🐂 Experience Yak Ride</h2><br />
      <p>
      One of the most unique experiences in Sikkim is the thrilling Yak Ride, commonly found near Tsomgo Lake and other high-altitude regions. Yaks, decorated with colorful woolen accessories, provide a peaceful yet exciting ride amidst the pristine landscapes of the Himalayas.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏔️ Why Try a Yak Ride?</h2><br />
      <p>
      A Yak Safari Ride is more than just a journey; it is a chance to immerse yourself in the serene and breathtaking landscapes of Sikkim. Riding a yak is a safe, slow-paced adventure that’s perfect for families, couples, and travelers looking for a unique experience in the great outdoors. This adventure is available in several popular tourist destinations, making it easy to include in any Sikkim Tour Package.
      </p><br />

      <ul style={{ textAlign: "left" }}>
        <li><strong>🎭 Traditional Experience:</strong> Ride beautifully decorated yaks.</li>
        <li><strong>🏔️ Scenic Views:</strong> Explore snow-covered mountains and alpine landscapes.</li>
        <li><strong>📷 Photogenic Spot:</strong> Perfect for capturing memories with yaks and nature.</li>
        <li><strong>👪 Family-Friendly:</strong> A fun and safe activity for all age groups.</li>
        <li><strong>🌨️ Best in Winter:</strong> Ideal experience when the region is covered in snow.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Yak rides are available near Tsomgo Lake and other high-altitude areas in Sikkim.
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 8:00 AM – 5:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Charges:</strong> ₹1000 – ₹1500 per ride (varies by location and season)  
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
            <td>Yak Ride → Tsomgo Lake</td>
            <td>2 km</td>
            <td>30 min</td>
            <td>5 min</td>
          </tr>
          <tr>
            <td>Yak Ride → Baba Mandir</td>
            <td>14 km</td>
            <td>-</td>
            <td>35 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Yak Ride Location Map"
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

export default YakRide;

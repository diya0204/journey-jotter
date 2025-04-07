/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const HathiPolBazaar = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Hathi Pol Bazaar</h1><br />
      <img 
        src="https://media1.thrillophilia.com/filestore/7leoq3qh1kca7k2om2rqr9tjbj6h_pixelcut-export%20(22).jpeg?w=400&dpr=2" 
        alt="Hathi Pol Bazaar Udaipur" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History</h2><br />
      <p>
      Udaipur was one time surrounded by the City Wall of Udaipur, called in Hindi Parkota. Hathipole Darvaja or Hathipole is one entry gate among seven, the others being Surajpole, Udiapole, Chandpole, DelhiGate, and so on.
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🛒 Things to Buy at Hathi Pol Bazaar</h2><br />
      <p>Hathi Pol Bazaar, also known as “Elephant Gate Market” is a treasure of Rajasthani craftsmanship and maintains its old-world charm to this date. 
The name Elephant Gate Market comes from when royal elephants used to enter the city through this gate. Walking through its streets, you can see many parts of Rajasthani culture. 
Skilled workers make and sell things like hand-crafted textiles, fancy jewellery, and many more(explore below for famous things to buy at Hathi Pol Bazaar!). Also, you can smell spices in the air and the market feels lively with customers and sellers.</p><br></br>
      <ul style={{ textAlign: "left" }}>
        <li><strong>🖼️ Miniature Paintings:</strong> Traditional Pichwai and Phad paintings of Rajasthan.</li>
        <li><strong>👗 Rajasthani Clothing:</strong> Beautiful Bandhani sarees, block-printed fabrics, and embroidered textiles.</li>
        <li><strong>💎 Silver & Lac Jewelry:</strong> Intricate silver jewelry, lac bangles, and oxidized ornaments.</li>
        <li><strong>🏺 Handicrafts & Wooden Art:</strong> Exquisite wooden carvings, home décor, and colorful puppets.</li>
        <li><strong>🖌️ Marble & Metal Artifacts:</strong> Elegant marble statues, brass sculptures, and decorative pieces.</li>
        <li><strong>👜 Leather & Mojaris:</strong> Authentic camel leather bags and handcrafted juttis(mojris).</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Hathi Pol Bazaar, Udaipur, Rajasthan 313001, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 10:00 AM – 8:00 PM (Closed on Sundays)  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> Free  
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
            <td>Hathi Pol Bazaar → Eklingji Temple</td>
            <td>21.5 km</td>
            <td>-</td>
            <td>37 min</td>
          </tr>
          <tr>
            <td>Hathi Pol Bazaar → Bapu Bazaar</td>
            <td>2 km</td>
            <td>25 min</td>
            <td>7 min</td>
          </tr>
          <tr>
            <td>Hathi Pol Bazaar → Ranakpur Jain Temple</td>
            <td>91 km</td>
            <td>-</td>
            <td>2 hrs 5 min</td>
          </tr>
          <tr>
            <td>Hathi Pol Bazaar → Gulab Bagh</td>
            <td>2.5 km</td>
            <td>30 min</td>
            <td>7 min</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Hathi Pol Bazaar Udaipur Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.154684786674!2d73.68224867513503!3d24.592166678106007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sHathi%20Pol%20Bazaar!5e0!3m2!1sen!2sin!4v1712807896543"
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

export default HathiPolBazaar;

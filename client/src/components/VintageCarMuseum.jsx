/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const VintageCarMuseum = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Vintage Car Museum</h1><br />
      
      {/* Image */}
      <img 
        src="https://www.kiomoi.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fkmadmin%2Fimage%2Fupload%2Fv1722936770%2Fkiomoi%2FVintage_Car_Museum%252C_Udaipur_3529.jpg&w=3840&q=75"
        alt="Vintage Car Museum Udaipur" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏛️ History & Description</h2><br />
      <p>
      The Vintage and Classic Car Museum, or Vintage & Classic Car Collection was unveiled to general public on 15 February 2000. It was inaugurated by Lord Montagu of Beaulieu, founder of the National Motor Museum in England. The Vintage & Classic Car Collection is a car collection and a museum, showing all the vehicles belonging to the Maharanas of Mewar both past and present. The collection is housed in the original former Mewar State Motor Garage, which currently serves as this museum. Garden Hotel and Restaurant, a property of HRH Group of Hotels, Udaipur, is also contained within the grounds of garage. The semi-circular motor garage with its forecourt is housed within a greater courtyard. It also houses one of the original Shell petrol pump, which is still assumed to be in usable condition. Despite some vehicles being over seventy years old, each one is still kept in working condition.
      </p><br />

      <ul style={{ textAlign: "left" }}>
        <li><strong>🚗 26 Vintage Cars:</strong> Rare models from Rolls Royce, Cadillac, Ford, and Mercedes-Benz.</li>
        <li><strong>🎬 Bollywood & Hollywood Fame:</strong> The Rolls Royce Phantom II appeared in the James Bond movie Octopussy.</li>
        <li><strong>🏛️ Owned by Royalty:</strong> Previously used by Maharajas of Udaipur for ceremonies and special events.</li>
        <li><strong>⛽ Historic Fuel Station:</strong> A 90-year-old Shell Petrol Pump inside the museum still functions!</li>
        <li><strong>🛠️ Restored Classics:</strong> Many of these cars are still operational and used during special occasions.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Vintage & Classic Car Collection, Gulab Bagh Rd, Udaipur, Rajasthan 313001, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 9:00 AM – 8:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> ₹400 (Adults), ₹250 (Children)  
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
            <td>Vintage Car Museum → Taj Lake Palace</td>
            <td>3.5 km</td>
            <td>45 min</td>
            <td>12 min</td>
          </tr>
          <tr>
            <td>Vintage Car Museum → The Leela Palace</td>
            <td>4.0 km</td>
            <td>50 min</td>
            <td>14 min</td>
          </tr>
          <tr>
            <td>Vintage Car Museum → Shilpgram</td>
            <td>5.3 km</td>
            <td>1 hr 15 min</td>
            <td>14 min</td>
          </tr>
          <tr>
            <td>Vintage Car Museum → Ahar Cenotaphs</td>
            <td>2.8 km</td>
            <td>35 min</td>
            <td>10 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Vintage Car Museum Udaipur Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.665432889939!2d73.68146717513434!3d24.580898878106073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sVintage%20Car%20Museum%20Udaipur!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button with Hover Effect */}
      <button 
        onClick={() => onBack("UdaipurL1")} 
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

export default VintageCarMuseum;

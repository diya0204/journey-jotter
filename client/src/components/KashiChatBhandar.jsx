/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const KashiChatBhandar = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Kashi Chat Bhandar</h1><br />
      <img 
        src="https://newstrack.com/h-upload/2022/11/21/1458651-kashi-chat-bhandar.webp" 
        alt="Kashi Chat Bhandar" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🍽️ About Kashi Chat Bhandar</h2><br />
      <p>
        Kashi Chat Bhandar is one of the most famous street food destinations in Varanasi, known for serving delicious and authentic Banarasi chaats. From Tamatar Chaat to Pani Puri, every dish is a burst of flavors, making it a must-visit place for food lovers.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>😋 Specialties</h2><br />
      <p>Kashi Chat Bhandar in Varanasi, India is known for its Banarasi chaat, including aloo tikki chaat, tamatar chat, and golgappas. Some say the chaat has unique flavors and presentation.</p><br></br>
      <ul style={{ textAlign: "left" }}>
        <li><strong>🌶️ Tamatar Chaat:</strong>A famous dish of Varanasi that is served in an earthen pot.</li>
        <li><strong>🥔 Aloo Tikki:</strong>A popular dish at Kashi Chat Bhandar.</li>
        <li><strong>🥤 Lassi:</strong> A sweet and creamy yogurt-based drink.</li>
        <li><strong>🌰 Palak Chaat:</strong>A popular dish at Kashi Chat Bhandar.</li>
        <li><strong>🥙 Pani Puri:</strong>A popular dish at Kashi Chat Bhandar.</li>
        <li><strong>🍛 Banarasi Chaat:</strong> A specialty of Kashi Chat Bhandar.</li>
        <li><strong>🍽️ Dahi Puri:</strong> A popular dish at Kashi Chat Bhandar.</li>
        <li><strong>🍦 Kulfi Faluda:</strong> A popular dish at Kashi Chat Bhandar.</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Kashi Chat Bhandar, Godowlia, Varanasi, Uttar Pradesh 221001, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 12:00 PM – 10:00 PM
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>💰 Price Range:</strong> ₹50 – ₹200 per person
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
            <td>Kashi Chat Bhandar → Dashashwamedh Ghat</td>
            <td>1.0 km</td>
            <td>12 min</td>
            <td>5 min</td>
          </tr>
          <tr>
            <td>Kashi Chat Bhandar → Kashi Vishwanath Temple</td>
            <td>0.8 km</td>
            <td>10 min</td>
            <td>4 min</td>
          </tr>
          <tr>
            <td>Kashi Chat Bhandar → Assi Ghat</td>
            <td>2.5 km</td>
            <td>30 min</td>
            <td>10 min</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Kashi Chat Bhandar Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.195378814407!2d83.00539527511702!3d25.307960027539333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31ec4c97f3e5%3A0x6e4c3f6a1bcd1e92!2sKashi%20Chat%20Bhandar!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>
      <button 
        onClick={() => onBack("VaranasiL4")} 
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

export default KashiChatBhandar;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const GrandPalace = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#B8860B", fontSize: "3rem" }}>
        The Grand Palace & Wat Phra Kaew
      </h1>
      <br />
      <img
        src="https://content.skyscnr.com/available/1141558553/1141558553_WxH.jpg"
        alt="The Grand Palace & Wat Phra Kaew Bangkok"
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
      <h2 style={{ color: "#DAA520", fontSize: "2rem" }}>
        🏯 About The Grand Palace & Wat Phra Kaew
      </h2>
      <br />
      <p>
        The Grand Palace is one of the most iconic landmarks in Bangkok, Thailand.
        Built in 1782, it served as the royal residence for generations of Thai kings.
        Within its complex lies Wat Phra Kaew, also known as the Temple of the Emerald Buddha,
        which houses Thailand’s most revered Buddha image.
      </p>
      <br />
      <h2 style={{ color: "#DAA520", fontSize: "2rem" }}>
        🌟 Why Visit The Grand Palace?
      </h2>
      <br />
      <p>
      The Grand Plaza Bangkok, often referring to the Central Plaza shopping complex, is a popular destination in Bangkok primarily because it offers a vast array of shopping options, from high-end luxury brands to mid-range stores, alongside a diverse selection of dining choices, entertainment venues, and a convenient location with easy access to public transportation, making it a great place to spend a day exploring and indulging in retail therapy. 
Extensive Shopping: The mall boasts a wide range of retail stores catering to different tastes and budgets, including international designer labels, local brands, electronics stores, and more. 
Food Variety: A diverse selection of restaurants and cafes offering both Thai and international cuisine, with options from casual dining to fine dining experiences. 
Entertainment Options: Often includes a cinema complex, amusement areas for children, and event spaces for exhibitions and performances. 
Accessibility: Conveniently located near public transportation like the BTS Skytrain, making it easy to reach from different parts of Bangkok. 
Central Location: Situated in a central area of Bangkok, allowing visitors to easily explore other nearby attractions.
      </p>
      <br />
      <ul style={{ textAlign: "left" }}>
        <li>
          <strong>🏰 Royal Heritage:</strong> Former residence of the Thai monarchy.
        </li>
        <li>
          <strong>🙏 Wat Phra Kaew:</strong> Home to the sacred Emerald Buddha statue.
        </li>
        <li>
          <strong>🎨 Breathtaking Architecture:</strong> Stunning golden spires and intricate designs.
        </li>
        <li>
          <strong>📖 Rich History:</strong> A glimpse into Thailand’s royal past.
        </li>
        <li>
          <strong>📸 Top Photo Spot:</strong> A visually stunning landmark for photography enthusiasts.
        </li>
      </ul>
      <br />
      <h2 style={{ color: "#DAA520", fontSize: "2rem" }}>📍 Location & Nearby Distances</h2>
      <br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> The Grand Palace, Phra Nakhon, Bangkok, Thailand
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Opening Hours:</strong> 8:30 AM - 3:30 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> 500 THB per person  
      </p>
      <br />
      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          textAlign: "center",
          borderCollapse: "collapse",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#B8860B", color: "white" }}>
            <th>From → To</th>
            <th>Distance (km)</th>
            <th>Walking Time</th>
            <th>Driving Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Grand Palace → Wat Pho(Reclining Buddha Temple)</td>
            <td>1 km</td>
            <td>10 min</td>
            <td>5 min</td>
          </tr>
          <tr>
            <td>The Grand Palace → Wat Arun(Temple of Dawn)</td>
            <td>2.5 km</td>
            <td>-</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>The Grand Palace → Khao San Road</td>
            <td>1.5 km</td>
            <td>20 min</td>
            <td>7 min</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ color: "#DAA520", fontSize: "2rem" }}>🗺️ Location on Map</h2>
      <br />
      <iframe
        title="The Grand Palace & Wat Phra Kaew Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.412181265408!2d100.492876314832!3d13.7500418903527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed4f29fdf3f%3A0x7ff11c1f0c3b28c7!2sThe%20Grand%20Palace!5e0!3m2!1sen!2sth!4v1712807896543"
        allowFullScreen
      ></iframe>
      <button
        onClick={() => onBack("Bangkok1")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#8B4513",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          display: "flex",
          marginLeft: "10px"
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#A0522D")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#8B4513")}
      >
        Previous
      </button>
    </div>
  );
};

export default GrandPalace;

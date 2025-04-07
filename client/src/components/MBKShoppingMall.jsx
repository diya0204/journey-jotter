/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const MBKShoppingMall = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#FF5733", fontSize: "3rem" }}>
        MBK Shopping Mall
      </h1>
      <br />

      {/* Image */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/MBK_CENTER_%288%29.jpg/1200px-MBK_CENTER_%288%29.jpg"
        alt="MBK Shopping Mall Bangkok"
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      {/* Description Section */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🛍️ About MBK Shopping Mall</h2>
      <br />
      <p>
      This enormous mall is one of Bangkok’s most popular shopping haunts, and bargain hunters will enjoy making their way through the hundreds of small shops selling electronics, souvenirs, cosmetics, and more. In addition, many visit the mall for the vendors trading in replica clothing and accessories. There is a food court and multiple eateries on each floor—look through the mall directory and pick from the local and international cuisines on offer. MBK Center is located near the Bangkok Art and Culture Center. Kick off your shopping mission by alighting at the National Stadium BTS Skytrain Station on a weekday morning.
      </p>
      <br />

      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🌟 Why Visit MBK Shopping Mall?</h2>
      <br />
      <ul style={{ textAlign: "left" }}>
        <li>
          <strong>🛒 Affordable Shopping:</strong> Find budget-friendly fashion, accessories, and souvenirs.
        </li>
        <li>
          <strong>📱 Electronics & Gadgets:</strong> Huge selection of mobile phones, accessories, and tech items.
        </li>
        <li>
          <strong>🍲 Food Court:</strong> Enjoy delicious Thai and international cuisine at affordable prices.
        </li>
        <li>
          <strong>🎮 Entertainment Zone:</strong> Includes arcade games, cinema, and more for a fun experience.
        </li>
      </ul>
      <br />

      {/* Location & Distances */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>📍 Location & Nearby Distances</h2>
      <br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> MBK Center, Pathumwan, Bangkok, Thailand
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Opening Hours:</strong> 10:00 AM - 10:00 PM  
      </p>
      <br />

      {/* Distances Table */}
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
          <tr style={{ backgroundColor: "#FF5733", color: "white" }}>
            <th>From → To</th>
            <th>Distance (km)</th>
            <th>Driving Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MBK → Chinatown</td>
            <td>3 km</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>MBK → Damnoen Saduak</td>
            <td>100 km</td>
            <td>1 hr 40 min</td>
          </tr>
          <tr>
            <td>MBK → Jim Thompson House</td>
            <td>1 km</td>
            <td>5 min</td>
          </tr>
          <tr>
            <td>MBK → Asiatique The Riverfront</td>
            <td>7 km</td>
            <td>20 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🗺️ Location on Map</h2>
      <br />
      <iframe
        title="MBK Shopping Mall Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.476289687567!2d100.52975521533145!3d13.744625090356287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29edc2dd108eb%3A0x9d6b73e7b8dc2d92!2sMBK%20Center!5e0!3m2!1sen!2sth!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button */}
      <button
        onClick={() => onBack("BangkokL1")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#FF5733",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          display: "flex",
          marginLeft: "10px"
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#E63946")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#FF5733")}
      >
        Previous
      </button>
    </div>
  );
};

export default MBKShoppingMall;

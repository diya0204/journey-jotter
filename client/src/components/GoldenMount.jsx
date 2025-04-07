/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const GoldenMount = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#FF5733", fontSize: "3rem" }}>
        Golden Mount
      </h1>
      <br />

      {/* Image */}
      <img
        src="https://wowiwalkers.com/wp-content/uploads/2020/08/goldenmount3-1024x683.jpg"
        alt="Golden Mount"
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      {/* Description Section */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>⛩️ About Golden Mount</h2>
      <br />
      <p>
        The Golden Mount, is one of Bangkok’s most famous temples, offering breathtaking panoramic views of the city. This artificial hill features a golden chedi at the top, which is a revered pilgrimage site. Visitors must climb 318 steps to reach the summit, where they can admire the stunning cityscape, hear the sound of temple bells, and enjoy the peaceful ambiance. 
      </p>
      <br />

      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🌟 Why Visit Golden Mount?</h2>
      <br />
      <p>There are many reasons why we think the Golden Mount is an amazing temple, and thus why you should visit it on your next trip to Bangkok!
Bangkok is known for having many beautiful temples such as Wat Arun and Wat Pho. But these temples are more expensive to visit and often way more crowded with other tourists than Wat Saket.
The fact that the Golden Mountain temple is 77 meter tall means that you get an amazing view over Bangkok compared to some of the other temples. We actually think that the Golden Mount Temple is located on the only hilltop of Bangkok. And we personally just love watching places around the world from different perspectives.</p><br></br>
      <ul style={{ textAlign: "left" }}>
        <li>
          <strong>🏯 Stunning Hilltop Temple:</strong> Experience the beauty of one of Bangkok’s most iconic religious sites.
        </li>
        <li>
          <strong>🌆 Panoramic City Views:</strong> Enjoy breathtaking 360-degree views of Bangkok from the top.
        </li>
        <li>
          <strong>🔔 Peaceful Atmosphere:</strong> Immerse yourself in the tranquil surroundings of temple bells and prayer chants.
        </li>
        <li>
          <strong>🛕 Historical Significance:</strong> Learn about the temple’s long history and its importance in Thai culture.
        </li>
        <li>
          <strong>📸 Photography Spot:</strong> Capture stunning pictures of Bangkok’s skyline.
        </li>
      </ul>
      <br />

      {/* Location & Distances */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>📍 Location & Nearby Distances</h2>
      <br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Wat Saket, Bangkok, Thailand
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Opening Hours:</strong> 7:30 AM - 7:00 PM  
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
            <td>Golden Mount → Art in Paradise</td>
            <td>6 km</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Golden Mount → Chatuchak</td>
            <td>10 km</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>Golden Mount → Lumphini Park</td>
            <td>7 km</td>
            <td>18 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🗺️ Location on Map</h2>
      <br />
      <iframe
        title="Golden Mount Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.3920773993895!2d100.50111131483709!3d13.753563390342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2991d2b5e8393%3A0x9b8c730d4e38cb1c!2sWat%20Saket%20(Golden%20Mount)!5e0!3m2!1sen!2sth!4v1712807896543"
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

export default GoldenMount;

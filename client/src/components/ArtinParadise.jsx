/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ArtinParadise = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#FF5733", fontSize: "3rem" }}>
        Art in Paradise
      </h1>
      <br />

      {/* Image */}
      <img
        src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/1109f39f-Art-in-Paradise/46OFFArtinParadiseBangkokTickets-KlookIndia.jpg"
        alt="Art in Paradise Bangkok"
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      {/* Description Section */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🎨 About Art in Paradise</h2>
      <br />
      <p>
      This new tourist attraction is the only vision illusion art museum in Thailand that visitors can have a full of fun in touching and taking pictures with these illusion 3D art pieces displaying in the museum. Within 5,800 sq. meters space, there are more than 10 exhibitions that range in different theme such as Underwater World Hall, Wildlife Hall, Dinosaur Hall, Waterfall Hall as well as making fun touch the world famous art paints.
      </p>
      <br />

      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🌟 Why Visit Art in Paradise?</h2>
      <br />
      <ul style={{ textAlign: "left" }}>
        <li>
          <strong>📸 Interactive 3D Art:</strong> Step into immersive and illusionary artwork displays.
        </li>
        <li>
          <strong>🎭 Themed Zones:</strong> Explore different themed areas, including fantasy, nature, and adventure.
        </li>
        <li>
          <strong>👨‍👩‍👧‍👦 Family-Friendly:</strong> Perfect for visitors of all ages, offering an engaging experience.
        </li>
        <li>
          <strong>🎨 Unique Photo Opportunities:</strong> Capture creative and fun pictures with amazing backdrops.
        </li>
        <li>
          <strong>🌟 Fun & Creative:</strong> A great place to unleash your imagination and have fun.
        </li>
      </ul>
      <br />

      {/* Location & Distances */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>📍 Location & Nearby Distances</h2>
      <br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Art in Paradise, Bangkok, Thailand
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Opening Hours:</strong> 10:00 AM - 9:00 PM  
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
            <td>Art in Paradise → Chatuchak</td>
            <td>7 km</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Art in Paradise → Golden Mount</td>
            <td>5 km</td>
            <td>12 min</td>
          </tr>
          <tr>
            <td>Art in Paradise → Lumphini Park</td>
            <td>6 km</td>
            <td>15 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🗺️ Location on Map</h2>
      <br />
      <iframe
        title="Art in Paradise Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.3245058983425!2d100.56012631483667!3d13.731132890357668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ec99c7b5dfb%3A0x8a6f4b573c9a745!2sArt%20in%20Paradise!5e0!3m2!1sen!2sth!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button */}
      <button
        onClick={() => onBack("Bangkok3")}
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

export default ArtinParadise;
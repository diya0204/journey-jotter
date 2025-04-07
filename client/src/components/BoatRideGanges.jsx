/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const BoatRideGanges = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Boat Ride on the Ganges</h1><br />

      {/* Image */}
      <img 
        src="https://media1.thrillophilia.com/filestore/ak519rxt3945rf9sqm3o91njvw9z_download%20-%202024-12-05T172925.119.jpg?w=400&dpr=2" 
        alt="Boat Ride on the Ganges" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🚣 Experience the Ganges</h2><br />
      <p>
        A boat ride on the Ganges River in Banaras is a mesmerizing experience, offering a breathtaking view of the ghats and the city’s spiritual charm. Whether at sunrise or sunset, the serene waters and ancient temples create an unforgettable journey.
      </p><br />

      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 Significance</h2><br />
      <p>
      The Ganges River is considered sacred by Hindus, and Varanasi is one of the holiest cities in India. Taking a boat ride along the river offers a chance to witness and participate in religious rituals like puja(worship) and aarti(prayer).
      </p>

      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>✨ Highlights</h2><br />
      <ul style={{ textAlign: "left" }}>
        <li><strong>🌅 Sunrise & Sunset Rides:</strong>Enjoy a serene view of the city.</li>
        <li><strong>🕉️ Spiritual Journey:</strong> Witness rituals, aartis, and temple prayers.</li>
        <li><strong>🚣 Private & Group Boats:</strong> Choose between rowboats and motorboats.</li>
        <li><strong>📸 Photography Heaven:</strong> Capture stunning reflections of the ghats.</li>
      </ul><br />

      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Available at Dashashwamedh Ghat, Assi Ghat & Manikarnika Ghat, Varanasi
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Best Time:</strong> Sunrise (5:30 AM – 7:00 AM) & Evening (6:00 PM – 7:30 PM)  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>💰 Ticket Price:</strong> ₹100 - ₹500 per person (Varies by type of boat & time of day)  
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
            <td>Boat Ride → Sarnath</td>
            <td>10 km</td>
            <td>-</td>
            <td>25 min</td>
          </tr>
          <tr>
            <td>Boat Ride → Heritage Haveli</td>
            <td>3.5 km</td>
            <td>-</td>
            <td>12 min</td>
          </tr>
          <tr>
            <td>Boat Ride → The Great Kabab Factory</td>
            <td>5.2 km</td>
            <td>-</td>
            <td>17 min</td>
          </tr>
          <tr>
            <td>Boat Ride → Tandoor Villa</td>
            <td>4.8 km</td>
            <td>-</td>
            <td>15 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Boat Ride Ganges Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.567892134567!2d83.0087654321987!3d25.3076543219876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31abcd1234ef%3A0x56789abcd98765ef!2sBoat%20Ride%20on%20Ganges!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button with Hover Effect */}
      <button 
        onClick={onBack} 
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
export default BoatRideGanges;
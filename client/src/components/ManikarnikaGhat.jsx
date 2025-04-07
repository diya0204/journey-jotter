/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const ManikarnikaGhat = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Manikarnika Ghat</h1><br />
      <img 
        src="https://kevinstandagephotography.wordpress.com/wp-content/uploads/2020/05/cover-2.jpg" 
        alt="Manikarnika Ghat Banaras" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 About Manikarnika Ghat</h2><br />
      <p>
      Manikarnika Ghat is one of the oldest ghats in Varanasi and has been accorded the highest position among other ghats by the holy scriptures in Hinduism. It is believed that if a person is cremated here, he immediately attains moksha(salvation). It is bound on both sides by the Scindia Ghat and Dashashwamedh Ghat.  Like all the other ghats in Varanasi, the Manikarnika Ghat is surrounded by a fascinating mythological story which also tells us how it acquired its name. It is believed that when Goddess Adi Shakti, or Goddess Sati, jumped into the fire and immolated herself, Lord Shiva carried her burning body to the Himalayas. There, he was immersed in unending sorrow. Lord Vishnu, moved by his plight, sent forth his Divine Chakra(one of his weapons) which cut Goddess Adi Shakti’s body into 51 pieces. Each of the place where her pieces fell on Earth were declared as a Shakti Peeth. Because her earrings fell at this ghat, it was established as a Shakti Peeth and named Manikarnika since Manikarna in Sanskrit means ear rings.
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌟 Highlights</h2><br />
      <ul style={{ textAlign: "left" }}>
        <li><strong>🔥 Sacred Cremation Site:</strong> Considered the most auspicious place for attaining moksha.</li>
        <li><strong>🏛️ Manikarnika Kund:</strong>A pond near the ghat that is said to have been filled with sweat of Shiva.</li>
        <li><strong>🛶 Ganges River View:</strong> A breathtaking view of the Ganga and nearby ghats.</li>
        <li><strong>🙏 Spiritual Atmosphere:</strong> A deeply spiritual and mystical experience.</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Manikarnika Ghat, Varanasi, Uttar Pradesh, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> Open 24/7 
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
            <td>Manikarnika Ghat → Bharat Mata Mandir</td>
            <td>4 km</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Manikarnika Ghat → BHU Campus</td>
            <td>8 km</td>
            <td>25 min</td>
          </tr>
          <tr>
            <td>Manikarnika Ghat → New Vishwanath Temple</td>
            <td>2 km</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>Manikarnika Ghat → Tulsi Manas Mandir</td>
            <td>5 km</td>
            <td>18 min</td>
          </tr>
          <tr>
            <td>Manikarnika Ghat → BrijRama Palace</td>
            <td>0.3 km</td>
            <td>5 min</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Manikarnika Ghat → Taj Nadesar Palace</td>
            <td>6.2 km</td>
            <td>-</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>Manikarnika Ghat → Assi Ghat</td>
            <td>4.7 km</td>
            <td>55 min</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Manikarnika Ghat → Dashashwamedh Ghat</td>
            <td>0.5 km</td>
            <td>7 min</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Manikarnika Ghat Banaras Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.680801712345!2d83.03757917511636!3d25.2806932775345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2c1f0e1f9fcd%3A0x5c9b5b36fbbf3e16!2sManikarnika%20Ghat!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>
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
export default ManikarnikaGhat;
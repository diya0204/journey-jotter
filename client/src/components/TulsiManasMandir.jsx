/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TulsiManasMandir = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Tulsi Manas Mandir</h1><br />
      
      {/* Image */}
      <img 
        src="https://visitkashi.in/backend/admin/product_images/168001921039.jpg" 
        alt="Tulsi Manas Mandir" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History</h2><br />
      <p>
      There were many poets and scholars that were born in ghats of Varanasi. Tulsi das translated the epic to Hindi thereby more people could read it. The translation was a way of breaking the barrier. He composed Ram Charitramanasa in Tulsi manas temple. He gained tremendous acclaim and popularity. After this the mythical figure of Ram and is adventures came known to people.
The elites of the society were not happy with Tulsi Das and condemned Ramcharatamanasa. The upper-class people just did not read this book and decided to ban the book. To belittle the book the Brahmins ordered to test the sanctity of the book. The book was kept under the piles of Sanskrit scriptures. The book was kept in inner sanctum of Kashi Vishwanath temple and main doors were closed from outside. The interesting part is that in the morning the manuscript was in top of Sanskrit Scriptures with Satyam Shivam Sundaram.
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌟 Highlights</h2><br />
      <ul style={{ textAlign: "left" }}>
        <li><strong>📖 Engraved Verses:</strong> Walls adorned with verses from Ramcharitmanas.</li>
        <li><strong>🏛️ Beautiful Architecture:</strong>The temple is made of white marble and is surrounded by gardens.</li>
        <li><strong>🙏 Spiritual Ambiance:</strong> A serene place for devotees and visitors.</li>
        <li><strong>🎭 Ramayana Depictions:</strong> Animated displays of Ramayana scenes.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Tulsi Manas Mandir, Varanasi, Uttar Pradesh, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 5:30 AM – 12:00 PM, 3:30 PM – 9:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> Free
      </p><br />

      {/* Distances Table */}
      <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "center", borderCollapse: "collapse", marginBottom: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#3498DB", color: "white" }}>
            <th>From → To</th>
            <th>Distance (km)</th>
            <th>Driving Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tulsi Manas Mandir → Bharat Mata Temple</td>
            <td>5 km</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Tulsi Manas Mandir → Manikarnika Ghat</td>
            <td>4 km</td>
            <td>12 min</td>
          </tr>
          <tr>
            <td>Tulsi Manas Mandir → New Vishwanath Temple</td>
            <td>2 km</td>
            <td>8 min</td>
          </tr>
          <tr>
            <td>Tulsi Manas Mandir → BHU Campus</td>
            <td>3 km</td>
            <td>10 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Tulsi Manas Mandir Banaras Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.680801712345!2d83.03757917511636!3d25.2806932775345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2c1f0e1f9fcd%3A0x5c9b5b36fbbf3e16!2sTulsi%20Manas%20Mandir!5e0!3m2!1sen!2sin!4v1712807896543"
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

export default TulsiManasMandir;

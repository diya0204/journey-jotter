/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SangaChoelingMonastery = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Sanga Choeling Monastery</h1><br />
      
      {/* Image */}
      <img 
        src="https://www.thetourindia.com/flashphotos/photos/317289ce2e38c7dc8267875af2ae0291.webp" 
        alt="Sanga Choeling Monastery Sikkim" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏯 About Sanga Choeling Monastery</h2><br />
      <p>
      Sanga Choling monastery is located on a hill top at the rear of the town of Pelling in the western part of the state of     Sikkim. One must undertake an uphill hike for about forty minutes to reach the monastery.     Built in 1697, the monastery is the creation of Gyalwa Lhatsum Chempo, and is exceedingly acclaimed among the     followers of the Nyingmapa sect of the ancient school of Tibetan Buddhism. Devastated by fire, it has been remodeled and abodes some of the unique clay statues.
      Located on the top of high ridge, Sangachoeling Monastery is situated opposite to Pemayangtse Monastery. Entry into the Sangachoeling Monastery is strictly restricted to the Bhutia and Lepcha communities. An old crematorium is located near the Sangachoeling Monastery, which has seen use from last three centuries.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌟 Why Visit Sanga Choeling Monastery?</h2><br />
      <p>
      Sanga Choeling Gompa is situated on a ridge opposite the Pemayangtse Monastery. From afar, the monastery looks as if it is balancing on a hill and the mountains in the background make for a picturesque setting. Constructed in the 17th century, this monastery is one of the oldest in Sikkim and draws a number of devotees and tourists from all around the globe.
Commonly called the ‘place of secret spells’, one reaches Sanga Choeling by walking through a grove of thick deciduous trees. The 4km walk through a tunnel of vegetation leads to the manicured courtyard of the temple. For those interested in old Tibetan architecture, this monastery is a must-visit.
      </p><br />

      <ul style={{ textAlign: "left" }}>
        <li><strong>🏔️ Stunning Views:</strong> Offers breathtaking vistas of the Kanchenjunga range.</li>
        <li><strong>🙏 Spiritual Significance:</strong> A sacred site for Buddhist pilgrims.</li>
        <li><strong>🚶 Trekking Experience:</strong> Requires a short but scenic trek.</li>
        <li><strong>🕰️ Historic Importance:</strong> One of the oldest monasteries in Sikkim, built in the 17th century.</li>
        <li><strong>📜 Ancient Artifacts:</strong> Preserves rare Buddhist scriptures and traditional murals.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Sanga Choeling Monastery, Pelling, West Sikkim, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Best Time to Visit:</strong> March - May & September - November  
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
            <th>Walking Time</th>
            <th>Driving Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sanga Choeling Monastery → Pelling</td>
            <td>3 km</td>
            <td>40 min</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Sanga Choeling Monastery → Pemayangtse Monastery</td>
            <td>4 km</td>
            <td>50 min</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>Sanga Choeling Monastery → Rabdentse Ruins</td>
            <td>5 km</td>
            <td>1 hr</td>
            <td>25 min</td>
          </tr>
          <tr>
            <td>Sanga Choeling Monastery → Khecheopalri Lake</td>
            <td>29 km</td>
            <td>-</td>
            <td>1 hr 5 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Sanga Choeling Monastery Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.626544789984!2d88.24123457513467!3d27.315678878106023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a55b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sSanga%20Choeling%20Monastery!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button */}
      <button 
        onClick={() => onBack("SikkimL1")} 
        style={{
          padding: "10px 20px", 
          fontSize: "16px", 
          backgroundColor: "#003366",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          display: "flex",
          marginLeft: "10px"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#0055aa"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#003366"}
      >
        Previous
      </button>
    </div>
  );
};

export default SangaChoelingMonastery;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const RabdentseRuins = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Rabdentse Ruins</h1><br />
      
      {/* Image */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/The_Royal_Ruins_%2C_RABDENTSE_%2C_West_Sikkim.jpg/2560px-The_Royal_Ruins_%2C_RABDENTSE_%2C_West_Sikkim.jpg" 
        alt="Rabdentse Ruins Sikkim" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏰 About Rabdentse Ruins</h2><br />
      <p>
      On the lower hillock, south east of Pemayangtse monastery, lies the ruin of the old Rabdentse palace. Rabdentse was the second capital of Sikkim established by the second Chogyal in the latter half of the 17th century. It was the capital of the erstwhile kingdom till 1814 A.D. The old palace and monastery complex are in ruins, and now Archaeological Survey of India is maintaining and undertaking the restoration works. The place is surrounded by dense forest with a water pond.
      The scenic view from the top of the ruins scanning across deep valley to the mystic heights of Kanchendzonga ranges is something to be cherished and etched in memory. Here one can visualize the remains of a once flourishing colony around the palace which was constructed after the consecration of Chogyal Phuntshog Namgyal in the 1641 AD. On walking through the chestnut trees with the mosses dripping down, one can come across a stone throne with three standing stones known as Namphogang from where the judge used to give his final judgment in those days. One can also see Taphap Chorten, from where the visitors had to take off their hats to enter the palace. After crossing the fourth and the final courtyard wall we can see the palace ruins in the centre. It is situated in a most commanding place from where we can clearly see the entire southwestern region of Sikkim. Adjacent to the place is “Dab Lhagang” Where the royal family used to offer incense to the deities.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌟 Why Visit Rabdentse Ruins?</h2><br />
      <p>
      The Rabdentse Ruins in Sikkim are a must-see for history buffs because they are the remains of the second capital of the former Kingdom of Sikkim. The ruins are also part of a Buddhist pilgrimage circuit. 
Nature: Explore the dense forests and river pond that surround the ruins
Picnic: Have a picnic in the picturesque setting of the ruins
Festivals: Enjoy the various festivities that take place around the ruins
      </p><br />

      <ul style={{ textAlign: "left" }}>
        <li><strong>🏯 Historical Significance:</strong>Learn about the history of Sikkim and the ruins of the palace that was destroyed by the Gurkha army.</li>
        <li><strong>🌄 Breathtaking Views:</strong>Take in the spectacular views of the Kanchenjunga peak and the valley below.</li>
        <li><strong>🚶 Scenic Trek:</strong> A short trek through forests leads to the site.</li>
        <li><strong>📜 Ancient Artifacts:</strong> Features the remains of palace structures and chortens.</li>
        <li><strong>🕊️ Peaceful Ambiance:</strong> Ideal for history enthusiasts and nature lovers.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Rabdentse Ruins, West Sikkim, India
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
            <td>Rabdentse Ruins → Pelling</td>
            <td>3 km</td>
            <td>40 min</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Rabdentse Ruins → Pemayangtse Monastery</td>
            <td>1 km</td>
            <td>15 min</td>
            <td>5 min</td>
          </tr>
          <tr>
            <td>Rabdentse Ruins → Sanga Choeling Monastery</td>
            <td>5 km</td>
            <td>1 hr</td>
            <td>25 min</td>
          </tr>
          <tr>
            <td>Rabdentse Ruins → Khecheopalri Lake</td>
            <td>28 km</td>
            <td>-</td>
            <td>1 hr</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Rabdentse Ruins Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.626544789984!2d88.23456757513467!3d27.318678878106023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a55b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sRabdentse%20Ruins!5e0!3m2!1sen!2sin!4v1712807896543"
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

export default RabdentseRuins;

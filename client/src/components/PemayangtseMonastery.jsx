/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const PemayangtseMonastery = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Pemayangtse Monastery</h1><br />
      
      {/* Image */}
      <img 
        src="https://live.staticflickr.com/5823/20222958823_c830843b75_b.jpg" 
        alt="Pemayangtse Monastery Sikkim" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏯 Overview</h2><br />
      <p>
      The famous Buddhist Monastery Pemayangtse Monastery is located in Pemayangtse, inside the Pelling district of Sikkim. One of the oldest monasteries of the Country, it is perched on a hill with a commanding view of the ancient Rabdentse ruins, which once served as the capital of the Sikkim Kingdom. Translation: Perfect, chic lotus. Pemayangtse is considered to be one of the 4 nerve networks(vessels) inside the human body. 
The prominent feature of this monastery is the collection of statues honouring Padmasambhava, the Guru Rinpoche who brought Buddhism lower back to Tibet, along together with his consorts. Since its final touch in 1705, the Pemayangtse Monastery—one of the oldest in the nation—has been an imperative element of Buddhist pilgrimage direction of Sikkim for generations. The oldest of the 4 faculties of Tibetan Buddhism, the Nyingma Order, is looked for by way of the monastery. The clergymen selected from most of the Bhutias of Sikkim may be diagnosed by way of their red headgear.
The vintage monastery is situated at an outstanding elevation of 2085 meters(6840 feet) above sea stage, making it a visually striking sight. Pemayangtse Monastery is also the beginning factor of the famous Dzongri hiking route. From the monastery, one might also enjoy lovely perspectives of the Kangchenjunga massif, which is home to five eight-thousander peaks, referred to as the Five Treasures of Snow. You can include this in your Pelling Tour Package. 
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌟 Why Visit Pemayangtse Monastery?</h2><br />
      <p>
      If you’re into Buddhist history, Pemayangtse Monastery should be at the top of your list. This 17th century structure is one of the oldest and religiously relevant shrines in Sikkim. The monastery was founded by Lhatsum Chempo, one of the lamas who was part of the consecration ceremony of the first Chogyal(king) in the mid-1600s. The monastery adheres to the Nyingma tradition, the most ancient form of Tibetan Buddhism. The monks here go by the title of ‘ta-tshang’ that translates to ‘pure monk’. Pemayangtse is also responsible for the annual monastic dances that take place in the palace chapel in Gangtok.
      </p><br />

      <ul style={{ textAlign: "left" }}>
        <li><strong>🙏 Spiritual Significance:</strong> A major religious site for Tibetan Buddhists.</li>
        <li><strong>🏛️ Historical Importance:</strong> One of the oldest monasteries in Sikkim.</li>
        <li><strong>🖼️ Stunning Architecture:</strong> Intricate woodwork and murals.</li>
        <li><strong>🏔️ Scenic Location:</strong> Overlooks the majestic Kanchenjunga range.</li>
        <li><strong>📜 Ancient Artifacts:</strong> Houses rare Buddhist scriptures and relics.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Pemayangtse Monastery, Pelling, West Sikkim, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Best Time to Visit:</strong> March - May & September - November  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> ₹20 per person  
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
            <td>Pemayangtse Monastery → Pelling</td>
            <td>2 km</td>
            <td>25 min</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>Pemayangtse Monastery → Sanga Choeling</td>
            <td>4 km</td>
            <td>45 min</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>Pemayangtse Monastery → Rabdentse Ruins</td>
            <td>2 km</td>
            <td>30 min</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>Pemayangtse Monastery → Khecheopalri Lake</td>
            <td>30 km</td>
            <td>-</td>
            <td>1 hr 10 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Pemayangtse Monastery Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.626544789984!2d88.24123457513467!3d27.315678878106023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a55b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sPemayangtse%20Monastery!5e0!3m2!1sen!2sin!4v1712807896543"
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

export default PemayangtseMonastery;

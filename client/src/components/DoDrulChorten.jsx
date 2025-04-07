/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const DoDrulChorten = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Do Drul Chorten</h1><br />
      <img 
        src="https://d3gw4aml0lneeh.cloudfront.net/assets/locations/RiuVJba8k4Rg.jpg" 
        alt="Do Drul Chorten Sikkim" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History</h2><br />
      <p>
      Located close to the Chorten Lhakhang and the Guru Lhakhang, the Do Drul Chorten, with its golden umbrella-shaped dome, is a place of pilgrimage for devout Buddhists. This is a major tourist attraction site in the village due to its quiet and peaceful ambience. Situated near Namgyal Institute of Tibetology, this religious retreat has the complete collection of Dorjee Phurba, Kangyur(Holy Books) and other items.
The stupa has 108 prayer wheels spinning with scriptural passages etched on the walls, a golden dome, and a spire. It is said that the castle’s construction chased away evil spirits known to harm everyone who passed by.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏛️ Description</h2><br />
      <p>
      The Do-Drul Chorten or Stupa was built by the Venerable Trulshi Rimpoche, head of the Nyingma order of Tibetan Buddhism in 1945. Inside this stupa, there are complete mandala sets of Dorjee Phurba(Bajra Kilaya), a set of Kan-gyur relics(Holy Books), complete Zung(mantras) and other religious objects. Around this Chorten, which is one of the most important stupas in Sikkim, are 10 Mani-Lhakor(prayer wheels). These prayer wheels are turned by the devout Buddhist while chanting Hail to the jewel in the Lotus, to invoke the Buddhisattva. The Chorten is surrounded by Chorten Lakhang, where there are two huge statues of Guru Rimpoche(Guru Padmasambhava).
      </p><br />

      <ul style={{ textAlign: "left" }}>
        <li><strong>🛕 Sacred Stupa:</strong> One of the most revered Buddhist monuments in Sikkim.</li>
        <li><strong>🌀 108 Prayer Wheels:</strong> Each inscribed with sacred Buddhist mantras.</li>
        <li><strong>🌿 Peaceful Atmosphere:</strong> Ideal for meditation and spiritual retreat.</li>
        <li><strong>📜 Historical Significance:</strong> Built under the guidance of Trulshik Rinpoche.</li>
        <li><strong>📷 Picturesque Spot:</strong> Beautiful setting for photography and exploration.</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Do Drul Chorten, Gangtok, Sikkim 737103, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 8:00 AM – 6:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> Free for all visitors  
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
            <td>Do Drul Chorten → MG Marg</td>
            <td>3.0 km</td>
            <td>40 min</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>Do Drul Chorten → Ganesh Tok</td>
            <td>6.5 km</td>
            <td>-</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>Do Drul Chorten → Tashi View Point</td>
            <td>8.0 km</td>
            <td>-</td>
            <td>25 min</td>
          </tr>
          <tr>
            <td>Do Drul Chorten → Namgyal Institute of Tibetology</td>
            <td>1.5 km</td>
            <td>20 min</td>
            <td>5 min</td>
          </tr>
          <tr>
            <td>Do Drul Chorten → Bakthang Waterfall</td>
            <td>7.0 km</td>
            <td>-</td>
            <td>22 min</td>
          </tr>
          <tr>
            <td>Do Drul Chorten → Enchey Monastery</td>
            <td>4.0 km</td>
            <td>50 min</td>
            <td>15 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Do Drul Chorten Sikkim Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.636444789984!2d88.61124867513467!3d27.338898878106023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a55b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sDo%20Drul%20Chorten!5e0!3m2!1sen!2sin!4v1712807896543"
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
          marginLeft: "10px",
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#0055aa"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#003366"}
      >
        Previous
      </button>
    </div>
  );
};

export default DoDrulChorten;

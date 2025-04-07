/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const RanakpurJainTemple = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Ranakpur Jain Temple</h1><br />
      <img 
        src="https://cdn.getyourguide.com/img/tour/649a8900825a3.jpeg/146.jpg" 
        alt="Ranakpur Jain Temple" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History</h2><br />
      <p>
      The construction is well documented in a 1436 CE copper-plate record, inscriptions in the temple and a Sanskrit text Soma-Saubhagya Kavya. Inspired by a dream of a celestial vehicle, Dharna Shah, a Porwal from Ghanerao, commenced its construction in 1389, under the patronage of Rana Kumbha, then ruler of Mewar. The architect who oversaw the project was named Dwepa. There is an inscription on a pillar near the main shrine stating that in 1439 Deepaka, an architect, constructed the temple at the direction of Dharanka, a devoted Jain. When the ground floor was completed, Acharya Soma Sundar Suri of Tapa Gaccha supervised the ceremonies, which are described in Soma-Saubhagya Kavya. The construction continued until 1458 CE. However, according to the audio guide provided to visitors to the site, construction lasted fifty years(and involved 2785 workers). Another source reports that construction continued until 1496, fifty years from 1446. The town of Ranakpur and the temple are named after the provincial ruler monarch, Rana Kumbha who supported the construction of the temple.
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏛️ Temple Architecture & Features</h2><br />
      <p>
      Tucked away in the forests of Aravalli hills, comes a place of magnificence in the form of this 15 th century Jain Temple of Ranakpur. Located almost 90 kilometers away from the city of Udaipur in the district of Pali, the Ranakpur Temple in Rajasthan sits graciously poised on the banks of River Maghai.
      Featuring intricate designs akin to a fine piece of embroidered cloth, this temple stands as one of the most brilliant architectural monuments on the Indian subcontinent. Besides, the Ranakpur Temple is also the largest and most significant places of worship for the Jains.
      </p><br></br>
      <ul style={{ textAlign: "left" }}>
        <li><strong>🕉️ Main Shrine:</strong> Dedicated to Lord Adinatha, with a four-faced(Chaumukha) idol.</li>
        <li><strong>⚪ 1,444 Marble Pillars:</strong> Each pillar is unique, with different carvings and designs.</li>
        <li><strong>🔺 Stunning Domes & Ceilings:</strong> The temple features elaborate domes and shikharas(towers).</li>
        <li><strong>🦚 Intricate Sculptures:</strong> The temple is filled with carvings of celestial beings, elephants, and Jain mythology.</li>
        <li><strong>🛕 Other Jain Temples:</strong> The complex includes smaller temples dedicated to Lord Parshvanatha and Lord Neminatha.</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Ranakpur Jain Temple, Ranakpur, Pali District, Rajasthan 306702, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 6:00 AM – 7:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> ₹50 (Indians), ₹200 (Foreigners)  
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
            <td>Ranakpur Jain Temple → Eklingji Temple</td>
            <td>90 km</td>
            <td>-</td>
            <td>2 hrs</td>
          </tr>
          <tr>
            <td>Ranakpur Jain Temple → Bapu Bazaar</td>
            <td>88 km</td>
            <td>-</td>
            <td>1 hr 50 min</td>
          </tr>
          <tr>
            <td>Ranakpur Jain Temple → Gulab Bagh</td>
            <td>90 km</td>
            <td>-</td>
            <td>2 hrs</td>
          </tr>
          <tr>
            <td>Ranakpur Jain Temple → Hathi Pol Bazaar</td>
            <td>91 km</td>
            <td>-</td>
            <td>2 hrs 5 min</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Ranakpur Jain Temple Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.154684786674!2d73.68224867513503!3d24.592166678106007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sRanakpur%20Jain%20Temple!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>
      <button 
        onClick={() => onBack("Udaipur2")} 
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

export default RanakpurJainTemple;

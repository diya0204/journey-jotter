/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const EklingjiTemple = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Eklingji Temple</h1><br />
      <img 
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/d4/5c/be/eklingji-temple.jpg?w=1200&h=-1&s=1" 
        alt="Eklingji Temple Udaipur" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History</h2><br />
      <p>
      According to the 15th century text Ekalinga Mahatmya, the original temple at Eklingji was constructed by the 8th century ruler Bappa Rawal. The original temple and Vigraha(idol) were destroyed during invasions by the Delhi Sultanate rulers. The earliest extant idol was installed by Hamir Singh(14th century), who also carried out extensive renovations to the main temple. Rana Kumbha(15th century) rebuilt the temple, in addition to constructing a Vishnu temple. His 1460 inscription describes him as the personal servant of Ekling.
In the late 15th century, Ghiyath Shah of Malwa Sultanate attacked Mewar, and devastated Eklingji temple. Son of Kumba Rana Raimal(r. 1473–1509) defeated and captured him, and obtained a ransom for his release. With this ransom, Raimal patronized the last major rebuilding of the temple complex, and installed the present murti at the main temple.
Built in 734 AD by Bappa Rawal, the founder of the Mewar Dynasty, Eklingji Temple showcases stunning Māru-Gurjara architecture. The temple complex houses 108 shrines, each adorned with exquisite carvings and sculptures. The main deity, Eklingji(a four-faced Shiva Lingam made of black marble), represents Lord Shiva in his supreme form. The temple walls narrate the glorious past of Mewar rulers, making it a perfect blend of spirituality and history.
Originally, the temple likely belonged to the Pashupata sect, and was subsequently in the custody of the Nath sect. In the 16th century, it came under the control of the Ramanandis.
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏛️ Temple Architecture & Features</h2><br />
      <p>Eklingji Temple, dedicated to Lord Shiva, is a sacred haven situated in the historical city of Udaipur. It stands as a manifestation of architectural brilliance and unwavering devotion, drawing pilgrims and history enthusiasts alike.
        To truly understand the essence of Eklingji Temple, delving into its history becomes imperative. Simultaneously, unraveling the mystique of its timings adds a layer of spiritual understanding, providing a unique perspective to those seeking divine connection.
      </p><br></br>
      <ul style={{ textAlign: "left" }}>
        <li><strong>🕉️ Main Shrine:</strong> Features a 50-feet high, elaborately sculpted shikhara(tower).</li>
        <li><strong>🔥 108 Smaller Shrines:</strong> The temple complex consists of 108 small temples dedicated to different Hindu deities.</li>
        <li><strong>🌊 Water Tanks:</strong> The temple has two sacred ponds(Kunds) used for **ritual bathing.</li>
        <li><strong>🎭 Festivals & Celebrations:</strong> Mahashivratri and Mondays witness grand religious processions.</li>
        <li><strong>🦚 Spiritual Ambience:</strong> Surrounded by lush greenery and serene surroundings.</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Eklingji Temple, Kailashpuri, Udaipur, Rajasthan 313202, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 4:30 AM – 7:00 PM  
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
            <td>Eklingji Temple → Bapu Bazaar</td>
            <td>21 km</td>
            <td>-</td>
            <td>35 min</td>
          </tr>
          <tr>
            <td>Eklingji Temple → Ranakpur Jain Temple</td>
            <td>90 km</td>
            <td>-</td>
            <td>2 hrs</td>
          </tr>
          <tr>
            <td>Eklingji Temple → Gulab Bagh</td>
            <td>22 km</td>
            <td>-</td>
            <td>40 min</td>
          </tr>
          <tr>
            <td>Eklingji Temple → Hathi Pol Bazaar</td>
            <td>21.5 km</td>
            <td>-</td>
            <td>37 min</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Eklingji Temple Udaipur Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.012341258492!2d73.66543867513545!3d24.81452347810584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sEklingji%20Temple!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>
      <button 
        onClick={() => onBack("Udaipur3")} 
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

export default EklingjiTemple;

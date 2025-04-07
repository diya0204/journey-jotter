/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const RamnagarFort = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Ramnagar Fort</h1><br />
      
      {/* Image */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Entrance_area_of_Ramnagar_Fort.jpg/1200px-Entrance_area_of_Ramnagar_Fort.jpg" 
        alt="Ramnagar Fort" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History & Significance</h2><br />
      <p>
      The history of Ramnagar Fort dates back to the 17th century, when it was built by Maharaja Balwant Singh, the first ruler of the Kashi Naresh dynasty. He was a great patron of art and culture, and he wanted to create a grand and elegant residence for himself and his successors. He chose the site of Ramnagar, which was a strategic and scenic location on the banks of the Ganga, and named the fort after the Hindu god Ram, who is believed to have visited this place.
The fort also witnessed some important historical events and incidents, such as the Battle of Buxar in 1764, when the British defeated the combined forces of the Mughal emperor, the Nawab of Bengal, and the Nawab of Awadh. The fort also played a role in the Indian Rebellion of 1857, when it served as a refuge for the rebels and the royal family.
The fort is still the official residence of the Kashi Naresh, who is regarded as the religious and cultural head of Varanasi. The current Kashi Naresh is Anant Narayan Singh, who ascended the throne in 2009. He is also the patron of the fort and the museum, and he organizes various cultural and religious events and festivals in the fort, such as the Ganga Aarti, the vintage car rally, the Durga Puja, and the Ram Leela.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏛️ Major Attractions</h2><br />
      <ul style={{ textAlign: "left" }}>
        <li><strong>🏰 Durbar Hall:</strong> The grand meeting hall of the royal family.</li>
        <li><strong>🗡️ Museum:</strong> Showcases ancient weapons, vintage cars, and royal artifacts.</li>
        <li><strong>📜 Vedic Library:</strong> Houses rare scriptures and manuscripts.</li>
        <li><strong>🌉 Scenic Ganges View:</strong> Stunning riverside view of the Ganges.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Ramnagar Fort, Ramnagar, Varanasi, Uttar Pradesh 221008, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 10:00 AM – 5:00 PM
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> ₹50 (Indians), ₹200 (Foreigners)
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
            <td>Ramnagar Fort → Sarnath</td>
            <td>15 km</td>
            <td>-</td>
            <td>40 min</td>
          </tr>
          <tr>
            <td>Ramnagar Fort → Godowlia Market</td>
            <td>5 km</td>
            <td>-</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Ramnagar Fort → Pind Balluchi</td>
            <td>7 km</td>
            <td>-</td>
            <td>22 min</td>
          </tr>
          <tr>
            <td>Ramnagar Fort → BrijRama Palace</td>
            <td>6.8 km</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>Ramnagar Fort → Peshawri (ITC Mughal-Style Dining)</td>
            <td>7 km</td>
            <td>18 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Ramnagar Fort Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.680801712345!2d83.03757917511636!3d25.2806932775345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2c1f0e1f9fcd%3A0x5c9b5b36fbbf3e16!2sRamnagar%20Fort!5e0!3m2!1sen!2sin!4v1712807896543"
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

export default RamnagarFort;

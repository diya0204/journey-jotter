/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const FatehSagarLake = ({ onBack, previousPage }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Fateh Sagar Lake</h1><br />
      <img 
        src="https://s7ap1.scene7.com/is/image/incredibleindia/fateh-sagar-lake-udaipur-rajasthan-attr-about?qlt=82&ts=1727353060310" 
        alt="Fateh Sagar Lake Udaipur" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History</h2><br />
      <p>
      In 1687, Maharana Jai Singh first constructed the lake but two hundred years later the earthen bund which formed the lake was washed away during floods, and thereafter Maharana Fateh Singh, in 1889, built the Connaught Dam on Lake Dewali to mark the visit of Duke of Connaught, son of Queen Victoria. The dam enlarged the lake, and it was later renamed Fateh Sagar Lake.  
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏞️ Description</h2><br />
      <p>
      Considered as the pride of Udaipur, this artificial lake was constructed under the reign of Maharana in 1960. Boating on the blue water of the lake, which is overlooked by mountains from three sides, is an experience to remember. There is a garden amidst the lake i.e. Nehru Park, which is a lovely open space with a boat-shaped restaurant. Sprawling over 2.4 kms, Fateh Sagar lake is one of the places where travellers can enjoy the scenic beauty of Udaipur. The lake lies on the northwest of the main Udaipur city.</p><br></br>
      <ul style={{ textAlign: "left" }}>
        <li><strong>🏝️ Nehru Park(Largest Island):</strong> Features a garden, boat-shaped restaurant, and a small zoo.</li>
        <li><strong>🔬 Udaipur Solar Observatory:</strong> A leading solar research center**, considered one of the **best in Asia.</li>
        <li><strong>🌳 Public Park(Third Island):</strong> Features lush gardens and picnic spots maintained by the government.</li>
        <li><strong>🚤 Boating & Water Sports:</strong> Offers speed boats, paddle boats, and luxurious boat rides.</li>
        <li><strong>🌅 Sunset & Night Views:</strong> The lake glows golden during sunset, making it a popular photography spot.</li>
        <li><strong>🎡 Cultural Events & Festivals:</strong> Hosts events like the Hariyali Amavasya Mela and World Music Festival.</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Fateh Sagar Lake, Udaipur, Rajasthan 313001, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 8:00 AM – 6:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> Free (Boating Charges Apply)  
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
            <td>Fateh Sagar Lake → Monsoon Palace</td>
            <td>6.5 km</td>
            <td>1 hr 45 min</td>
            <td>18 min</td>
          </tr>
          <tr>
            <td>Fateh Sagar Lake → Saheliyon Ki Bari</td>
            <td>2.5 km</td>
            <td>30 min</td>
            <td>7 min</td>
          </tr>
          <tr>
            <td>Fateh Sagar Lake → Shri Shiv Shakti Sweets</td>
            <td>3.2 km</td>
            <td>40 min</td>
            <td>10 min</td>
          </tr>
          <tr>
      <td>Fateh Sagar Lake → Bagore Ki Haveli</td>
      <td>2.5 km</td>
      <td>30 min</td>
      <td>10 min</td>
    </tr>
    <tr>
      <td>Fateh Sagar Lake → Upre Restaurant</td>
      <td>2.8 km</td>
      <td>35 min</td>
      <td>12 min</td>
    </tr>
    <tr>
      <td>Fateh Sagar Lake → Bhartiya Lok Kala Museum</td>
      <td>2.0 km</td>
      <td>25 min</td>
      <td>8 min</td>
    </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Fateh Sagar Lake Udaipur Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.112051186674!2d73.67268267513503!3d24.608776578106007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sFateh%20Sagar%20Lake!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button with Hover Effect */}
      <button 
        onClick={() => onBack(previousPage)} 
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

export default FatehSagarLake;

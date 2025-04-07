/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Shilpgram = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Shilpgram</h1><br />
      
      {/* Image */}
      <img 
        src="https://s7ap1.scene7.com/is/image/incredibleindia/shilpgram-udaipur-rajasthan-2-musthead-hero?qlt=82&ts=1727353110318"
        alt="Shilpgram Udaipur" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History</h2><br />
      <p>
      The Shilpgram is an ideal place to interact and explore the artistic fervor of the Indian culture. It is a place where history, culture, and heritage are bound together to offer a ravishing image of glorious Indian past. Rajiv Gandhi inaugurated Shilpgram in the year 1989.
The place is situated in the old countryside of Udaipur to give an unbiased portrayal of rural life of artisans. The Shilpgram festival conducted on the last ten days around the year end, is an age-old tradition. The artisans and performers flock here from all over to country to showcase their talent and high spirits.
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏛️ Description</h2><br />
      <p>The Complex has an open-air Amphitheatre with a seating capacity of approximately 8000, used for the major theatre festivals held here, and the traditional folk performing arts. Each member state of the West Zone has traditional huts built within the Shilpgram, derivative of certain basic occupations fundamental to the way of life of the people of the area and also central to the culture of the country. In these traditional huts, household articles of everyday use, like terracotta, textile, wooden and metal items, decorative objects and implements are featured with appropriate signage and explanatory details with the objective to give a realistic glimpse of the people and their belongings.
The huts are constructed around an interlocking occupational theme. In this integrated pattern are five huts from Rajasthan, representing the weavers community from Marwar, pottery from the hilly areas of Mewar and the tribal farmer communities of the Bhil and the Sehariyas. Apart from the own representation of the state, there are seven representative huts from the state of Gujarat, five from the state of Maharashtra and five featuring the arts and crafts of Goa.</p><br></br>
      <ul style={{ textAlign: "left" }}>
        <li><strong>🎭 Cultural Hub:</strong> A lively venue showcasing the folk culture of Western India.</li>
        <li><strong>🎨 Handicrafts & Exhibitions:</strong> Features handmade artifacts, textiles, and pottery from across India.</li>
        <li><strong>💃 Folk Dance & Music:</strong> Experience Kalbelia, Ghoomar, and Garba performances.</li>
        <li><strong>🐪 Camel & Horse Rides:</strong> Enjoy traditional Rajasthani-style camel and horse rides.</li>
        <li><strong>🎪 Annual Shilpgram Festival:</strong> A 10-day craft fair held in December, attracting artisans from all over India.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Shilpgram, Udaipur, Rajasthan 313001, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 11:00 AM – 7:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> ₹30 (Adults), ₹15 (Children)  
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
            <td>Shilpgram → Taj Lake Palace</td>
            <td>6.8 km</td>
            <td>1 hr 40 min</td>
            <td>18 min</td>
          </tr>
          <tr>
            <td>Shilpgram → The Leela Palace</td>
            <td>6.5 km</td>
            <td>1 hr 35 min</td>
            <td>17 min</td>
          </tr>
          <tr>
            <td>Shilpgram → Vintage Car Museum</td>
            <td>5.3 km</td>
            <td>1 hr 15 min</td>
            <td>14 min</td>
          </tr>
          <tr>
            <td>Shilpgram → Ahar Cenotaphs</td>
            <td>10.1 km</td>
            <td>2 hr 30 min</td>
            <td>25 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Shilpgram Udaipur Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.753152789939!2d73.67146717513434!3d24.586898878106073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5c4c4c4f669%3A0xcaae8f6b9b3b8c6f!2sShilpgram%20Udaipur!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button with Hover Effect */}
      <button 
        onClick={() => onBack("UdaipurL1")} 
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

export default Shilpgram;

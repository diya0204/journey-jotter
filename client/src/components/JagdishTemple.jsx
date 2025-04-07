/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const JagdishTemple = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Jagdish Temple</h1><br />
      <img 
        src="https://udaipurtourism.co.in/images//tourist-places/jagdish-temple-udaipur/jagdish-temple-udaipur-indian-tourism-opening-time-closing.jpg" 
        alt="Jagdish Temple" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History</h2><br />
      <p>
      The temple of Shrei Jagdish was embraced by the leader of Udaipur, Maharaja Jagat Singh, who led the city from 1628 to 1653. The temple was based on a small courtyard, and was continuously developed in 1651. The magnificent temple was built by the Hindu engineering probe in Vastushastra. In fact, even on those occasions, the governor spent 1.5 million Indian rupees on the development of this giant structure.
        A curious sight seen by many individuals in the Jagdish temple is the marble, which is placed where the ladder begins to the main temple. On this part of the marble, passengers and locals install a line, rubbing the knees, bears or back. It is said that this marble piece has the magical ability to relieve any gaps in the part of the body that the individual rubbed against him.
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏛️ Description</h2><br />
      <p>
      Jagdish Temple is a large Hindu temple in the middle of Udaipur in Rajasthan, just outside the royal palace. It has been in continuous worship since 1651. A big tourist attraction, the temple was originally called the temple of Jagannath Rai but is now called Jagdish-ji. It is a major monument in Udaipur.
      </p><br></br>
      <ul style={{ textAlign: "left" }}>
        <li><strong>🛕 Main Shrine:</strong> The sanctum houses a black stone idol of Lord Vishnu, known as Jagannath.</li>
        <li><strong>📜 Carvings & Sculptures:</strong> The temple features elaborate carvings depicting mythological figures and celestial beings.</li>
        <li><strong>🕉️ Smaller Shrines:</strong> There are shrines dedicated to Lord Shiva, Goddess Shakti, Lord Ganesha, and Lord Surya surrounding the main temple.</li>
        <li><strong>🚩 Garuda Statue:</strong> At the entrance stands a large brass statue of Garud, symbolizing devotion.</li>
        <li><strong>🎭 Festivals:</strong> The temple is a major attraction during Janmashtami and Diwali, with grand celebrations and processions.</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Jagdish Temple, Udaipur, Rajasthan 313001, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 4:30 AM – 10:00 PM  
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
            <td>Jagdish Temple → City Palace</td>
            <td>0.2 km</td>
            <td>3 min</td>
            <td>2 min</td>
          </tr>
          <tr>
            <td>Jagdish Temple → Lake Pichola Boat Ride</td>
            <td>0.6 km</td>
            <td>7 min</td>
            <td>3 min</td>
          </tr>
          <tr>
            <td>Jagdish Temple → Ambrai Restaurant</td>
            <td>1.4 km</td>
            <td>17 min</td>
            <td>7 min</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Jagdish Temple Udaipur Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8831908901816!2d73.68207997513435!3d24.57692867810665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5b3cfbd4c67%3A0xc1f650a7b07fae49!2sJagdish%20Temple!5e0!3m2!1sen!2sin!4v1712804567891"
        allowFullScreen
      ></iframe>
      <button 
        onClick={() => onBack("TravelItinerary")} 
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

export default JagdishTemple;

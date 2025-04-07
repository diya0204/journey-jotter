/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const LumphiniPark = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#FF5733", fontSize: "3rem" }}>
        Lumphini Park
      </h1>
      <br />

      {/* Image */}
      <img
        src="https://www.pelago.com/img/collections/lumpini-park/0710-0226_lumpini-park-bangkok.jpg"
        alt="Lumphini Park Bangkok"
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      {/* Description Section */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🌳 About Lumphini Park</h2>
      <br />
      <p>
      Lumpini Park in Bangkok Thailand is the first public park. This multi-functional park allows you to do several outdoor recreational activities in the fresh breeze. The park is also open for activities such as exercising, playing games and music, reading books in the library, doing Tai Chai, learning social dancing and more. An abundance of flora and fauna along with a large lake can be seen in the Lumpini Park Bangkok. You can as well enjoy listening to Thai music and Western music in the park. In the past, this place served as a place for ballroom dancing and parties. Since it is a public park, visitors are not required to pay any Lumpini Park Bangkok entrance fee.
      </p>
      <br />

      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🌟 Why Visit Lumphini Park?</h2>
      <br />
      <p>Visit Lumpini Park in Bangkok to experience a large, green oasis in the heart of the city, perfect for relaxing, exercising, observing local life, and enjoying outdoor activities like jogging, biking, paddle boating on the lake, all while surrounded by lush greenery and sometimes spotting monitor lizards - a unique feature of the park; essentially, it is a great place to escape the urban bustle and unwind in a beautiful natural setting. 
Green space in the city: It is one of the largest green areas in central Bangkok, offering a welcome respite from the busy city environment. 
Variety of activities:
Wildlife sightings: The park is known for its monitor lizards, which can often be seen swimming in the lake. 
Local atmosphere: Lumpini Park is a popular spot for locals to gather, providing a glimpse into everyday Thai life. 
Accessibility: Located in the center of Bangkok, it is easily accessible by public transportation. </p><br></br>
      <ul style={{ textAlign: "left" }}>
        <li>
          <strong>🚶 Peaceful Walks:</strong> Enjoy a serene atmosphere with scenic walking and jogging paths.
        </li>
        <li>
          <strong>🛶 Boat Rides:</strong> Rent a paddle boat and explore the lake of the park.
        </li>
        <li>
          <strong>🐊 Monitor Lizards:</strong> Spot the fascinating resident monitor lizards roaming freely.
        </li>
        <li>
          <strong>🎶 Outdoor Activities:</strong>  You can jog, walk, bike, do aerobics, practice tai chi, rent a paddle boat on the lake, or simply relax on a bench and people-watch. 
        </li>
        <li>
          <strong>🌿 Relaxation:</strong> Escape the hustle and unwind in a lush green environment.
        </li>
      </ul>
      <br />

      {/* Location & Distances */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>📍 Location & Nearby Distances</h2>
      <br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Lumphini Park, Pathum Wan, Bangkok, Thailand
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Opening Hours:</strong> 4:30 AM - 9:00 PM  
      </p>
      <br />

      {/* Distances Table */}
      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          textAlign: "center",
          borderCollapse: "collapse",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#FF5733", color: "white" }}>
            <th>From → To</th>
            <th>Distance (km)</th>
            <th>Driving Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lumphini Park → Art in Paradise</td>
            <td>6 km</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Lumphini Park → Chatuchak</td>
            <td>10 km</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>Lumphini Park → Golden Mount</td>
            <td>8 km</td>
            <td>18 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🗺️ Location on Map</h2>
      <br />
      <iframe
        title="Lumphini Park Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.331973905179!2d100.54105981483669!3d13.730125390357745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed92482b6b9%3A0x52bbcd27aa824a3b!2sLumphini%20Park!5e0!3m2!1sen!2sth!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button */}
      <button
        onClick={() => onBack("Bangkok3")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#FF5733",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          display: "flex",
          marginLeft: "10px"
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#E63946")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#FF5733")}
      >
        Previous
      </button>
    </div>
  );
};

export default LumphiniPark;

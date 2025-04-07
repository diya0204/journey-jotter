/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const AsiatiqueRiverfront = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#FF5733", fontSize: "3rem" }}>
        Asiatique The Riverfront
      </h1>
      <br />

      {/* Image */}
      <img
        src="https://bodegahostels.com/wp-content/uploads/2018/07/asiatique-the-riverfront-bankgok.jpg"
        alt="Asiatique The Riverfront Bangkok"
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      {/* Description Section */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🎡 About Asiatique The Riverfront</h2>
      <br />
      <p>
      It is located on Charoen Krung Road and is a gigantic shopping venue on the bank of the Chao Phraya River. It modified the former port warehouse of the East Asiatic Company, and the colonial-style structure is according to the culture of the reign of King Rama V the Great. It is divided into four zones: Charoen Krung District with more than 1,000 shops selling souvenirs and decorative products. Town Square District has an integration of Eastern and Western cultures with different performance activities, e.g., Joe Louis Puppet Show, the Calypso Show, etc. as well as various types of restaurants. Factory District is a 100-year-old sawmill area decorated to be modern to make it a fashion store, both costumes and accessories. Waterfront District comprises restaurants in the atmosphere of the Chao Phraya River and a walkway along the Chao Phraya River, a distance of 100 metres to see the scenery like a panoramic view. In addition, within the area there are seven wonders: a World War I bunker, an old tram, an old sawmill, a sawmill crane, an arched warehouse over 100 years old, historical port, and a separate crane of the waterfront. There is also modern playing equipment of the Asiatique Sky Ferris wheel that is 60 metres high. Sit and watch the surrounding scenery and the Mystery Mansion that was built from an innovation and imported from Italy. Inside, there is a light and sound show and games that are interesting, including a small puppet show by Joe Louis. Open daily 11.00 - 24.00 hrs. 
      </p>
      <br />

      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🌟 Why Visit Asiatique The Riverfront?</h2>
      <br />
      <p>Asiatique The Riverfront in Bangkok, Thailand is a popular tourist destination that offers a mix of shopping, dining, and entertainment. It is located on the Chao Phraya River in the old docks of the East Asiatic Company. 
Entertainment: Catch the Calypso cabaret, watch a Muay Thai fight, or enjoy live music performances 
Attractions: Ride the Ferris wheel or carousel, or visit the Juliet Love Garden 
Atmosphere: Experience a lively atmosphere and stunning views 
History: Learn about the area of rich history </p>
      <ul style={{ textAlign: "left" }}>
        <li>
          <strong>🛍️ Shopping Haven:</strong>Find a variety of shops selling clothes, souvenirs, bags, and more.
        </li>
        <li>
          <strong>🍽️ Riverside Dining:</strong>Sample authentic Thai cuisine at the night market, or dine at premium restaurants from leading international hotels.
        </li>
        <li>
          <strong>🎡 Giant Ferris Wheel:</strong> Take in spectacular views of Bangkok from the top.
        </li>
        <li>
          <strong>🎭 Cultural Shows:</strong> Watch live performances, including the famous Muay Thai Live and puppet shows.
        </li>
        <li>
          <strong>🚤 Easy Access:</strong> Arrive by boat for a scenic ride along the Chao Phraya River.
        </li>
      </ul>
      <br />

      {/* Location & Distances */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>📍 Location & Nearby Distances</h2>
      <br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Asiatique The Riverfront, Charoen Krung Road, Bangkok, Thailand
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Opening Hours:</strong> 4:00 PM - 12:00 AM  
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
            <td>Asiatique The Riverfront → Chinatown</td>
            <td>6 km</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Asiatique The Riverfront → MBK Shopping Mall</td>
            <td>7 km</td>
            <td>18 min</td>
          </tr>
          <tr>
            <td>Asiatique The Riverfront → Jim Thompson House</td>
            <td>8 km</td>
            <td>22 min</td>
          </tr>
          <tr>
            <td>Asiatique The Riverfront → Damnoen Saduak</td>
            <td>105 km</td>
            <td>1 hr 50 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🗺️ Location on Map</h2>
      <br />
      <iframe
        title="Asiatique The Riverfront Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.3666796151047!2d100.50901361483664!3d13.704814990373395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2992958e6d0f5%3A0xb21428e37c21f3e4!2sAsiatique%20The%20Riverfront!5e0!3m2!1sen!2sth!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button */}
      <button
        onClick={() => onBack("BangkokL1")}
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

export default AsiatiqueRiverfront;

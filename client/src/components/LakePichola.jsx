/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const LakePicholaBoatRide = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Lake Pichola Boat Ride</h1><br />
      <img 
        src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/e9/7e/48.jpg" 
        alt="Lake Pichola Boat Ride" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History</h2><br />
      <p>
      Pichola Lake was built by Maharaja of Parmar Rajputs, in 1362 AD. It is a hearsay that lake got its name from nearby village Picholi, during the reign of Maharana Lakha. Later, Maharana Udai Singh, impressed by the charm of this lake with the backdrop of green hills, founded the city of Udaipur on the banks of the lake and also enlarged the Lake by constructing a stone masonry dam in the Badipol region on the shore of the Lake.
The surroundings of the Lake and the several islands within the lake have been developed over the centuries, with palaces, marble temples, family mansions, bathing ghats or chabutaras(a raised platform, normally within a courtyard); some of the famous ones are the Lake Palace(now converted into a heritage hotel) in the middle of the lake also called the Pichola Palace(pictured) or Jag Nivas located on the Jag Island, the Jag Mandir, the Mohan Mandir(in the northeast corner of the lake built by Jagat Singh between 1628 and 1652), the City Palace of Udaipur(Bansi Ghat) from where boats ply to all other parts of the Lake, the Arsi Vilas Island, which is a sanctuary for birds and the Sitamata Game Sanctuary on the western shore of the Lake.
At several locations where the lake narrows, ornamental arch bridges have been built to span the waterway between the banks.
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🛶 Description</h2><br />
      <p>A boat ride on Lake Pichola in Udaipur, Rajasthan, is a scenic experience that takes you past palaces, temples, and ghats. The sunset views are particularly captivating.</p><br></br>
      <ul style={{ textAlign: "left" }}>
        <li><strong>🚤 Types of Boat Rides:</strong> Choose between regular, deluxe, and sunset boat rides, each offering unique views.</li>
        <li><strong>🏰 City Palace View:</strong> Experience the majestic City Palace from the waters, showcasing its grand Rajput architecture.</li>
        <li><strong>🏝️ Jag Mandir Stop:</strong> Many boat rides stop at Jag Mandir Island Palace, where visitors can explore and take stunning photographs.</li>
        <li><strong>🌄 Sunset & Night Views:</strong> The best views can be experienced at sunset, when the lake reflects golden and purple hues.</li>
        <li><strong>🌊 Serene & Peaceful Atmosphere:</strong> Ideal for romantic rides, family outings, and photography enthusiasts.</li>
        <li><strong>🎟️ Ticket Pricing:</strong> Regular boat rides start at ₹400 per person, while sunset rides cost around ₹700 per person.</li>
        <li><strong>📸 Photography & Scenic Views:</strong> Capture stunning landscapes, palaces, and reflections in the lake.</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Boat Ride Ticket Office, City Palace Complex, Udaipur, Rajasthan 313001, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 9:00 AM – 6:00 PM (Day Ride), 6:00 PM – 7:30 PM (Sunset Ride)  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Ticket Prices:</strong> ₹400 per person (Regular), ₹700 per person (Sunset Ride)  
      </p><br />

      {/* Distances to Other Attractions */}
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
        <tr><td>Lake Pichola → Taj Lake Palace</td><td>0.35 km</td><td>4 min</td><td>2 min</td></tr>
    <tr><td>Lake Pichola → The Leela Palace</td><td>0.60 km</td><td>7 min</td><td>3 min</td></tr>
    <tr><td>Lake Pichola → Jag Mandir</td><td>1.20 km</td><td>15 min</td><td>5 min (by boat)</td></tr>
    <tr><td>Lake Pichola → City Palace</td><td>0.67 km</td><td>8 min</td><td>3 min</td></tr>
    <tr><td>Lake Pichola → Ambrai Restaurant</td><td>0.50 km</td><td>6 min</td><td>2 min</td></tr>
    <tr><td>Lake Pichola → Monsoon Palace</td><td>4.75 km</td><td>-</td><td>19 min</td></tr>
    <tr><td>Lake Pichola → Jagdish Temple</td><td>0.85 km</td><td>10 min</td><td>4 min</td></tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Lake Pichola Boat Ride Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9540628901767!2d73.68109597513423!3d24.57625547810621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5c5bf64091b%3A0xaaa29bdfd3aafb92!2sLake%20Pichola%20Boat%20Ride!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button with Hover Effect */}
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

export default LakePicholaBoatRide;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const GaneshTok = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Ganesh Tok</h1><br />
      
      {/* Image */}
      <img 
        src="https://media.tripinvites.com/places/gangtok/hanuman-tok/hanuman-tok-featured.jpg" 
        alt="Ganesh Tok Sikkim" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History</h2><br />
      <p>
      The history of Ganesh Tok is closely tied to the cultural and religious fabric of Sikkim. The temple itself is relatively small, with the idol of Ganesha housed in a modest-sized room that can only fit one person at a time. Visitors must climb a set of stairs to reach the shrine. Nevertheless, its significance comes from the belief in Ganesha as a remover of obstacles and the god of new beginnings, which leads many visitors to start their exploration of Sikkim with a prayer at this temple.
Although the exact date of establishment for Ganesh Tok is not documented, the rise in its popularity is attributed to the growth of tourism in Gangtok and the interest in natural beauty of Sikkim and cultural heritage. Since merger of Sikkim with India in 1975, the region has seen a steady increase in visitors, and places of worship like Ganesh Tok have become essential stops on the itineraries of both domestic and international tourists.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏛️ Description</h2><br />
      <p>
      At a road distance of 7 kilometers above Gangtok, Ganesh Tok is a small temple dedicated to lord Ganesh.  This place offers a birds-eye-view of the town below and a spectacular panorama of the Khangchendzonga range in the horizon.  Ganesh Tok is Hindu deity temple frequently visited by the tourists coming to Gangtok. Many popular pictures of Gangtok are taken from this vantage point. The site has been spruced up to provide superb view of the town and distant rolling hills and snowy peaks and also to accommodate the cars that drive to this site. . On a clear day, with no haze, especially during the morning hours one can get perfect views to shoot photographs of the town and enjoy the view of the snow clad peaks of Khangchendzonga. The temple was built in the year 1952 53 by the efforts of Shri Appa B. Pant, the former Political Officer of Sikkim.
      </p><br />

      <ul style={{ textAlign: "left" }}>
        <li><strong>🌄 Stunning Viewpoint:</strong> Offers panoramic views of Gangtok and the Himalayas.</li>
        <li><strong>🙏 Spiritual Retreat:</strong> A peaceful and serene place of worship.</li>
        <li><strong>📷 Photography Spot:</strong> Ideal for capturing the scenic beauty of Sikkim.</li>
        <li><strong>🍀 Lush Greenery:</strong> Surrounded by nature, offering a calming ambiance.</li>
        <li><strong>🛤️ Short Trek:</strong> Can be reached with a short scenic hike or drive.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Ganesh Tok, Gangtok, Sikkim 737103, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 6:00 AM – 7:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> Free for all visitors  
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
            <td>Ganesh Tok → MG Marg</td>
            <td>4.0 km</td>
            <td>50 min</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Ganesh Tok → Tashi View Point</td>
            <td>5.5 km</td>
            <td>-</td>
            <td>18 min</td>
          </tr>
          <tr>
            <td>Ganesh Tok → Do Drul Chorten</td>
            <td>6.0 km</td>
            <td>-</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>Ganesh Tok → Namgyal Institute of Tibetology</td>
            <td>6.5 km</td>
            <td>-</td>
            <td>22 min</td>
          </tr>
          <tr>
            <td>Ganesh Tok → Bakthang Waterfall</td>
            <td>3.0 km</td>
            <td>40 min</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>Ganesh Tok → Enchey Monastery</td>
            <td>2.5 km</td>
            <td>30 min</td>
            <td>8 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Ganesh Tok Sikkim Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.636444789984!2d88.61124867513467!3d27.338898878106023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a55b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sGanesh%20Tok!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button with Hover Effect */}
      <button 
        onClick={() => onBack("Sikkim1")} 
        style={{
          padding: "10px 20px", 
          fontSize: "16px", 
          backgroundColor: "#003366",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          marginLeft: "10px",
          display: "flex",
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#0055aa"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#003366"}
      >
        Previous
      </button>
    </div>
  );
};

export default GaneshTok;

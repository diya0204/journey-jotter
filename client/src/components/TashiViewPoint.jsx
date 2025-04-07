/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TashiViewPoint = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Tashi View Point</h1><br />
      
      {/* Image */}
      <img 
        src="https://www.viyankatravels.com/images/packages/25517exotic-sikkim-tour-banner.jpg" 
        alt="Tashi View Point Sikkim" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History</h2><br />
      <p>
      The Tashi View Point was built by the late king of Sikkim, Tashi Namgyal, and hence it bears his name. It has historically served as a vantage point to observe the splendid harmony of mountains and valleys of Sikkim. The viewpoint became popular with tourists seeking to immerse themselves in the tranquility of nature, away from the bustle of urban life. Over the years, it has also developed into an ideal spot for sunrise and sunset viewings.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏛️ Description</h2><br />
      <p>
      This charming little Tashi View Point is a perfect place to witness the brilliant surroundings like mountains, valleys and Gangtok itself. This famous tourist point is located at a distance of 8 km from the town and is mostly known for offering some of the best sunrise and sunset views. One can witness the changing of colours of the Kanchenjunga and Siniolchu Peaks as the sun slowly moves from this view point along with the glimpse famous monasteries of Gangtok, Phodong and Labrang. Tourists can enjoy refreshing drinks while relishing the stunning panorama and can also buy souvenirs from the shops set up here.Tashi View Point is a noteworthy place for nature lovers as one get an opportunity to spend some peaceful time away from the bustling crowd amidst the resonating sound of birds and breeze. And the best part is, entry is free, however, a minimum cost of rs 10/- will be charged if you wish to use the binoculars or telescope to get close up view of the enthralling surroundings of Sikkim’s capital.
      </p><br />

      <ul style={{ textAlign: "left" }}>
        <li><strong>🌄 Scenic Viewpoint:</strong> Offers panoramic views of Kanchenjunga and nearby peaks.</li>
        <li><strong>🌅 Sunrise & Sunset:</strong> A perfect spot for witnessing magical Himalayan sunrises and sunsets.</li>
        <li><strong>🔭 Telescopes Available:</strong> Provides closer views of distant mountains.</li>
        <li><strong>🍵 Refreshments:</strong> Small tea stalls and a cafeteria nearby.</li>
        <li><strong>🛤️ Short Trek:</strong> Can be reached with a short scenic hike or drive.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Tashi View Point, Gangtok, Sikkim 737103, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> Open 24 hours  
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
            <td>Tashi View Point → MG Marg</td>
            <td>7.0 km</td>
            <td>-</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>Tashi View Point → Ganesh Tok</td>
            <td>5.5 km</td>
            <td>-</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Tashi View Point → Do Drul Chorten</td>
            <td>8.0 km</td>
            <td>-</td>
            <td>25 min</td>
          </tr>
          <tr>
            <td>Tashi View Point → Namgyal Institute of Tibetology</td>
            <td>9.0 km</td>
            <td>-</td>
            <td>30 min</td>
          </tr>
          <tr>
            <td>Tashi View Point → Bakthang Waterfall</td>
            <td>3.5 km</td>
            <td>45 min</td>
            <td>12 min</td>
          </tr>
          <tr>
            <td>Tashi View Point → Enchey Monastery</td>
            <td>4.5 km</td>
            <td>50 min</td>
            <td>14 min</td>
          </tr>
          <tr><td>Tashi View Point → Mayfair Spa & Resort</td>
            <td>15 km</td>
            <td>-</td>
            <td>35 min</td>
          </tr>
          <tr>
            <td>Tashi View Point → Rumtek Monastery</td>
            <td>24 km</td>
            <td>-</td>
            <td>55 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Tashi View Point Sikkim Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.636444789984!2d88.61124867513467!3d27.338898878106023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a55b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sTashi%20View%20Point!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button */}
      <button 
        onClick={() => onBack("SikkimL1")} 
        style={{
          padding: "10px 20px", 
          fontSize: "16px", 
          backgroundColor: "#003366",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          display: "flex",
          marginLeft: "10px",
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#0055aa"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#003366"}
      >
        Previous
      </button>
    </div>
  );
};

export default TashiViewPoint;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const DamnoenSaduak = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#FF5733", fontSize: "3rem" }}>
        Damnoen Saduak Floating Market
      </h1>
      <br />

      {/* Image */}
      <img
        src="https://waybird.imgix.net/experiences/kodak_images/000/011/789/original/Bangkok-Thailand-Timbuktu-2.jpg?w=1420&h=946&crop=center%20center&fit=min&dpr=1&q=50&auto=format"
        alt="Damnoen Saduak Floating Market"
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      {/* Description Section */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🚣 About Damnoen Saduak Floating Market</h2>
      <br />
      <p>
      Visit one of Thailand’s largest and most famous floating markets, where vendors on boats sell local food and unique pieces—from kitchenware to clothing. Try the warm coconut pancakes, pad thai, boat noodles, and classic mango sticky rice as you float along the slender canals. You can find fresh fruits and vegetables here too. Do not forget to see the traditional wooden houses on stilts along the way. Seasoned travelers would suggest an early morning start to combat the heat and beat the crowd. Join a half-day tour on a long-tail speedboat or a paddle boat to explore the market.
      </p>
      <br />

      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🌟 Why Visit Damnoen Saduak?</h2>
      <br />
      <p>
      Visit Damnoen Saduak in Bangkok to experience a traditional Thai floating market where vendors sell fresh produce, street food, and local goods directly from boats on a network of canals, offering a unique way to shop and sample authentic Thai cuisine while cruising through the waterways on a long-tail boat; it is considered one of the most popular floating markets in Thailand, providing a glimpse into the local lifestyle and a vibrant atmosphere. 
Local handicrafts and produce: Browse through locally made goods, fresh vegetables, and fruits. 
Traditional Thai atmosphere: Immerse yourself in the authentic Thai culture by observing the traditional attire of vendors and the unique canal lifestyle. 
Scenic views: Enjoy the picturesque scenery of the canals lined with stilt houses and lush greenery. 
      </p>
      <br />

      <ul style={{ textAlign: "left" }}>
        <li>
          <strong>🚤 Authentic Thai Floating Market:</strong> Explore the market by boat, where vendors sell directly from their vessels, offering a unique shopping experience. 
        </li>
        <li>
          <strong>🍍 Fresh Fruits & Street Food:</strong> Sample a wide range of delicious Thai street food, including boat noodles, pad thai, fresh fruits, and coconut drinks. 
        </li>
        <li>
          <strong>📸 Perfect for Photography:</strong> Capture the vibrant market scenes.
        </li>
        <li>
          <strong>🛶 Traditional Boat Rides:</strong> Ride through the bustling canals.
        </li>
        <li>
          <strong>🎭 Unique Shopping Experience:</strong> Buy handicrafts, souvenirs, and Thai silk.
        </li>
      </ul>
      <br />

      {/* Location & Distances */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>📍 Location & Nearby Distances</h2>
      <br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Damnoen Saduak, Ratchaburi Province, Thailand
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Opening Hours:</strong> 7:00 AM - 5:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>💰 Entry Fee:</strong> Free (but boat rides cost around 200-500 THB)  
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
            <td>Damnoen Saduak → Chinatown</td>
            <td>95 km</td>
            <td>1 hr 30 min</td>
          </tr>
          <tr>
            <td>Damnoen Saduak → MBK Shopping Mall</td>
            <td>100 km</td>
            <td>1 hr 40 min</td>
          </tr>
          <tr>
            <td>Damnoen Saduak → Jim Thompson House</td>
            <td>102 km</td>
            <td>1 hr 45 min</td>
          </tr>
          <tr>
            <td>Damnoen Saduak → Asiatique The Riverfront</td>
            <td>105 km</td>
            <td>1 hr 50 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🗺️ Location on Map</h2>
      <br />
      <iframe
        title="Damnoen Saduak Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.775049345824!2d99.97867331483742!3d13.52683149048979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2f7c3c3c3c3c3%3A0xa6f8a6b8b8b8b8b8!2sDamnoen%20Saduak%20Floating%20Market!5e0!3m2!1sen!2sth!4v1712807896543"
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

export default DamnoenSaduak;

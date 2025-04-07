/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TheGreatKababFactory = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>The Great Kabab Factory</h1><br />
      
      {/* Image */}
      <img 
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f7/4a/64/img-20191205-094745-largejpg.jpg?w=400&h=300&s=1"
        alt="The Great Kabab Factory" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🍢 About</h2><br />
      <p>
      At the famous Radisson Hotel Varanasi, you can step into the Great Kabab Factory that is a part of the signature chain of restaurants that is popular all over India. At the Great Kabab Factory, you will find an expansive kabab menu. There are enough options to choose from for both vegetarians and non-vegetarians. Kababs are an important part of the eastern and middle-eastern palate, and the Great Kabab Factory gives a perfect selection of the best types of Kababs. In the vegetarian selection, you will find six different types of kababs. The Great Kabab Factory typically uses regional ingredients that are available locally which adds to the authenticity of the dining experience. You can also gorge on special Indian bread such as Naans and rotis that you can devour with hot dals or curries. End your meal with some delicious Indian desserts.
      </p><br />

      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏛️ Highlights</h2><br />
      <ul style={{ textAlign: "left" }}>
        <li><strong>🔥 Signature Kababs:</strong> A wide variety of vegetarian and non-vegetarian kababs.</li>
        <li><strong>🍛 Unlimited Meals:</strong> Fixed menu with unlimited servings.</li>
        <li><strong>🎵 Live Music:</strong> Enhancing the dining experience.</li>
        <li><strong>🍽️ Luxurious Ambience:</strong> Elegant interior with a fine-dining experience.</li>
      </ul><br />

      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Radisson Hotel, The Great Kabab Factory, Varanasi, Uttar Pradesh, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 7:00 PM – 11:00 PM (Dinner Only)
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Average Cost:</strong> ₹1500 for two people (approx.)
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
            <td>The Great Kabab Factory → Sarnath</td>
            <td>10 km</td>
            <td>-</td>
            <td>30–45 min</td>
          </tr>
          <tr>
            <td>The Great Kabab Factory → Boat Ride on the Ganges</td>
            <td>5 km</td>
            <td>-</td>
            <td>15–20 min</td>
          </tr>
          <tr>
            <td>The Great Kabab Factory → Heritage Haveli</td>
            <td>2 km</td>
            <td>25 min</td>
            <td>7 min</td>
          </tr>
          <tr>
            <td>The Great Kabab Factory → Tandoor Villa</td>
            <td>0.8 km</td>
            <td>10 min</td>
            <td>5 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="The Great Kabab Factory Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.936730446244!2d83.00578317511624!3d25.317645927444448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31d8a833b8e1%3A0xabc123d4b5e8e987!2sThe%20Great%20Kabab%20Factory!5e0!3m2!1sen!2sin!4v1712807896543"
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

export default TheGreatKababFactory;

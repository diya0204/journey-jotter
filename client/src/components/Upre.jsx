/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const Upre = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Upré</h1><br />
      <img 
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/1a/72/a7/upper-deck.jpg?w=900&h=500&s=1" 
        alt="Upré" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🍽️ About Upré</h2><br />
      <p>
      The UPRE Restaurant with spectacular views of the City Palace and Lake Pichola offers fine international cuisine and authentic flavors of Rajasthan. Dinning in these private terraces captures your mood and takes you on a special journey. THE BAR serves all kind of beverages and a selection of light snacks.
      </p><br />

      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌟 Highlights</h2><br />
      <ul style={{ textAlign: "left" }}>
        <li><strong>🏞️ Stunning Lake Views:</strong> Overlooks Lake Pichola with an unbeatable sunset view.</li>
        <li><strong>🌆 Rooftop Dining:</strong> A perfect blend of luxury and comfort under the open sky.</li>
        <li><strong>🍛 Authentic Rajasthani & Mughlai Cuisine:</strong> Serves Dal Baati Churma, Laal Maas, and more.</li>
        <li><strong>🎵 Live Music:</strong> Enjoy soft instrumental tunes enhancing the serene dining experience.</li>
        <li><strong>🍷 Bar & Fine Dining:</strong> Offers an extensive collection of wines, cocktails, and mocktails.</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Timings</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Upré by 1559 AD, Pichola, Udaipur, Rajasthan, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 4:00 PM – 11:00 PM (Daily)
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>📞 Contact:</strong> +91 98294 15559
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
            <td>Upré → Bagore Ki Haveli</td>
            <td>0.5 km</td>
            <td>7 min</td>
            <td>3 min</td>
          </tr>
          <tr>
            <td>Upré → Fateh Sagar Lake</td>
            <td>3.5 km</td>
            <td>45 min</td>
            <td>12 min</td>
          </tr>
          <tr>
            <td>Upré → Saheliyon Ki Bari</td>
            <td>3.4 km</td>
            <td>40 min</td>
            <td>11 min</td>
          </tr>
          <tr>
            <td>Upré → Bhartiya Lok Kala Museum</td>
            <td>3.2 km</td>
            <td>38 min</td>
            <td>10 min</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Upré Udaipur Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.234057786725!2d73.68087187513621!3d24.590005678108215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5b4b4b5f669%3A0x8c7d11c2b8f31fd1!2sUpré%20by%201559%20AD!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>
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
export default Upre;
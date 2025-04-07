/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const BapuBazaar = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Bapu Bazaar</h1><br />
      <img 
        src="https://c.myholidays.com/blog/2024/1/81130_ShoppinginUdaipur_-ezgif.com-jpg-to-webp-converter.webp" 
        alt="Bapu Bazaar Udaipur" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History</h2><br />
      <p>
      Bapu Bazar in Jaipur was founded in the mid-20th century. 
It was a marketplace for local artisans and craftsmen to sell their products. 
It became a popular shopping destination because of its location in the old city area. 
It is known for its leather products, mojri shoes, handicrafts, fragrance, and sandstone artifacts. 
It is a lively market with many stores selling clothing, shoes, sarees, and more. 
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🛒 Things to Buy at Bapu Bazaar</h2><br />
      <p>Bapu Bazaar Shopping Street is a vibrant hub of activity situated in the heart of Udaipur Old City. This bustling market is renowned for its colorful stalls and a vast array of goods, ranging from traditional handicrafts and textiles to exquisite jewelry and spices. The market serves as a window into the rich cultural tapestry of Rajasthan, inviting tourists to explore its enchanting offerings. As you navigate through the narrow lanes, you will encounter friendly local vendors eager to showcase their craftsmanship and share the stories behind their products. Here, you can find beautifully woven fabrics, intricate wooden carvings, and hand-painted pottery that reflect the artistic heritage of the region.
The atmosphere in Bapu Bazaar is electric, with the sounds of bargaining and laughter filling the air. It is the perfect place to immerse yourself in the local culture, as you mingle with both locals and fellow travelers. Be sure to sample some traditional Rajasthani snacks available from street vendors, which provide a delightful taste of the culinary offerings of region. As you shop, keep an eye out for unique souvenirs that will remind you of your time in Udaipur.
The market is open throughout the week, with extended hours on weekdays, making it convenient for visitors to explore at their leisure. Whether you are seeking to indulge in retail therapy or simply wishing to soak in the vibrant ambiance, Bapu Bazaar Shopping Street is an essential stop on your Udaipur itinerary, promising a memorable experience filled with color, culture, and creativity.</p><br></br>
      <ul style={{ textAlign: "left" }}>
        <li><strong>👗 Rajasthani Clothing:</strong> Traditional Bandhani sarees, lehengas, and embroidered kurtas.</li>
        <li><strong>💍 Jewelry & Accessories:</strong> Exquisite Kundan, Meenakari, and silver jewelry.</li>
        <li><strong>👜 Handicrafts & Souvenirs:</strong> Wooden carvings, miniature paintings, and marble sculptures.</li>
        <li><strong>👞 Leather Goods:</strong> Authentic camel leather bags, wallets, and footwear.</li>
        <li><strong>📚 Books & Stationery:</strong> The market has a variety of local and international books.</li>
        <li><strong>🌶️ Spices & Dry Fruits:</strong> Authentic Rajasthani spices and sweets.</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Bapu Bazaar, Ashwini Bazar Rd, Udaipur, Rajasthan 313001, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 10:00 AM – 8:00 PM (Closed on Sundays)  
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
            <td>Bapu Bazaar → Eklingji Temple</td>
            <td>21 km</td>
            <td>-</td>
            <td>35 min</td>
          </tr>
          <tr>
            <td>Bapu Bazaar → Ranakpur Jain Temple</td>
            <td>88 km</td>
            <td>-</td>
            <td>1 hr 50 min</td>
          </tr>
          <tr>
            <td>Bapu Bazaar → Gulab Bagh</td>
            <td>1.4 km</td>
            <td>15 min</td>
            <td>5 min</td>
          </tr>
          <tr>
            <td>Bapu Bazaar → Hathi Pol Bazaar</td>
            <td>2 km</td>
            <td>25 min</td>
            <td>7 min</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Bapu Bazaar Udaipur Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.154684786674!2d73.68224867513503!3d24.592166678106007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sBapu%20Bazaar!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>
      <button 
        onClick={() => onBack("Udaipur2")} 
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

export default BapuBazaar;

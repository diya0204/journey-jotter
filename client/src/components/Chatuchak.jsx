/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ChatuchakMarket = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#FF5733", fontSize: "3rem" }}>
        Chatuchak Weekend Market
      </h1>
      <br />

      {/* Image */}
      <img
        src="https://www.tripsavvy.com/thmb/Ol0TZtPgX64w9qzPsGtn85ChAUs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chatuchak-weekend-market-bangkok-59c809f5845b340011afb2fb.jpg"
        alt="Chatuchak Weekend Market"
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      {/* Description Section */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🛍️ About Chatuchak Weekend Market</h2>
      <br />
      <p>
      Chatuchak Weekend Market is home to a whopping 15,000 stalls spanning 26 sections and is the largest weekend market of the world. At this colossal market, scout for local delicacies, clothing, second-hand merchandise, home decor, handicrafts, antiques, and even plants. You can also enjoy a soothing Thai massage after shopping. Navigating the market can be slightly overwhelming, so snap a picture of the schematic map that shows you what you can find in each section. For a smoother experience, join a private tour to be whisked directly to the best stores to make the most of your Thai Baht. The market can be easily reached by the Skytrain.
      </p>
      <br />

      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🌟 Why Visit Chatuchak?</h2>
      <br />
      <p>One of the main reasons to visit Chatuchak Market is to shop till you drop. Chatuchak Market has something for everyone, no matter what your budget, style, or preference. Here are some of the main categories of goods available at the market, and some examples of the products, prices, and styles that you can find in each category:
Clothing and Accessories: If you are looking for fashionable and trendy items, Chatuchak Market is the place to be. You can find vintage clothes, hip-hop and skate wear, independent labels, silver jewellery, leather goods, and more. You can also get your clothes customized or tailored at some of the stalls. The prices range from 50 to 500 baht, depending on the quality and the brand.
Art and Furniture: If you are looking for creative and artistic items, Chatuchak Market is the place to be. You can find paintings, sculptures, ceramics, woodcarving, rattan, bamboo, and more. You can also admire some of the works of local and emerging artists, and support their talent and passion. The prices range from 100 to 10,000 baht, depending on the material and the design.
Books and Antiques: If you are looking for rare and valuable items, Chatuchak Market is the place to be. You can find rare books, magazines, comics, vinyl records, coins, stamps, and more. You can also browse through some of the collections of antique dealers, and discover some of the history and culture of Thailand and beyond. The prices range from 10 to 100,000 baht, depending on the age and the condition.
These are just some of the categories of goods that you can find at Chatuchak Market. There are many more, such as plants and flowers, pets and animals, electronics and gadgets, and so on. You can spend hours or even days exploring the market, and still not see everything. That’s why it is important to have a map and a plan, and to know what you are looking for and where to find it.</p><br></br>
      <ul style={{ textAlign: "left" }}>
        <li>
          <strong>🛒 Massive Shopping Destination:</strong> Over 15,000 stalls selling a wide range of goods.
        </li>
        <li>
          <strong>🍜 Street Food Paradise:</strong> Try local delicacies like coconut ice cream, grilled meat skewers, and mango sticky rice.
        </li>
        <li>
          <strong>🎨 Handicrafts & Souvenirs:</strong>If you are looking for unique and interesting items, Chatuchak Market is the place to be. You can find religious statues, musical instruments, masks, toys, candles, soap, and more. You can also watch some of the craftsmen and women at work, and learn about their skills and traditions. The prices range from 20 to 2000 baht, depending on the size and the complexity.
        </li>
        <li>
          <strong>👕 Affordable Fashion:</strong> Find trendy clothing and accessories at great prices.
        </li>
        <li>
          <strong>🌿 Plant & Pet Section:</strong> Explore exotic plants and adorable pets for sale.
        </li>
      </ul>
      <br />

      {/* Location & Distances */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>📍 Location & Nearby Distances</h2>
      <br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Chatuchak, Bangkok, Thailand
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Opening Hours:</strong> Saturday - Sunday, 9:00 AM - 6:00 PM  
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
            <td>Chatuchak → Art in Paradise</td>
            <td>7 km</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Chatuchak → Golden Mount</td>
            <td>10 km</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>Chatuchak → Lumphini Park</td>
            <td>8 km</td>
            <td>18 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🗺️ Location on Map</h2>
      <br />
      <iframe
        title="Chatuchak Market Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9205058983425!2d100.55312631483667!3d13.799132890357668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ec99c7b5dfb%3A0xa6f4b573c9a745!2sChatuchak%20Weekend%20Market!5e0!3m2!1sen!2sth!4v1712807896543"
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

export default ChatuchakMarket;
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ChinatownBangkok = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#FF5733", fontSize: "3rem" }}>
        Chinatown Bangkok
      </h1>
      <br />

      {/* Image */}
      <img
        src="https://whileyoustayhome.com/wp-content/uploads/2023/11/1-Bangkok-Chinatown-and-Portuguese-neighborhood-thailand-while-you-stay-home-75.jpg"
        alt="Chinatown Bangkok"
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      {/* Description Section */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🥢 About Chinatown Bangkok</h2>
      <br />
      <p>
      Chinatown, also known as Yaowarat, is one of Bangkok’s oldest and most colorful neighborhoods. Founded over 200 years ago, this area is home to a large Chinese community and is the epicenter of Thai-Chinese culture. The crowded streets are filled with traditional Chinese medicine shops, centuries-old temples, and a myriad of dining options ranging from street food stalls to high-end restaurants.
      </p>
      <br />

      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🌟 Why Visit Chinatown?</h2>
      <br />
      <p>The Chinatown area of Bangkok is centred around the massive neon sign lined Yaowarat Road(sometimes spelt Yarrowat). It is the area where the Chinese community first settled in the city and is full of shophouses, restaurants, gold sellers and, of course, food. Yaowarat Road and the streets around are full of businesses, and busy markets selling sandals to thermos flasks and everything in between. When the sun goes down the neon lights fire up and an army of food carts and stalls descend on the area. Yaowarat Road becomes lined with eateries and all around, the side streets become clogged with delicious smells, smoking woks and munching patrons.
We had been through Chinatown before and it is maze of streets and heavingly busy Yaowarat Road had not, so far, grabbed our hearts. We all know the quickest way to the heart is through the stomach so we thought a food tour would be the perfect way to get to know the area better and see why so many people love it!</p><br></br>
      <ul style={{ textAlign: "left" }}>
        <li>
          <strong>🍜 Street Food Paradise:</strong> Indulge in some of Bangkok’s best street food, including satay, dim sum, and seafood. 
        </li>
        <li>
          <strong>🏮 Cultural Experience:</strong> Explore Chinese temples, traditional shops, and historic streets.
        </li>
        <li>
          <strong>💎 Shopping & Gold Stores:</strong> Chinatown is famous for its gold shops and souvenir markets. 
        </li>
        <li>
          <strong>📸 Perfect for Photography:</strong> Capture the neon-lit streets and vibrant market scenes. 
        </li>
      </ul>
      <br />

      {/* Location & Distances */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>📍 Location & Nearby Distances</h2>
      <br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Yaowarat Road, Bangkok, Thailand
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Best Visiting Time:</strong> Evening & Night (for street food scene)  
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
            <td>Chinatown → MBK Shopping Mall</td>
            <td>3 km</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>Chinatown → Damnoen Saduak</td>
            <td>95 km</td>
            <td>1 hr 30 min</td>
          </tr>
          <tr>
            <td>Chinatown → Jim Thompson House</td>
            <td>4 km</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Chinatown → Asiatique The Riverfront</td>
            <td>6 km</td>
            <td>20 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🗺️ Location on Map</h2>
      <br />
      <iframe
  title="Chinatown Bangkok Location Map"
  width="100%"
  height="400"
  style={{ borderRadius: "10px", marginBottom: "20px" }}
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.335313807963!2d100.5080888153315!3d13.739294890358078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2991be67a2545%3A0x11f344b6db266c62!2sChinatown%20(Yaowarat)%20Bangkok!5e0!3m2!1sen!2sth!4v1712807896543"
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

export default ChinatownBangkok;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const JimThompsonHouse = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#FF5733", fontSize: "3rem" }}>
        Jim Thompson House
      </h1>
      <br />

      {/* Image */}
      <img
        src="https://www.bangkokinsiders.com/wp-content/uploads/2023/11/jim-thompson-house-bangkok-wohnraum.jpg"
        alt="Jim Thompson House"
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      {/* Description Section */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🏡 About Jim Thompson House</h2>
      <br />
      <p>
       Jim Thompson House is located in soi Kasemsan soi 2, Rama I road, opposite to the National Stadium. It is the Thai house of James H. W. Thompson, the American soldier who initiated Thai silk industry in Thailand. He was granted the Most Exalted Order of the White Elephant from the royal which is the only exalted order granted to foreigners who made Thailand benefit. Jim Thompson House is a Thai teakwood house which he bought from the former owner of the house. The parts of each house were delivered to the recent area. The Thai house was completely built in 1959. Since Jim Thompson loved collecting antiques, the house, which he stayed between 1947-1967, also displays his collection under Jim Thompson foundation. In front of Jim Thompson House is Jim Thompson Restaurant and wine Bar which is used to welcome guests and visitors. Inside, the room is decorated in Thai style with Thai furniture, ornamental plants and flowers including the collections of Jim Thompson. They are mainly painted potteries such as Chinese painted potteries since Song dynasty to the ones in B.E. 19. Most of them are Chinaware which were exported in Ming dynasty while some items are from Ayutthaya, which were exported to China in B.E. 15-17, Lopburi-Khmer painted potteries in Lopburi kingdom in B.E. 12, Sukhothai and Sawankalok painted potteries which were made between B.E. 18 -19, the bodies of the Buddha images in Dvarati period and giant Phra Pheang made from baked clay and colored mirror and consisted of 450 small Buddha images. Apart from theses, there are a large number of ancient paintings mainly describing about Buddhism including Phra Bot, the cloth with the picture of the Buddha, made in Rattanakosin period around B.E. 18-19. Visiting here, you will have a great chance to study Thai history from the past only from observing these priceless collections of Jim Thompson. They will remind you of the great past of Thailand.
      </p>
      <br />

      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🌟 Why Visit Jim Thompson House?</h2>
      <br />
      <p>You should visit the Jim Thompson House in Bangkok to explore the former home of an American businessman who revitalized the Thai silk industry, offering a glimpse into his intriguing life story, a unique blend of Thai and Western architecture, and a beautiful collection of Asian art within a peaceful oasis amidst the bustling city. 
Rich history: Learn about Jim Thompson, the Silk King who played a crucial role in reviving the Thai silk industry after World War II. 
Tranquil atmosphere: Escape the hustle and bustle of city in the serene gardens and traditional Thai house compound. 
Cultural insight: Gain a deeper understanding of Thai culture and traditional craftsmanship through the exhibits and guided tours. </p><br></br>
      <ul style={{ textAlign: "left" }}>
        <li>
          <strong>🎭 Thai Art & Culture:</strong>Admire a well-curated collection of Asian art, including temple wall hangings, porcelain, and other antique pieces. 
        </li>
        <li>
          <strong>🏡 Traditional Thai Architecture:</strong>Experience the unique fusion of traditional Thai design with Western elements in beautifully restored house of Thompson. 
        </li>
        <li>
          <strong>🌿 Lush Gardens:</strong> Walk through the scenic tropical gardens surrounding the house.
        </li>
        <li>
          <strong>🛍️ Silk & Handicrafts:</strong> Visit the boutique shop offering high-quality Thai silk products.
        </li>
      </ul>
      <br />

      {/* Location & Distances */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>📍 Location & Nearby Distances</h2>
      <br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Jim Thompson House, Pathumwan, Bangkok, Thailand
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Opening Hours:</strong> 10:00 AM - 6:00 PM  
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
            <td>Jim Thompson House → Chinatown</td>
            <td>4 km</td>
            <td>12 min</td>
          </tr>
          <tr>
            <td>Jim Thompson House → MBK Shopping Mall</td>
            <td>1 km</td>
            <td>5 min</td>
          </tr>
          <tr>
            <td>Jim Thompson House → Damnoen Saduak</td>
            <td>102 km</td>
            <td>1 hr 45 min</td>
          </tr>
          <tr>
            <td>Jim Thompson House → Asiatique The Riverfront</td>
            <td>8 km</td>
            <td>22 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#C70039", fontSize: "2rem" }}>🗺️ Location on Map</h2>
      <br />
      <iframe
        title="Jim Thompson House Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.472092386741!2d100.52885661533147!3d13.75155069035386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29edddfda6a67%3A0x746f5e9fd76cc4b6!2sJim%20Thompson%20House!5e0!3m2!1sen!2sth!4v1712807896543"
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

export default JimThompsonHouse;

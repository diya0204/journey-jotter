/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const AmbraiRestaurant = ({ onBack, previousPage }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Ambrai Restaurant</h1><br />
      <img 
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/e7/c5/e4/ambrai-at-sunset.jpg?w=900&h=500&s=1" 
        alt="Ambrai Restaurant" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History</h2><br />
      <p>Ambrai Restaurant in Udaipur, Rajasthan is a heritage restaurant that is been a part of the hospitality scene of city for over 25 years. The restaurant is located on the banks of Lake Pichola in the Amet Haveli hotel.
      The restaurant was renovated by Mumbai-based designer Noorein Kapoor.
        The design of the restaurant incorporates local materials and vernacular handicrafts.
        The facade features gokhras, or jharokhas, that overlook the lake.
        The design philosophy blends traditional and contemporary elements.
        The Amet Haveli was built between 1734 and 1752 by Maharana Jagat Singh Ji, the second Maharana of Udaipur.
The haveli was used by successive Maharanas as a leisure palace.
The haveli also has a Badi Mahal, or garden palace.</p><br />
        <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏛️ Description</h2><br />
      <p>Ambrai Restaurant in Udaipur, Rajasthan is a popular restaurant with a romantic setting and views of Lake Pichola and City Palace. It serves North Indian, Mughlai, Continental, and Chinese food.</p><br></br>
      <ul style={{ textAlign: "left" }}>
        <li><strong>🍽️ Fine Dining Experience:</strong> Offers a luxurious lakeside dining experience, perfect for romantic dinners and family gatherings.</li>
        <li><strong>🌅 Stunning Lake Pichola Views:</strong> Located right on the banks of Lake Pichola, providing breathtaking sunset views.</li>
        <li><strong>🏰 View of City Palace & Lake Palace:</strong> Guests can enjoy stunning night views of the illuminated City Palace and Lake Palace.</li>
        <li><strong>🎶 Live Music & Cultural Performances:</strong> Frequently hosts live Rajasthani folk music, adding a traditional touch to the evening.</li>
        <li><strong>🍛 Authentic Rajasthani Cuisine:</strong> Specializes in Laal Maas, Dal Baati Churma, Gatta Curry, and Ker Sangri.</li>
        <li><strong>🥂 Wine & Signature Cocktails:</strong> Offers an exclusive selection of wines and handcrafted cocktails.</li>
        <li><strong>🌟 Candlelight Dinner Setup:</strong> Features candlelit dining arrangements, making it **one of the most romantic places in Udaipur.</li>
        <li><strong>🌳 Open-Air Garden Seating:</strong> Spacious outdoor seating with lush green gardens, ensuring a peaceful dining experience.</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Amet Haveli, Ambrai Ghat, Chandpole, Udaipur, Rajasthan 313001, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 7:00 AM – 10:30 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Average Cost:</strong> ₹1500–₹2500 for two people  
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
        <tr><td>Ambrai Restaurant → Taj Lake Palace</td><td>0.60 km</td><td>7 min</td><td>3 min</td></tr>
    <tr><td>Ambrai Restaurant → The Leela Palace</td><td>0.50 km</td><td>6 min</td><td>2 min</td></tr>
    <tr><td>Ambrai Restaurant → Jag Mandir</td><td>1.50 km</td><td>18 min</td><td>6 min (by boat)</td></tr>
    <tr><td>Ambrai Restaurant → City Palace</td><td>0.39 km</td><td>5 min</td><td>2 min</td></tr>
    <tr><td>Ambrai Restaurant → Lake Pichola</td><td>0.50 km</td><td>6 min</td><td>2 min</td></tr>
    <tr><td>Ambrai Restaurant → Monsoon Palace</td><td>4.60 km</td><td>-</td><td>18 min</td></tr>
    <tr><td>Ambrai Restaurant → Jagdish Temple</td><td>0.55 km</td><td>7 min</td><td>3 min</td></tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Ambrai Restaurant Udaipur Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.924537582221!2d73.6788419751343!3d24.57649997810636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5c5bf64091b%3A0xc4e5f6529fbf5b4e!2sAmbrai%20Restaurant!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button with Hover Effect */}
      <button 
        onClick={() => onBack(previousPage)} 
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

export default AmbraiRestaurant;

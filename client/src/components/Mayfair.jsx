/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const MayfairSpaResort = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Mayfair Spa & Resort</h1><br />
      
      {/* Image */}
      <img 
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/209361588.jpg?k=5cfea2de14746d0177c2e9a0f380c8d0b1f90d7431e3a79942f9f89f6afe8139&o=&hp=1" 
        alt="Mayfair Spa & Resort Sikkim" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏨 About Mayfair Spa & Resort</h2><br />
      <p>
      MAYFAIR Spa Resort & Casino Gangtok is one of the best luxury resorts in India. The property is spread across a stunning 48 acres of beautiful forested land. Wonderful ambiance, attentive service and world class amenities are what make Mayfair Spa Resort & Casino the best hotel in Gangtok and amongst the best hotels in Sikkim. Luxury accommodation is available here in various categories from lavish villas to spacious family rooms to well-appointed rooms. With lovely views and an unbeatable ambiance, MAYFAIR Spa Resort & Casino, Gangtok is truly one of the best honeymoon hotels in India. It is also one of the only casino hotels in India offering not just exciting casino games but also oodles of entertainment. After a long exciting day of exploring Gangtok and surrounding areas, guests can wind up by pampering yourself at the Spa with holistic treatments in a tranquil environment. The world class facilities include a well-equipped health club, the best restaurants in Gangtok, multiple event venues, a gorgeous swimming pool and a games area for children.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌟 Why Visit Mayfair Spa & Resort?</h2><br />
      <p>
      The resort blends opulence with nature, offering stunning Himalayan views, lavish accommodations, and rejuvenating spa treatments. It is a perfect getaway for relaxation and leisure.
      </p><br />

      <ul style={{ textAlign: "left" }}>
        <li><strong>🌄 Luxurious Stay:</strong> World-class rooms and suites with premium amenities.</li>
        <li><strong>💆‍♂️ Spa & Wellness:</strong> Rejuvenating therapies at the award-winning spa.</li>
        <li><strong>🍽️ Fine Dining:</strong> Multiple restaurants serving delicious cuisine.</li>
        <li><strong>🏊 Recreational Facilities:</strong> Swimming pool, fitness center, and more.</li>
        <li><strong>📍 Prime Location:</strong> Close to major tourist attractions.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Mayfair Spa & Resort, Ranipool, Gangtok, Sikkim, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Check-in:</strong> 2:00 PM | <strong>Check-out:</strong> 12:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Price Range:</strong> ₹10,000 - ₹25,000 per night  
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
            <td>Mayfair Spa & Resort → Rumtek Monastery</td>
            <td>10 km</td>
            <td>-</td>
            <td>25 min</td>
          </tr>
          <tr>
            <td>Mayfair Spa & Resort → Tashi View Point</td>
            <td>15 km</td>
            <td>-</td>
            <td>35 min</td>
          </tr>
          <tr>
            <td>Mayfair Spa & Resort → MG Marg</td>
            <td>8 km</td>
            <td>-</td>
            <td>20 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Mayfair Spa & Resort Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.626544789984!2d88.61324867513467!3d27.337898878106023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a55b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sMayfair%20Spa%20%26%20Resort!5e0!3m2!1sen!2sin!4v1712807896543"
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
          marginLeft: "10px"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#0055aa"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#003366"}
      >
        Previous
      </button>
    </div>
  );
};

export default MayfairSpaResort;

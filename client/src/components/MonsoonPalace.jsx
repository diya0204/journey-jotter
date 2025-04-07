/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const MonsoonPalace = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Monsoon Palace (Sajjangarh)</h1><br />
      <img 
        src="https://live.staticflickr.com/65535/52982752746_7066af6ef7_b.jpg" 
        alt="Monsoon Palace Udaipur" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History</h2><br />
      <p>
      The history of the palace reflects the history of the Mewar kingdom. Maharana Sajjan Singh,(b. 18 July 1859 d. 23 December 1884), the initial builder of the Monsoon Palace was the seventy–second ruler of the Mewar dynasty(1874–1884) and ruled from Udaipur for a short period of 10 years until his untimely death. The Mewar dynasty traces its history to Guhil, who founded the Mewar State in 568 AD. Sajjan Singh came to the throne when he was 15 years old. However, his uncle Sohan Singh challenged his right to the crown and even plotted through astrologers, who said the timing for the coronation was not appropriate. Fortunately for him the then British agent, who was in favour of Sajjan Singh, intervened and persuaded the astrologers to give a favourable date for the crowning. The eventual Coronation of Sajjan Singh took place two years after this. As the trouble-maker uncle was still persisting with his obstructions towards the newly crowned Maharana, his property was confiscated and he was eventually imprisoned.<br></br><br></br>
After he was invested in 1876 as Maharana, he was considered an enlightened ruler and a man of vision, he launched a massive programme of developmental activities in his kingdom, in particular, enlarging infrastructure facilities such as roads, water supply and other civil works. He also introduced civil administration and courts. He also improved the general environment of Udaipur by afforestation and lake improvements. He had Lake Pichola desilted and the masonry dam re-built to improve storage capacity, as well as preserving the historical heritage in line with his personal interest in the arts and culture. The most ambitious project he undertook was building the Sajjan Garh Palace, or the Monsoon Palace, as a western backdrop to Udaipur city.
It was during the rule of Sajjan Singh that Udaipur gained recognition as the second Municipality in India, after Bombay. In recognition of his outstanding achievements in preserving and developing the Mewar kingdom, and to remind him that his was a princely state under the British Raj, he was conferred the title of Grand Commander of the Star of India in November 1881 by Lord Ripon, on the occasion of Queen Victoria crowning as the Empress of India.
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏰 Description</h2><br />
      <p>
      Named after Maharana Sajjan Singh, the Monsoon Palace is also known as Sajjan Garh Palace. Posted at the top of a hill, the Monsoon Palace was originally built to overlook Maharana Sajjan Singh’s hometown, Chittorgarh. The Monsoon Palace offers a panoramic view of Udaipur which had risen to prominence under the rule of Maharana Sajjan Singh. The palace was planned to be a 9 storied astronomical observatory which would record the arrival of monsoons by keeping track of the monsoon clouds. Unfortunately due to the untimely death of Maharana Sajjan Singh, the plan of construction was shifted over to his successor Maharana Fateh Singh. He constructed a lake which he named Fateh Sagar Lake, which could be viewed directly from the palace. The royal family used the palace as a hunting lodge too. The palace has been built keeping in mind the Rajput architectural style.
      </p><br></br>
      <ul style={{ textAlign: "left" }}>
        <li><strong>🌧️ Monsoon Observatory:</strong> Designed to track monsoon clouds, offering spectacular rain-laden skyline views.</li>
        <li><strong>🌅 Sunset Point:</strong> One of Udaipur’s top sunset spots, attracting tourists and photographers.</li>
        <li><strong>🐾 Sajjangarh Wildlife Sanctuary:</strong> The palace is surrounded by a protected wildlife sanctuary** with **deer, wild boars, and peacocks.</li>
        <li><strong>🏛️ White Marble Architecture:</strong> The intricately carved domes, jharokhas(balconies), and fountains make it a visual delight.</li>
        <li><strong>🎥 Bollywood & Hollywood Fame:</strong> Featured in the James Bond film Octopussy.</li>
        <li><strong>✨ Night Illumination:</strong> The palace is beautifully lit at night, making it visible from all parts of Udaipur.</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Sajjangarh Palace Rd, Udaipur, Rajasthan 313001, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 8:00 AM – 6:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> ₹10 (Indians), ₹80 (Foreigners), ₹20 (Vehicle Entry)  
      </p><br />

      {/* Distances to Other Attractions */}
      <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "center", borderCollapse: "collapse", marginBottom: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#3498DB", color: "white" }}>
            <th>From → To</th>
            <th>Distance (km)</th>
            <th>Driving Time</th>
          </tr>
        </thead>
        <tbody>
        <tr><td>Monsoon Palace → Taj Lake Palace</td><td>6.5 km</td><td>22 min</td></tr>
    <tr><td>Monsoon Palace → The Leela Palace</td><td>7.0 km</td><td>23 min</td></tr>
    <tr><td>Monsoon Palace → Jag Mandir</td><td>7.8 km</td><td>26 min</td></tr>
    <tr><td>Monsoon Palace → City Palace</td><td>5.8 km</td><td>20 min</td></tr>
    <tr><td>Monsoon Palace → Ambrai Restaurant</td><td>6.2 km</td><td>21 min</td></tr>
    <tr><td>Monsoon Palace → Lake Pichola</td><td>5.5 km</td><td>19 min</td></tr>
    <tr><td>Monsoon Palace → Fateh Sagar Lake</td><td>8.0 km</td><td>27 min</td></tr>
    <tr><td>Monsoon Palace → Saheliyon Ki Bari</td><td>8.5 km</td><td>28 min</td></tr>
    <tr><td>Monsoon Palace → Shri Shiv Shakti Sweets & Restaurant</td><td>6.3 km</td><td>22 min</td></tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Monsoon Palace Udaipur Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.523152889993!2d73.66017667513465!3d24.59332817810607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5a6a9a9eaf9%3A0x7f839d6dbe7d3b67!2sMonsoon%20Palace%20Sajjan%20Garh!5e0!3m2!1sen!2sin!4v1712807896543"        allowFullScreen
      ></iframe>

      {/* Back Button with Hover Effect */}
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

export default MonsoonPalace;

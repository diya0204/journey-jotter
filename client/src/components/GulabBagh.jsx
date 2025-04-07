/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const GulabBagh = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Gulab Bagh & Zoo</h1><br />
      <img 
        src="https://udaipurtourism.co.in/images/places-to-visit/headers/gulab-bagh-and-zoo-udaipur-tourism-vintage-car-museum-udaipur-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg" 
        alt="Gulab Bagh Udaipur" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History</h2><br />
      <p>
        Gulab Bagh was built by Maharana Sajjan Singh in 1881. T.H. Story was appointed in 1882 to stock the garden with plants with medicinal values on the 66.5 acres of land and worked there till 1920. Maharana Sajjan Singh placed the foundation stone of the Victoria museum(now called Saraswati Bhawan Library) in the garden on 2 November 1890. It was inaugurated by Lord Lansdown. British Prince Albert Victor unveiled a stone statue of Queen Victoria on 19 February 1890, in front of Victoria Museum which has now been replaced with a statue of Mahatma Gandhi. Various Flower and Vegetable shows were organized in the Garden starting from the first one in 1888 by Maharana Fateh Singh. Earlier the zoo organized fights between lions or tigers and wild boars for the entertainment of royal families. The garden was also called Bada Bagh but the name-dropped has out of popular use.
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌳 Attractions at Gulab Bagh</h2><br />
      <ul style={{ textAlign: "left" }}>
        <li><strong>🌹 Rose Garden:</strong> The garden boasts rare species of roses, making it a floral paradise.</li>
        <li><strong>🦁 Gulab Bagh Zoo:</strong> A zoo is situated within the garden, at a short walk away through rose plants and open parks. The zoo, as such, is quite small. Animals and birds of many varieties are housed in cages. But there is enough enjoyment for the kids who can be seen craning their necks to get a glimpse of the tiger or the bear.</li>
        <li><strong>🚂 Toy Train:</strong>There is also a small train that meanders within the zoo. It is open for kids as well as adults, and there is a nominal fees for the ride. The train station is named as Luv Kush Railway Station.</li>
        <li><strong>🕌 Kamal Talai:</strong>There is a huge artificial water body named as Kamal Talai, situated towards north-eastern end of Gulab Bagh. It is an oval-like structure, consisting of four bridges connecting with each other at the central junction.</li>
        <li><strong>🏛️ Victoria Hall Museum:</strong> A historical museum with royal artifacts and paintings.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Gulab Bagh, Lake Palace Road, Udaipur, Rajasthan 313001, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 8:00 AM – 6:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> ₹25 (Garden), ₹5 (Library), ₹20 (Toy Train)  
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
          <tr>
            <td>Gulab Bagh → Eklingji Temple</td>
            <td>22 km</td>
            <td>-</td>
            <td>40 min</td>
          </tr>
          <tr>
            <td>Gulab Bagh → Bapu Bazaar</td>
            <td>1.4 km</td>
            <td>15 min</td>
            <td>5 min</td>
          </tr>
          <tr>
            <td>Gulab Bagh → Ranakpur Jain Temple</td>
            <td>90 km</td>
            <td>-</td>
            <td>2 hrs</td>
          </tr>
          <tr>
            <td>Gulab Bagh → Hathi Pol Bazaar</td>
            <td>2.5 km</td>
            <td>30 min</td>
            <td>7 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Gulab Bagh Udaipur Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.154684786674!2d73.68224867513503!3d24.592166678106007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sGulab%20Bagh!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
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

export default GulabBagh;

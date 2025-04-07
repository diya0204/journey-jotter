/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const BanjhakriFalls = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Banjhakri Falls</h1><br />
      
      {/* Image */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Ban_Jhakri_Falls_-_Gangtok.jpg" 
        alt="Banjhakri Falls Sikkim" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌊 About Banjhakri Falls</h2><br />
      <p>
      Banjhakri Falls is a 30-metre-high waterfall situated in Gangtok, Sikkim and it is developed in a two-acre theme park which was initiated by the Chief Minister Mr. Pawan Kumar Chamling. Established on a now deforested area of Sikkim, the park commemorates the culture of shamanism of the region. They include a man-made lake with a dragon, some over-damped gazebos, and sculptures of jhākri and Kirati forefathers. Artistic representations in the form of statues of different shamanistic characters are stored in wooden houses with thatched roofs.
The garden consists of lawns, shrubs, trees, flowers, walkways of concrete, chips, and gravel as well as mini bridges. One of the halls of the museum which has been arranged with the collaboration of SREDA presents renewable energy, which includes solar energy. The idea of the park is to remind people of the folk legends and beliefs while at the same time introducing them to the concepts of sustainable energy.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌟 Why Visit Banjhakri Falls?</h2><br />
      <p>
      You should visit Banjhakri Falls in Sikkim because it is a beautiful waterfall situated in a well-developed park with lush greenery, offering a unique blend of nature and local Sikkimese culture, including elements of shamanism, making it a great spot for sightseeing, photography, and leisurely walks, all conveniently located near Gangtok city; plus, the park provides additional attractions like adventure activities and cafes for a complete experience. 
      Key reasons to visit Banjhakri Falls:
      Natural Beauty: The stunning waterfall itself, surrounded by dense forest, provides a picturesque setting. 
Cultural Significance: The park incorporates elements of Sikkimese shamanism with statues and installations related to the Jhakri tradition. 
Adventure Activities: Options for ziplining, rope walking, and other adventure activities are available within the park. 
Family-Friendly: Well-maintained pathways, picnic spots, and a serene atmosphere make it a great place for families. 
Accessibility: Located close to Gangtok, making it easily accessible during a Sikkim trip. 
Photo Opportunities: The scenic views around the waterfall and within the park provide excellent photo spots. 
      </p><br />

      <ul style={{ textAlign: "left" }}>
        <li><strong>💦 Scenic Waterfall:</strong> A stunning 100-ft high cascade amidst lush greenery.</li>
        <li><strong>🗿 Cultural Park:</strong> Showcases statues and exhibits about Sikkimese shamanistic traditions.</li>
        <li><strong>🌲 Picnic Spot:</strong> Ideal for families and nature lovers.</li>
        <li><strong>📷 Photography Paradise:</strong> Beautiful landscape and cultural elements make it a great photography spot.</li>
        <li><strong>🛶 Recreational Activities:</strong> Boating and adventure elements available in the park.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Banjhakri Falls, Gangtok, Sikkim, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 8:00 AM – 6:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> ₹50 per person  
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
            <td>Banjhakri Falls → Ranka Monastery</td>
            <td>7 km</td>
            <td>-</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>Banjhakri Falls → Rumtek Monastery</td>
            <td>14 km</td>
            <td>-</td>
            <td>35 min</td>
          </tr>
          <tr>
            <td>Banjhakri Falls → Hanuman Tok</td>
            <td>12 km</td>
            <td>-</td>
            <td>30 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Banjhakri Falls Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.626544789984!2d88.61324867513467!3d27.337898878106023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a55b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sBanjhakri%20Falls!5e0!3m2!1sen!2sin!4v1712807896543"
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

export default BanjhakriFalls;

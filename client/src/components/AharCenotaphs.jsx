/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const AharCenotaphs = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Ahar Cenotaphs</h1><br />
      
      {/* Image */}
      <img 
        src="https://images.locationscout.net/2020/06/ahar-cenotaphs-udaipur-india-6ewe.webp?h=1400&q=80x" 
        alt="Ahar Cenotaphs Udaipur" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History</h2><br />
      <p>
      Ahar Cenotaphs, commonly known as the royal cremation ground is a legacy of the Mewar Kingdom built over 400 years ago. There are about nineteen rulers of the Mewar dynasty cremated in this glorious ground.
The last cenotaph was constructed for the cremation of Maharana Bhagwat Singh in 2004. The Ahar Cenotaphs has always attracted tourists, and it has been part of some of the Hollywood movies.
In the 1990s, an initiative to restore the legacy of the ancestors of Mewar dynasty was started by Arvind Singh Mewar. He carried out programs to reinstate its past glory. In this process, he got a museum constructed in the compound presently known as the Ahar Archaeological museum. The Ahar Archaeological Museum is home to artifacts coming from the 10th century.
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏛️ Description</h2><br />
      <p>
      With traces of human habitation stretching back over 4,000 years to the Chalcolithic era, the town of Ahar has been a significant archaeological site for a long time. The majority of the noteworthy structures were built between the 15th and 19th centuries. However, the cenotaphs themselves are rather old as they belong to the 10th century, according to modern carbon dating methods. As the royal burial place of the Mewar monarchs, starting with Maharana Amar Singh I in 1620, the location garnered popularity and with the construction of more than 250 cenotaphs since then, Ahar has become an important historical and cultural monument in Rajasthan. The last cenotaph was constructed for the cremation of Maharana Bhagwat Singh in 2004.
In the 1990s, an initiative to restore the legacy of the ancestors of the Mewar dynasty was started by Arvind Singh Mewar, one of the few descendants of the Mewar Dynasty. He implemented plans to restore its former splendour. During this procedure, he obtained the construction of a museum at the current Ahar Archaeological Museum complex. A plethora of rare Tenth-century artefacts relating to the Mewar Dynasty may be found at the Ahar Archaeological Museum. In recent years, efforts have been made to preserve and promote the Ahar Cenotaphs as a tourist destination. The Archaeological Survey of India(ASI) and local authorities have taken steps to maintain the site and provide facilities for visitors. Tourists visiting Ahar can explore the serene and majestic cenotaphs, gaining an appreciation for the artistry and historical importance of these monuments. The site is also a popular spot for photographers and history enthusiasts.
      </p><br />

      <ul style={{ textAlign: "left" }}>
        <li><strong>🏛️ 372 Cenotaphs:</strong> Built in memory of great rulers of Mewar.</li>
        <li><strong>⏳ Over 350 Years Old:</strong> Historical burial site from the 17th century.</li>
        <li><strong>⚜️ Rajput Architecture:</strong> Features domes, jharokhas, and intricate marble carvings.</li>
        <li><strong>📷 Photography Paradise:</strong> Beautifully symmetrical structures make it a great spot for photographers.</li>
        <li><strong>📖 Small Museum:</strong> Displays Mewar royal artifacts, sculptures, and paintings.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Ahar Cenotaphs, Ayad, Udaipur, Rajasthan 313001, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 6:00 AM – 6:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> ₹20 (Indians), ₹50 (Foreigners)  
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
            <td>Ahar Cenotaphs → The Leela Palace</td>
            <td>5.2 km</td>
            <td>-</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Ahar Cenotaphs → Shilpgram</td>
            <td>8.0 km</td>
            <td>1 hr 50 min</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>Ahar Cenotaphs → Vintage Car Museum</td>
            <td>2.8 km</td>
            <td>35 min</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>Ahar Cenotaphs → Taj Lake Palace</td>
            <td>5.5 km</td>
            <td>1 hr 15 min</td>
            <td>16 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Ahar Cenotaphs Udaipur Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.556444789984!2d73.68824867513467!3d24.583298878106023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sAhar%20Cenotaphs!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button with Hover Effect */}
      <button 
        onClick={() => onBack("UdaipurL1")} 
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

export default AharCenotaphs;

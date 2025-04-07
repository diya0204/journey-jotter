/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const BabaMandir = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Baba Mandir</h1><br />
      
      {/* Image */}
      <img 
        src="https://www.thetourindia.com/flashphotos/photos/8b230abcafe506769b8dcf1aad1d2eb1.webp"
        alt="Baba Mandir" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History</h2><br />
      <p>
      Baba Mandir is a distinguished sightseeing place of Sikkim. This “mandir” or shrine is dedicated to “Baba” Harbhajan Singh, who was a soldier of the Indian Army. He died near the Nathula Pass in eastern Sikkim, India. Two shrines have been built to show reverence to Baba Harbhajan Singh.
      The temple was originally a small shrine built on the site of a bunker where Baba Harbhajan Singh was posted
A new, larger temple was built nearby due to growing popularity
The old temple is known as the Old Baba Mandir, and the new temple is known as the New Baba Mandir.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🙏 Significance</h2><br />
      <p>
      Baba Harbhajan Singh Mandir, also known as the Baba Mandir, is a holy shrine located in the eastern part of Sikkim, India. It is situated at an altitude of around 13,123 feet(4,000 meters) in the Nathula Pass, which is the Indo-China border.
The shrine is dedicated to Baba Harbhajan Singh, an Indian Army soldier. In 1946, he joined the Indian Army as a sepoy. The temple is considered one of the holiest shrines in Sikkim and revered by people of all religions.
He is said to have drowned in a glacier while on duty in the east Sikkim region in 1968 while attempting to guide a column of mules carrying supplies. According to legend, his soul is still alive and watches and defends this treacherous terrain.
He is also known as the ‘Hero of Nathula‘. For his bravery and heroism, he was given the Maha Vir Chakra in September 1967.
Two shrines have been built in his honour to pay respect to Baba Harbhajan Singh. The old one was constructed on the site of the bunker where Baba Harbhajan served in the Indian Army.
The new one was constructed in close proximity to Lake Changu. Due to the challenging terrain and location along the former Silk Road, tourists are only permitted to visit the New Baba Mandir, which is part of the day trip to Nathula and Changu Lake.
The New Baba Mandir also requires a PAP(Protected Area Permit), but unlike Nathula, there are no limits on the total number of passes that can be issued. Visitors from outside India, NRIs, and OCIs are not allowed into the Baba Mandir.
      </p><br />

      <ul style={{ textAlign: "left" }}>
        <li><strong>🛕 Spiritual Landmark:</strong> A tribute to the legendary Indian Army soldier.</li>
        <li><strong>🏔️ High-Altitude Shrine:</strong> Located at 13,123 feet above sea level.</li>
        <li><strong>🚶 Trekking Spot:</strong> Accessible via a scenic mountain route.</li>
        <li><strong>💖 Symbol of Faith:</strong> Indian soldiers and tourists pay their respects here.</li>
        <li><strong>🌨️ Snowy Retreat:</strong> Surrounded by snow-capped mountains during winters.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Baba Mandir, East Sikkim, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 6:00 AM – 6:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> Free  
      </p><br />

      {/* Distances Table */}
      <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "center", borderCollapse: "collapse", marginBottom: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#3498DB", color: "white" }}>
            <th>From → To</th>
            <th>Distance (km)</th>
            <th>Driving Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Baba Mandir → Tsomgo Lake</td>
            <td>16 km</td>
            <td>40 min</td>
          </tr>
          <tr>
            <td>Baba Mandir → Yak Ride</td>
            <td>14 km</td>
            <td>35 min</td>
          </tr>
          <tr>
      <td>Baba Mandir → Nathula Pass</td>
      <td>7 km</td>
      <td>-</td>
      <td>20 min</td>
    </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Baba Mandir Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.626544789984!2d88.61324867513467!3d27.337898878106023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a55b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sBaba%20Mandir!5e0!3m2!1sen!2sin!4v1712807896543"
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

export default BabaMandir;
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const WatPhoBangkok = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#B22222", fontSize: "3rem" }}>
        Wat Pho(Reclining Buddha Temple)
      </h1>
      <br />

      {/* Image */}
      <img
        src="https://image.jimcdn.com/app/cms/image/transf/dimension=1070x10000:format=jpg/path/s45f8c3db950408ef/image/ib7538b0da61ee9a2/version/1699107408/gilded-reclining-buddha-figure-in-wat-pho.jpg"
        alt="Wat Pho (Reclining Buddha Temple) Bangkok"
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      {/* Description Section */}
      <h2 style={{ color: "#D2691E", fontSize: "2rem" }}>
        🏯 About Wat Pho(Reclining Buddha Temple)
      </h2>
      <br />
      <p>
      Wat Pho was the first public university in Thailand, specialising in religion, science and literature. It is now more well-known as a centre for traditional massage and medicine. After a walk around the temple, there’s nothing quite like a relaxing foot or head and shoulder massage. If you have never tried a traditional Thai massage, Wat Pho is a good place to experience it.
It is quite different from most other forms of therapeutic massage and tends to be invigorating rather than relaxing, incorporating yoga style postures to relieve stress and improve blood circulation. This is a very popular activity at Wat Pho temple, so we recommend you pop in before your treatment to book a spot, or you might end up with a long wait.
You can find Wat Pho on Maharat Road, close to the river(within a kilometre south of the Grand Palace) in the Old Town(Rattanakosin).
      </p>
      <br />

      <h2 style={{ color: "#D2691E", fontSize: "2rem" }}>
        🌟 Why Visit Wat Pho?
      </h2>
      <br />
      <p>
      There are several features of the Wat Pho complex that make it a great tourist attraction. For one, the complex comprises four chapels which have 394 gilded Buddha images. This earned Wat Pho the title as the temple with the highest number of Buddha images. In addition, the murals covering the walkways are so well-designed that you can’t help but stop and absorb the beauty in the detail. Furthermore, the courtyard features some Chinese statues that were used in ships in the past. Even more, there is a tree in the courtyard called a Bodhi tree, which happens to be grown from the actual tree Buddha sat under during meditation. This is one of the most exciting aspects of visiting Wat Pho, especially for Buddhists.
Wat Pho also has a massage school with students who are highly skilled in Thai massages. This is because Wat Pho is also a center for the preservation of traditional Thai medicine.  You will find these massages very helpful after a long walk through the temple. They offer foot massages, as well as shoulder and head massages. With just 250 Baht, you can get a pretty good one that will perfectly round up your visit to the complex.
      </p>
      <br />

      <ul style={{ textAlign: "left" }}>
        <li>
          <strong>🗿 Reclining Buddha:</strong> A breathtaking 46-meter-long gold-plated statue.
        </li>
        <li>
          <strong>💆 Traditional Thai Massage:</strong> Experience authentic Thai massage at its birthplace.
        </li>
        <li>
          <strong>🎨 Stunning Architecture:</strong> Beautiful murals, stupas, and pavilions.
        </li>
        <li>
          <strong>📖 Rich History:</strong> One of Bangkok’s oldest temples, built in the 16th century.
        </li>
        <li>
          <strong>📸 Great Photography Spot:</strong> Perfect for capturing traditional Thai artistry.
        </li>
      </ul>
      <br />
      <h2 style={{ color: "#D2691E", fontSize: "2rem" }}>📍 Location & Nearby Distances</h2>
      <br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Wat Pho, Phra Nakhon, Bangkok, Thailand
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Opening Hours:</strong> 8:00 AM - 6:30 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> 200 THB per person  
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
          <tr style={{ backgroundColor: "#B22222", color: "white" }}>
            <th>From → To</th>
            <th>Distance (km)</th>
            <th>Walking Time</th>
            <th>Driving Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wat Pho → The Grand Palace</td>
            <td>1 km</td>
            <td>10 min</td>
            <td>5 min</td>
          </tr>
          <tr>
            <td>Wat Pho → Wat Arun(Temple of Dawn)</td>
            <td>1.2 km</td>
            <td>-</td>
            <td>7 min</td>
          </tr>
          <tr>
            <td>Wat Pho → Khao San Road</td>
            <td>2 km</td>
            <td>25 min</td>
            <td>10 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#D2691E", fontSize: "2rem" }}>🗺️ Location on Map</h2>
      <br />
      <iframe
        title="Wat Pho (Reclining Buddha Temple) Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.416401399261!2d100.492689314832!3d13.7466746903546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2991c233b3b2b%3A0x16eb4b1ec02db067!2sWat%20Pho!5e0!3m2!1sen!2sth!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button */}
      <button
        onClick={() => onBack("BangkokL1")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#8B0000",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          display: "flex",
          marginLeft: "10px"
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#A52A2A")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#8B0000")}
      >
        Previous
      </button>
    </div>
  );
};

export default WatPhoBangkok;

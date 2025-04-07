/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const WatArunBangkok = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#B8860B", fontSize: "3rem" }}>
        Wat Arun(Temple of Dawn)
      </h1>
      <br />
      <img
        src="https://www.bangkokinsiders.com/wp-content/uploads/2023/07/wat-arun-bangkok-3-1024x768.jpg"
        alt="Wat Arun (Temple of Dawn) Bangkok"
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
      <h2 style={{ color: "#DAA520", fontSize: "2rem" }}>
        🏯 History
      </h2>
      <br />
      <p>
      A Buddhist temple had existed at the site of Wat Arun since the time of the Ayutthaya Kingdom, prior to the reign of King Narai. It was then known as Wat Bang Makok which was later shortened to Wat Makok, after the village of Bang Makok in which it was built(makok is the Thai name for the Spondias pinnata plant). According to the historian Prince Damrong Rajanubhab, the temple was shown in French maps during the reign of Narai(1656–88), drew by Claude de Forbin and de Lamare.
The temple was renamed Wat Chaeng by Taksin(1767–82) when he established his new capital of Thonburi near the temple, following the fall of Ayutthaya. It is believed that Taksin vowed to restore the temple after passing it at dawn. The temple enshrined the Emerald Buddha image before it was transferred to Wat Phra Kaew on the eastern bank of river in 1785. The temple was on the grounds of the royal palace during the reign of Taksin, before his successor, Rama I(1782–1809), moved the palace to the other side of the river. It was abandoned until the reign of Rama II(1809–24), who had the temple restored and had begun plans to raise the main pagoda to 70 m. The work on the pagoda commenced during the reign of Rama III(1824–51). The main prang was completed in 1851, after nine years of continued construction.
In 1858, Henri Mouhot, a French expeditioner, recorded the detailed observations of Wat Chang(literally Wat Chaeng, Wat Arun) in his travel journals Voyage dans les royaumes de Siam, de Cambodge, de Laos when he had journeyed to Siam.
The temple underwent major restorations during the reign of Chulalongkorn(Rama V, 1868–1910) and in 1980, prior to the bicentenary celebration of the foundation of Bangkok.The most extensive restoration work on the prang was undertaken from 2013 to 2017, during which a substantial number of broken tiles were replaced and lime plaster was used to re-finish many of the surfaces(replacing the cement used during earlier restorations). As the work neared its end in 2017, photographs of the results drew some criticism for the new appearance of the temple, which seemed white-washed compared to its previous state. The Fine Arts Department defended the work, stating that it was carefully done to reflect the original appearance of the temple.
      </p>
      <br />
      <h2 style={{ color: "#DAA520", fontSize: "2rem" }}>
        🌟 Why Visit Wat Arun?
      </h2>
      <br />
      <p>
      We would recommend spending at least an hour visiting the temple. Though it’s known as the Temple of the Dawn, it is absolutely stunning at sunset, particularly when lit up at night. Even so, the quietest time to visit is early morning, before the crowds.
Given the beauty of the architecture and the fine craftsmanship, it’s not surprising that Wat Arun is considered by many as one of the most beautiful temples in Thailand. The prang(spire) by the Chao Phraya is one of world-famous landmarks of the Bangkok. The imposing spire rises over 70 meters high, beautifully decorated with tiny pieces of colored glass and Chinese porcelain placed delicately into intricate patterns.
You can climb the central prang if you wish – the steps are very steep but there’s a railing to help with your balance. Getting up is as tricky as getting down! When you reach the highest point you can see the winding Chao Phraya River and the Grand Palace and Wat Pho opposite. Along the base of this central tower are sculptures of Chinese soldiers and animals.
Head into the ordination hall and you can admire a golden Buddha image and the detailed murals that decorate the walls. Though Wat Arun is very popular for tourists, it’s also an important place of worship for Buddhists. Make sure you dress appropriately or pick up one of the cover-ups that are available for rent near the entrance.
      </p>
      <br />
      <ul style={{ textAlign: "left" }}>
        <li>
          <strong>🏛️ Unique Architecture:</strong> Ornate spires decorated with ceramic tiles and seashells.
        </li>
        <li>
          <strong>🌅 Sunrise & Sunset Views:</strong> Stunning panoramic views from the temple.
        </li>
        <li>
          <strong>🚤 Riverside Location:</strong> Easily accessible via ferry ride across the Chao Phraya River.
        </li>
        <li>
          <strong>📸 Perfect Photography Spot:</strong> Iconic backdrop for memorable photos.
        </li>
        <li>
          <strong>🕉️ Cultural & Spiritual Experience:</strong> A significant Buddhist temple with a peaceful ambiance.
        </li>
      </ul>
      <br />

      {/* Location & Distances */}
      <h2 style={{ color: "#DAA520", fontSize: "2rem" }}>📍 Location & Nearby Distances</h2>
      <br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Wat Arun, Thonburi, Bangkok, Thailand
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Opening Hours:</strong> 8:00 AM - 6:00 PM  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> 100 THB per person  
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
          <tr style={{ backgroundColor: "#B8860B", color: "white" }}>
            <th>From → To</th>
            <th>Distance (km)</th>
            <th>Walking Time</th>
            <th>Driving Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wat Arun → The Grand Palace</td>
            <td>2 km</td>
            <td>-</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>Wat Arun → Wat Pho (Reclining Buddha Temple)</td>
            <td>1.2 km</td>
            <td>-</td>
            <td>7 min</td>
          </tr>
          <tr>
            <td>Wat Arun → Khao San Road</td>
            <td>3.5 km</td>
            <td>-</td>
            <td>15 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#DAA520", fontSize: "2rem" }}>🗺️ Location on Map</h2>
      <br />
      <iframe
        title="Wat Arun (Temple of Dawn) Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.2786988373013!2d100.4862243148321!3d13.74369599035085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29918f59b54d3%3A0x91d0b8d7e9d5db74!2sWat%20Arun!5e0!3m2!1sen!2sth!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button */}
      <button
        onClick={() => onBack("BangkokL1")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#8B4513",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          display: "flex",
          marginLeft: "10px"
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#A0522D")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#8B4513")}
      >
        Previous
      </button>
    </div>
  );
};

export default WatArunBangkok;

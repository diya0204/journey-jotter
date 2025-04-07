/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const Sarnath = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Sarnath</h1><br />
      <img 
        src="https://s7ap1.scene7.com/is/image/incredibleindia/sarnath-varanasi-uttar-pradesh-1-musthead-hero?qlt=82&ts=1727353653401" 
        alt="Sarnath" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 History & Significance</h2><br />
      <p>
      Around the 5th century B.C., a young prince named Siddhartha Gautama, hailing from Lumbini started a journey of self-discovery. His life had been one of privilege and seclusion, but a chance encounter with illness and death prompted him to seek liberation from human suffering. After years of seeking truth and enlightenment, he sat beneath the sacred Bodhi tree in Buddha Temple Bodhgaya, vowing not to rise until he found answers. It was beneath this tree that he achieved enlightenment, and the world would come to know him as the Buddha.
However, the Buddha mission did not begin in Bodhgaya. Before he started spreading his teachings, he sought out five individuals who had left him when he abandoned physical asceticism as the path to liberation. Learning of their residence in the deer park at Sarnath, he made his way there. Impressed by his newfound wisdom and his teachings on the Four Noble Truths, these five individuals became his first disciples, and the seeds of Buddhism were sown in Sarnath.
It was during the reign of Mauryan Emperor Ashoka, a few centuries later, that Buddhism truly blossomed in Sarnath. Ashoka, filled with remorse for his brutal conquest of Kalinga(modern-day Odisha), converted to Buddhism and embraced nonviolence. He fervently championed the religion, erecting stupas and pillars across India. The most iconic of these is the one in Sarnath, which bears the Ashoka chakra, symbolizing the essence of Buddhist teachings. This emblem also graces the Indian flag.
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏛️ Major Attractions</h2><br />
      <ul style={{ textAlign: "left" }}>
        <li><strong>🕌 Dhamek Stupa:</strong>Revered for being the exact spot or Rishipattana where Lord Buddha revealed his first eightfold path sermon to disciples, Dhamek Stupa is the main stupa of Sarnath. King Ashoka had passed the orders to renovate the existing pe-Buddhism tumuli in the 3rd century BC which was completed 2,500 years ago. The cylindrical stupa is made entirely out of bricks with a formidable diameter of 28 metres.</li>
        <li><strong>📜 Ashoka Pillar:</strong>The national emblem of India and a mark the visit of Emperor Ashoka to Sarnath, this 50 m tall pillar crafted out of a stone is an impressive structure.</li>
        <li><strong>🏛️ Archaeological Museum:</strong> Established in the year 1910, the Archaeological Museum displays a small collection of artefacts ranging from the 3rd century BC to 12th century AD.</li>
        <li><strong>🌳 Deer Park:</strong> A serene place where Buddha is believed to have taught his disciples.</li>
        <li><strong>🙏 Mulagandha Kuti Vihar:</strong> A beautiful temple adorned with frescoes depicting Buddha’s life.</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Sarnath, Varanasi, Uttar Pradesh 221007, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 6:00 AM – 6:00 PM
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> ₹25 (Indians), ₹300 (Foreigners)
      </p><br />
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
            <td>Sarnath → Ramnagar Fort</td>
            <td>15 km</td>
            <td>40 min</td>
          </tr>
          <tr>
            <td>Sarnath → Godowlia Market</td>
            <td>9.5 km</td>
            <td>23 min</td>
          </tr>
          <tr>
            <td>Sarnath → Pind Balluchi</td>
            <td>11 km</td>
            <td>28 min</td>
          </tr>
          <tr>
            <td>Sarnath → Tandoor Villa</td>
            <td>11 km</td>
            <td>25 min</td>
          </tr>
          <tr>
            <td>Sarnath → Boat Ride on the Ganges</td>
            <td>10 km</td>
            <td>22 min</td>
          </tr>
          <tr>
            <td>Sarnath → Heritage Haveli</td>
            <td>9.5 km</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>Sarnath → The Great Kabab Factory</td>
            <td>12 km</td>
            <td>27 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Sarnath Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.878072060359!2d83.02287397511628!3d25.3812637775345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e32710858b6f7%3A0x536a04992cf32716!2sSarnath!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button with Hover Effect */}
      <button 
        onClick={onBack} 
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

export default Sarnath;

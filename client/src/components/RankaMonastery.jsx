/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const RankaMonastery = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Ranka Monastery</h1><br />
      
      {/* Image */}
      <img 
        src="https://live.staticflickr.com/65535/52998753833_515a3595db_k.jpg" 
        alt="Ranka Monastery Sikkim" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🙏 About Ranka Monastery</h2><br />
      <p>
      Ranka Monastery, Gangtok overview also known as Lingdum Monastery, the Ranka Monastery which follows the Zurmang Kagyud lineage of Buddhism is situated at a distance of 20 km from Gangtok. The regal monastery is spread over a vast area and provides fantastic scenic views to the tourists.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌟 Why Visit Ranka Monastery?</h2><br />
      <p>
      Though Lingdum or Ranka Monastery is a fairly new addition to Sikkim’s vast repertoire of Buddhist monasteries, it certainly takes away the prize for being the most picturesque of all. Sitting pretty on the same range of mountain as Rumtek, the Lingdum monastery was founded by Zurmang Gharwang Rinpoche, the 12th incarnation of Zurmang Gharwang of Kagyu Sect of Tibetan Buddhism. Though the construction began in the year 1992, it was only inaugurated in 1999.
This magnificient monastery complex is spread over a sprawling 21 acres of richly forested mountain side and offers a brilliant view of the majestic mountains that surround it. As you enter, you will be greeted by an array of beautifully carved prayer wheels. Right in the middle of the complex is a large courtyard with an attractive main temple at its centre. Inside the main prayer hall rests a giant gilded statue of Buddha, 5 metres tall, with another smaller one of Guru Padmasambhava by its side. It also houses a rare collection of Buddhist manuscripts. The walls are festooned with intricate thangka paintings and vibrant hand-stitched wall-hangings.
The monastery complex also has a restaurant and a small souvenir shop for visitors next to the car park.
      </p><br />

      <ul style={{ textAlign: "left" }}>
        <li><strong>🕍 Peaceful Retreat:</strong> A perfect escape from the city to experience Buddhist spirituality.</li>
        <li><strong>🎨 Exquisite Architecture:</strong> Features traditional Tibetan designs and paintings.</li>
        <li><strong>🕉️ Monastic Life:</strong> Witness young monks in prayer and meditation.</li>
        <li><strong>🏔️ Scenic Location:</strong> Nestled in lush green hills with breathtaking views.</li>
        <li><strong>📷 Photography Spot:</strong> Ideal for capturing mesmerizing monastery structures.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Ranka Monastery, Gangtok, Sikkim, India
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
            <th>Walking Time</th>
            <th>Driving Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ranka Monastery → Hanuman Tok</td>
            <td>16 km</td>
            <td>-</td>
            <td>40 min</td>
          </tr>
          <tr>
            <td>Ranka Monastery → Rumtek Monastery</td>
            <td>12 km</td>
            <td>-</td>
            <td>30 min</td>
          </tr>
          <tr>
            <td>Ranka Monastery → Banjhakri Falls</td>
            <td>8 km</td>
            <td>-</td>
            <td>20 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Ranka Monastery Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.626544789984!2d88.61324867513467!3d27.337898878106023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a55b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sRanka%20Monastery!5e0!3m2!1sen!2sin!4v1712807896543"
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

export default RankaMonastery;

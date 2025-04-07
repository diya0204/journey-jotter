/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const EncheyMonastery = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>Enchey Monastery</h1><br />
      
      {/* Image */}
      <img 
        src="https://xplro.com/wp-content/uploads/2024/07/Xplro-2024-07-07T003232.968.jpg" 
        alt="Enchey Monastery" 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />

      {/* Description Section */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 Overview</h2><br />
      <p>
      Enchey Monastery, meaning the solitary temple, is a holy pilgrimage spot for the Buddhists situated in the magical wonderland of Gangtok surrounded by natural beauty. The presence of tall pine trees, flowery meadows and the beautiful view of the Kanchenjunga Hills, gives the devotees a feeling of being in the middle of a serene and blessed environment. Situated 3 km to the north-east of Gangtok, this monastery is about 200 years old. History has it that Lama Druptob Karpo, who was a very famous tantric with flying powers, flew down to the Maenam Hill and built a hermitage at this exquisite location which was later renovated under the rule of Sidkeong Tulku in the Chinese Pagoda style.
Presently, this pious monastery houses 90 monks and pays respect to Loki Sharia, Lord Buddha, and Guru Padmasambhava. There is a massive metal roofed prayer hall inside Enchey Monastery which consists of numerous images of Gods, Goddesses, and Tantric. The porch has a wheel of law which ripples in perfect sync with the chants of the monks. Apart from its captivating location, the Enchey Monastery is also a famous tourist location due to the Chaam dance(a special prayer offering by monks by wearing masks) organized on the 18th, 19th day of the 12th lunar month as per the Tibetan calendar. Pang Lhabsol is another festival celebrated in the monastery which brings the Bhutias and Lepchas together by swearing on blood-brotherhood with the witness being the Khangchendzonga. If you are interested in learning about the culture of the monks or their history in a surreal and peaceful environment away from the noise of the city, then, this is the place for you.
      </p><br />
      
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🏛️ History</h2><br />
      <p>
      Enchey Monastery was established in the late 19th century by Lama Dhrupthob Karpo, a renowned Buddhist master who was also the founder of the Nyingma tradition of Tibetan Buddhism. The original structure was a small hermitage, which was later expanded into a monastery by his disciple, Lama Tsultrim Dorjee.
The monastery’s architecture is a blend of Tibetan and Sikkimese styles, with a distinctive pagoda-style roof and intricate wood carvings adorning the façade. The main prayer hall houses a statue of Guru Rinpoche(also known as Padmasambhava), who is revered as the patron saint of Sikkim. The walls are adorned with intricate murals depicting Buddhist deities and scenes from the life of Guru Rinpoche.
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>⚔️ Significance</h2><br />
      <p>Enchey Monastery holds a special place in the hearts of the local people, who believe that it is a powerful source of positive energy and blessings. The monastery is particularly significant for followers of the Nyingma tradition, who consider it to be one of the most important pilgrimage sites in Sikkim.
The monastery is also known for its annual Cham dance festival, which takes place on the 18th and 19th days of the 12th lunar month(usually around December). The Cham dance is a traditional Tibetan dance performed by monks dressed in elaborate costumes and masks, and is believed to ward off evil spirits and bring good luck and prosperity.</p><br></br>
      <ul style={{ textAlign: "left" }}>
        <li><strong>🙏 Sacred Site:</strong> A revered monastery of the Nyingma sect of Tibetan Buddhism.</li>
        <li><strong>🏔️ Scenic Location:</strong> Offers panoramic views of the Kanchenjunga range.</li>
        <li><strong>📖 Rich History:</strong> Established in the 19th century and later rebuilt in 1909.</li>
        <li><strong>🕍 Beautiful Architecture:</strong> Traditional Tibetan-style structures with colorful murals.</li>
        <li><strong>🎭 Annual Festivals:</strong> Hosts the vibrant Cham dance and other religious rituals.</li>
      </ul><br />

      {/* Location & Distances */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> Enchey Monastery, Gangtok, Sikkim 737103, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> 6:00 AM – 4:00 PM  
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
            <td>Enchey Monastery → MG Marg</td>
            <td>2.5 km</td>
            <td>35 min</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>Enchey Monastery → Ganesh Tok</td>
            <td>3.0 km</td>
            <td>40 min</td>
            <td>12 min</td>
          </tr>
          <tr>
            <td>Enchey Monastery → Tashi View Point</td>
            <td>7.0 km</td>
            <td>-</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>Enchey Monastery → Do Drul Chorten</td>
            <td>4.8 km</td>
            <td>-</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>Enchey Monastery → Namgyal Institute</td>
            <td>5.2 km</td>
            <td>-</td>
            <td>18 min</td>
          </tr>
          <tr>
            <td>Enchey Monastery → Bakthang Waterfall</td>
            <td>2.5 km</td>
            <td>35 min</td>
            <td>10 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="Enchey Monastery Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.626544789984!2d88.61324867513467!3d27.337898878106023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a55b4b4b5f669%3A0xcaae8f6b9b3b8c6f!2sEnchey%20Monastery!5e0!3m2!1sen!2sin!4v1712807896543"
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

export default EncheyMonastery;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const KhaoSanRoad = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#FF4500", fontSize: "3rem" }}>
        Khao San Road
      </h1>
      <br />

      {/* Image */}
      <img
        src="https://img1.10bestmedia.com/Images/Photos/345251/KS1a_55_660x440.jpg"
        alt="Khao San Road Bangkok"
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      {/* Description Section */}
      <h2 style={{ color: "#E63946", fontSize: "2rem" }}>🎉 About Khao San Road</h2>
      <br />
      <p>
      Long a haven for foreign backpackers, Khao San Road has gentrified to include a few boutique choices, and is now a colorful and vibrant part of Bangkok, where Thais come to join travelers at some of the best bars and clubs in town, as well as to take advantage of all the various shopping bargains.
Eat: One does not need to walk more than 50 meters or less to find food on and around Khao San Road. There are street vendors selling spring rolls and pad thai at the cheapest prices in the city, there are pizza parlors, there are hamburger joints, and yes, plenty of Thai. There is even an Israeli restaurant for those who ca not make it through Asia without a hummus and falafel fix! The nearby sidestreets of Rambutri Road and other tiny lanes also are full of vendors aplenty.
Party: Put a large group of twenty somethings together and what do you get? Nightlife, and more nightlife. Khao San Road may not be centrally located, but its motley collection of young travelers ensure that there are plenty of bars and clubs from which to dance the night away in. Highlights here include the cavernous Lava Club and the roof top Gazebo, recently voted as one of the best bars in the world, with live bands, sheesha pipes, and plenty of good cheer.
Stay: Khao San Road used to be known as the only place in Bangkok to grab a cheap mattress. While it still is the primary backpacker haven, even the dingiest of rooms have had a facelift, and there are even some boutique style places that have recently sprung up. Whatever your price range, you will be sure to find something clean, comfortable, and situated near all the action.
Shop: Khao San Road is a market all unto itself. The street is sealed off from vehicle traffic and the road lined with vendors selling everything from clothing to DVD and CD to even fake ID documents of varying types. There are used bookshops, stores selling used camping and travel gear that travelers have discarded, and plenty of stalls that will braid your hair while your partner shops for that tie-dyed t-shirt.
      </p>
      <br />
      <h2 style={{ color: "#E63946", fontSize: "2rem" }}>🌟 Why Visit Khao San Road?</h2>
      <br />
      <p>
      Visit Khao San Road in Bangkok to experience a vibrant, bustling atmosphere with a mix of street food, shopping, nightlife, and a unique backpacker culture, making it a great place to soak in the energy of Bangkok and interact with people from all over the world, particularly if you are looking for a lively and affordable experience. 
Unique atmosphere: A lively and chaotic environment known for its backpacker vibe. 
People watching: Observe the diverse crowd of tourists from around the world. 
Easy access: Centrally located in Bangkok, making it easily accessible. 
      </p>
      <br />

      <ul style={{ textAlign: "left" }}>
        <li>
          <strong>🎶 Lively Nightlife:</strong>Numerous bars, clubs, and live music venues, perfect for a night out on the town. 
        </li>
        <li>
          <strong>🍢 Street Food Paradise:</strong> A wide variety of delicious and affordable Thai street food options. 
        </li>
        <li>
          <strong>🛍️ Shopping & Markets:</strong> Find cheap clothing, souvenirs, handicrafts, and more with the opportunity to bargain. 
        </li>
        <li>
          <strong>💆‍♀️ Relaxation:</strong> Massage parlors and tattoo studios for a unique experience.
        </li>
        <li>
          <strong>🌏 Backpacker Culture:</strong> A melting pot of travelers from around the world.
        </li>
      </ul>
      <br />

      {/* Location & Distances */}
      <h2 style={{ color: "#E63946", fontSize: "2rem" }}>📍 Location & Nearby Distances</h2>
      <br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Location:</strong> Khao San Road, Phra Nakhon, Bangkok, Thailand
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Best Time to Visit:</strong> Evening & Night  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>💰 Budget Range:</strong> Affordable for all travelers  
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
          <tr style={{ backgroundColor: "#FF4500", color: "white" }}>
            <th>From → To</th>
            <th>Distance (km)</th>
            <th>Walking Time</th>
            <th>Driving Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Khao San Road → The Grand Palace</td>
            <td>1.5 km</td>
            <td>20 min</td>
            <td>5 min</td>
          </tr>
          <tr>
            <td>Khao San Road → Wat Pho(Reclining Buddha Temple)</td>
            <td>2 km</td>
            <td>-</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>Khao San Road → Wat Arun (Temple of Dawn)</td>
            <td>3.5 km</td>
            <td>-</td>
            <td>15 min</td>
          </tr>
        </tbody>
      </table>

      {/* Embedded Google Map */}
      <h2 style={{ color: "#E63946", fontSize: "2rem" }}>🗺️ Location on Map</h2>
      <br />
      <iframe
        title="Khao San Road Location Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.123504725174!2d100.4945392148322!3d13.75659909034099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2990a59c3d661%3A0x85cd8c501fcf8f57!2sKhao%20San%20Road!5e0!3m2!1sen!2sth!4v1712807896543"
        allowFullScreen
      ></iframe>

      {/* Back Button */}
      <button
        onClick={() => onBack("BangkokL1")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#C71585",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          display: "flex",
          marginLeft: "10px"
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#D02090")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#C71585")}
      >
        Previous
      </button>
    </div>
  );
};

export default KhaoSanRoad;

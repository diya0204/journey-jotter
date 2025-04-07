/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ParisLuxuryDay1 = ({ onBack, onNext, onImageClick }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const activities = [
    {
      name: "Private Louvre Museum Tour",
      image: "https://api-www.louvre.fr/sites/default/files/2021-01/cour-napoleon-et-pyramide_1.jpg",
      link: "LouvreMuseum",
    },
    {
        name: "Montmartre",
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/15/40/8a/73.jpg",
        link: "Montmartre",
      },
    {
      name: "Le Meurice Alain Ducasse",
      image: "https://www.dorchestercollection.com/media/m0nberbi/le-meurice-chefs-table-portrait-by-mark-read.jpg?width=664&height=886&rmode=crop",
      link: "LeMeuriceAlainDucasse",
    },
    {
        name: "Seine River Cruise",
        image: "https://parisjetaime.com/data/layout_image/22359_Jardins-de-l%27Archipel-des-Berges-de-Seine-Niki-de-Saint-Phalle--630x405--%C2%A9-Marc-Bertrand.jpg",
        link: "SeineRiverWalk",
      },
    {
      name: "Eiffel Tower VIP Experience",
      image: "https://media.architecturaldigest.com/photos/66a951edce728792a48166e6/1:1/w_5304,h_5304,c_limit/GettyImages-955441104.jpg",
      link: "EiffelTower",
    },
    {
        name: "Jules Verne",
        image: "https://www.restaurants-toureiffel.com/upload/photos/7163/t12.jpg",
        link: "JulesVerne",
      },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "white",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          width: "1250px",
          height: "250px",
          background:
            "url('https://vastphotos.com/files/uploads/photos/11269/Sacre-coeur-artwork-900x525.jpg?v=20220712043521') no-repeat center center",
          backgroundSize: "cover",
          color: "white",
          textAlign: "center",
          padding: "50px 0",
        }}
      >
        <h1 style={{ fontSize: "3rem", paddingLeft: "10px", textAlign: "left" }}>
          Paris
        </h1>
        <h2
          style={{
            fontSize: "2rem",
            margin: "10px 0",
            textAlign: "left",
            paddingLeft: "10px",
          }}
        >
          Day 1 - Classic Paris with a Luxury Twist
        </h2>
        <div style={{ display: "flex", textAlign: "center", gap: "10px" }}>
          <button
            style={{
              backgroundColor: hoveredButton === "back" ? "#0055aa" : "#003366",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginLeft: "10px",
              padding: "10px 15px",
              transition: "background-color 0.3s ease",
            }}
            onClick={onBack}
            onMouseEnter={() => setHoveredButton("back")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Previous
          </button>
          <button
            style={{
              backgroundColor: hoveredButton === "next" ? "#0055aa" : "#003366",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginLeft: "10px",
              padding: "10px 15px",
              transition: "background-color 0.3s ease",
            }}
            onClick={onNext}
            onMouseEnter={() => setHoveredButton("next")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Next
          </button>
        </div>
      </div>

      {/* Activities Section */}
      <div style={{ padding: "30px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>Activities</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            textAlign: "center",
          }}
        >
          {activities.map((activity, index) => (
            <div
              key={index}
              onClick={() => activity.link && onImageClick(activity.link)}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                cursor: "pointer",
                height: "100%",
                width: "calc(50% - 20px)",
                display: "flex",
                gridTemplateColumns: "repeat(auto-fit, minmax(1200px, 2fr))",
                flexWrap: "wrap",
              }}
            >
              <img
                src={activity.image}
                alt={activity.name}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  background: "rgba(0, 0, 0, 0.6)",
                  color: "white",
                  width: "100%",
                  textAlign: "center",
                  padding: "10px",
                }}
              >
                <h3>{activity.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParisLuxuryDay1;

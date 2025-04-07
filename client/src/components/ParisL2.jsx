/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ParisLuxuryDay2 = ({ onBack, onNext, onImageClick }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const activities = [
    {
        name: "Private VIP Tour of Palace of Versailles",
        image: "https://cdn.britannica.com/65/114465-050-8C96BD81/Hall-of-Mirrors-ceiling-Jules-Hardouin-Mansart-Charles.jpg",
        link: "PalaceofVersailles",
      },
    {
      name: " Gordon Ramsay’s Le Trianon",
      image: "https://www.jacadatravel.com/wp-content/uploads/fly-images/171425/le-trianon-palace-restaurant-1600x500-cc.jpg",
      link: " GordonRamsaysLeTrianon ",
    },
    {
        name: "Champs-Élysées",
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/15/30/78/09.jpg",
        link: "ChampsElysees",
      },
      {
        name: "Avenue Montaigne",
        image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/07/04/1eb3a03546c5dbd876bd3a4479ca3ce2_1000x1000.jpg",
        link: "AvenueMontaigne",
      },
      {
        name: "Relaxing Spa Treatment at Ritz Paris",
        image: "https://media.ritzparis.com/medias/domain12964/media100003/1032-jmla4fmtsn-web4k.jpg?twic=v1/cover=1536x1970/quality=85",
        link: "RitzParis",
      },
      {
        name: "Moulin Rouge",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Moulin_Rouge%2C_17_April_2011.jpg",
        link: "MoulinRouge",
      },
      {
        name: "Opera Garnier",
        image: "https://res.cloudinary.com/opera-national-de-paris/image/upload/c_crop,h_3333,w_5000,x_0,y_0/w_870/f_auto/f_auto/v1/user_photos/najocddrarivc3uljafm?_a=E",
        link: "OperaGarnier",
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
          Day 2 - Royalty & Haute Couture
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

export default ParisLuxuryDay2;

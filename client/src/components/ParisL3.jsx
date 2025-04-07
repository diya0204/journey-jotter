/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ParisLuxuryDay3 = ({ onBack, onNext, onImageClick }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const activities = [
    {
      name: "Maison Francis Kurkdjian",
      image: "https://luxferity.com/up/shop-news/a-new-maison-francis-kurkdjian-store-in-paris-golden-triangle-2-1200x802.jpg",
      link: "MaisonFrancisKurkdjian",
    },
    {
      name: "Alain Ducasse au Plaza Athénée",
      image: "https://media.cntraveler.com/photos/580e5e7b71c643370b5fff3a/16:9/w_2560,c_limit/Restaurant-HotelPlazaAthenee-Paris-CRHotel.jpg",
      link: "AlainDucasseauPlazaAthénée",
    },
    {
      name: "Shangri-La Paris",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/295686354.jpg?k=e87a3741e299259c220d04a3fc747f384458ee7ee5a21a39599356099fb67d09&o=&hp=1",
      link: "ShangriLaParis",
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
          Day 3 - Ultimate Parisian Elegance
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

export default ParisLuxuryDay3;

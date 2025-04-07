/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const LuxurySikkimDay3 = ({ destination, onBack, onNext, onImageClick }) => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const activities = [
    {
      name: "Pelling",
      image: "https://travellingslacker.com/wp-content/uploads/2019/01/Pelling-Sky-Walk-17.jpg",
      link: "Pelling",
    },
    {
      name: "Pemayangtse Monastery",
      image: "https://res.cloudinary.com/kmadmin/image/upload/v1726815209/kiomoi/Pemayangtse_Monastery_5141.jpg",
      link: "PemayangtseMonastery",
    },
    {
      name: "Sanga Choeling",
      image: "https://cdn.tripuntold.com/media/photos/location/2018/12/01/a12d8939-8232-4357-8e28-8907ab23e0e2.jpg",
      link: "SangaChoeling",
    },
    {
      name: "Rabdentse Ruins",
      image: "https://asoulwindow.com/wp-content/uploads/2019/12/Rabdentse-site-Pelling-West-Sikkim-20.jpg",
      link: "RabdentseRuins",
    },
    {
        name: "Khecheopalri Lake",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/khecheopalri-lake-pelling-sikkim-1-attr-hero?qlt=82&ts=1726655953189",
      link: "KhecheopalriLake",
    }
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
            "url('https://photos.smugmug.com/Destinations/India-Sikkim-Gangtok/i-4WhTQqL/3/KNZKP9x9gnm3QnfTtZC4Wwpv8SrBgC9SfpHDkj3fT/XL/18110562-Pano-XL.jpg') no-repeat center center",
          backgroundSize: "cover",
          color: "white",
          textAlign: "center",
          padding: "50px 0",
        }}
      >
        <h1 style={{ fontSize: "3rem", paddingLeft: "10px", textAlign: "left" }}>
          Sikkim
        </h1>
        <h2
          style={{
            fontSize: "2rem",
            margin: "10px 0",
            textAlign: "left",
            paddingLeft: "10px",
          }}
        >
          Day 3 - Pelling Excursion & Departure
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

export default LuxurySikkimDay3;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const LuxuryBangkokDay2 = ({ destination, onBack, onNext, onImageClick }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const activities = [{
    name: "The Grand Palace",
    image: "https://static.wixstatic.com/media/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg",
    link: "GrandPalace",
  },
  {
    name: "Wat Pho",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/25/ab.jpg",
    link: "WatPho",
  },
  {
    name: "Wat Arun",
    image: "https://static.wixstatic.com/media/2cc94a_07e55de318fe41538e17cb9de596cb45~mv2.jpg/v1/fill/w_2500,h_1406,al_c/2cc94a_07e55de318fe41538e17cb9de596cb45~mv2.jpg",
    link: "WatArun",
  },
    {
      name: "Siam Paragon",
      image: "https://d15ldvyocwqu5y.cloudfront.net/images/uploaded-new/151979",
      link: "SiamParagon",
    },
    {
      name: "Iconsiam",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/58/07/d4/iconsiam.jpg?w=900&h=500&s=1",
      link: "Iconsiam",
    },
    {
      name: "The Peninsula",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239398489.jpg?k=e7fadcf1ff9f663396eed86f422b2fafa2ae2db4772a6ebe96fd7eb885bcc5b3&o=&hp=1",
      link: "PeninsulaTea",
    },
    {
      name: "Spa at Banyan Tree",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/96/ca/cd/banyan-tree-spa.jpg?w=1200&h=-1&s=1",
      link: "BanyanTree",
    },
    {
      name: "Vertigo Rooftop",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/54/81/75/vertigo-grill-and-moon.jpg?w=900&h=500&s=1",
      link: "VertigoRooftop",
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
            "url('https://t3.ftcdn.net/jpg/00/82/84/18/360_F_82841870_9arOlMXUNkbDxNDGGfV9Bh9aTgdAwaDw.jpg') no-repeat center center",
          backgroundSize: "cover",
          color: "white",
          textAlign: "center",
          padding: "50px 0",
        }}
      >
        <h1 style={{ fontSize: "3rem", paddingLeft: "10px", textAlign: "left" }}>
          Bangkok
        </h1>
        <h2
          style={{
            fontSize: "2rem",
            margin: "10px 0",
            textAlign: "left",
            paddingLeft: "10px",
          }}
        >
          Day 2 - Culture, Shopping & Fine Dining
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

export default LuxuryBangkokDay2;

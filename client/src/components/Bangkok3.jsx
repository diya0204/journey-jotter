/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const BangkokDay3 = ({ onBack, onFinish, onImageClick }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const activities = [
    {
      name: "Lumphini Park",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/b8/3b/d3/lumpini-park-4.jpg?w=1200&h=1200&s=1",
      link: "LumphiniPark",
    },
    {
      name: "Art in Paradise",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/7d/fd/b9/art-in-paradise-bangkok.jpg?w=1200&h=-1&s=1",
      link: "ArtinParadise", 
    },
    {
      name: "Chatuchak",
      image: "https://images.squarespace-cdn.com/content/v1/5f5de3ec83beb9471d61c1f9/1602329253723-PAZV28EBIK7D8TMHBBFG/image-asset.jpeg",
      link: "Chatuchak",
    },
    {
      name: "Golden Mount",
      image: "https://lp-cms-production.imgix.net/2020-09/shutterstockRF_1099129721.jpg?w=1920&h=640&fit=crop&crop=faces%2Cedges&auto=format&q=75",
      link: "GoldenMount",
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
          Day 3 - Parks, Relaxation & Local Delights
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

export default BangkokDay3;

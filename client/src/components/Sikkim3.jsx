/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from "react";

const Sikkim3 = ({ destination, onBack, onNext, onImageClick }) => {
    const [hoveredButton, setHoveredButton] = useState(null);
  const activities = [
    {
      name: "Hanuman Tok",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Hanuman_Tok_Temple_Complex_in_Gangtok_District%2C_East_Sikkim_16.jpg/1200px-Hanuman_Tok_Temple_Complex_in_Gangtok_District%2C_East_Sikkim_16.jpg",
      link: "HanumanTok",
    },
    {
      name: "Rumtek Monastery",
      image: "https://pyt-blogs.imgix.net/2020/05/kinshuk-bose-oXHCpSjWSqs-unsplash-1-scaled.jpg?auto=format&ixlib=php-3.3.0",
      link: "RumtekMonastery",
    },
    {
      name: "Ranka Monastery",
      image: "https://www.darjeeling-tourism.com/darj_i00027a.jpg",
      link: "RankaMonastery",
    },
    {
      name: "Banjhakri Falls",
      image: "https://i.ytimg.com/vi/-DDdOyEIir8/maxresdefault.jpg",
      link: "BanjhakriFalls",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "white", width: "100%", height: "100%" }}>
      {/* Header Section */}
      <div
        style={{
          width: "1250px",
          height: "250px",
          background: "url('https://photos.smugmug.com/Destinations/India-Sikkim-Gangtok/i-4WhTQqL/3/KNZKP9x9gnm3QnfTtZC4Wwpv8SrBgC9SfpHDkj3fT/XL/18110562-Pano-XL.jpg') no-repeat center center",
          backgroundSize: "cover",
          color: "white",
          textAlign: "center",
          padding: "50px 0",
        }}
      >
        <h1 style={{ fontSize: "3rem", paddingLeft: "10px", textAlign: "left" }}>Sikkim</h1>
        <h2 style={{ fontSize: "2rem", margin: "10px 0", textAlign: "left", paddingLeft: "10px" }}>
          Day 3 - Day Trip to Nathula Pass or Exploring East Sikkim
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
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                height: "100%",
                width: "calc(50% - 20px)",
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
                  background: "rgba(0, 0, 0, 0.5)",
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

export default Sikkim3;

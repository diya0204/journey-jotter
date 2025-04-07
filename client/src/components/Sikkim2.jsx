/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from "react";

const Sikkim2 = ({ destination, onBack, onNext, onImageClick }) => {
    const [hoveredButton, setHoveredButton] = useState(null);
  const activities = [
    {
      name: "Tsomgo Lake",
      image: "https://1001things.org/wp-content/uploads/2014/12/Tsongmo-Lake2-1200x797.jpg",
      link: "TsomgoLake",
    },
    {
      name: "Baba Mandir",
      image: "https://www.holidify.com/images/cmsuploads/compressed/BabaMandirlongshot_20180417231321.jpg",
      link: "BabaMandir",
    },
    {
      name: "Yak Ride",
      image: "https://sikkimtourism.org/wp-content/uploads/2023/09/Yak-ride-in-Changu-Lake.jpg",
      link: "YakRide",
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
          Day 2 - Tsomgo Lake & Baba Mandir Excursion
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

export default Sikkim2;

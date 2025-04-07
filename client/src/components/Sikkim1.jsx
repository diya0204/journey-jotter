/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from "react";
const Sikkim1 = ({ destination, onBack, onNext, onImageClick }) => {
   const [hoveredButton, setHoveredButton] = useState(null);
  const activities = [
    {
      name: "MG Marg",
      image: "https://i.pinimg.com/1200x/84/fa/c4/84fac4c4bae76d0599f7c31217688bcc.jpg",
      link: "MGMarg",
    },
    {
      name: "Ganesh Tok",
      image: "https://plutotours.in/places/wp-content/uploads/2024/09/ganeshtok-entrance.webp",
      link: "GaneshTok",
    },
    {
      name: "Tashi View Point",
      image: "https://www.exoticmiles.com/gangtok/tashi-view-point/",
      link: "TashiViewPoint",
    },
    {
      name: "Do Drul Chorten",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/do-drul-chorten-gangtok-sikkim-2-attr-hero?qlt=82&ts=1727355030189",
      link: "DoDrulChorten",
    },
    {
        name: "Namgyal Institute of Tibetology",
        image: "https://www.flamingotravels.co.in/_next/image?url=https%3A%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FPlacesOfInterest%2FNamgyal-Institute-Of-Tibetology-Gangtok-4.jpg&w=1080&q=90",
      link: "NamgyalInstitute",   
    },
    {
        name: "Bakthang Waterfall",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/45/5f/bf/bakthang-waterfall-on.jpg?w=1200&h=-1&s=1",
      link: "BakthangWaterfall",   
    },
    {
        name: "Enchey Monastery",
        image: "https://www.hlimg.com/images/things2do/738X538/enchey-gompa-sikkim-head-tourismofindia-1516672863t.jpeg",
      link: "EncheyMonastery",   
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
          style={{ fontSize: "2rem", margin: "10px 0", textAlign: "left", paddingLeft: "10px" }}
        >
          Day 1 - Gangtok Local Sightseeing
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
                cursor: activity.link ? "pointer" : "default",
                height: "100%",
                width: "calc(50% - 20px)"
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

export default Sikkim1;

// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Banaras3.css";
// eslint-disable-next-line react/prop-types, no-unused-vars
const Banaras3 = ({ destination, onBack, onNext, onImageClick}) => {
    const activities = [
        {
            name: "Tulsi Manas Mandir",
            image: "https://static.langimg.com/thumb/115171636/navbharat-times-115171636.jpg?imgsize=264650&width=540&resizemode=3",
            link: "TulsiManasMandir",
        },
        {
            name: "Bharat Mata Temple",
            image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/05/ae4be49d26e5f17fff4472e7b75f2c2b_1000x1000.jpg",
            link: "BharatMataTemple",
        },
        {
            name: "Banaras Hindu University (BHU) campus",
            image: "https://s7ap1.scene7.com/is/image/incredibleindia/banaras-hindu-university-varanasi-uttar-pradesh-6-attr-hero?qlt=82&ts=1727353280305",
            link: "BHUCampus",
        },
        {
          name: "New Vishwanath Temple",
          image: "https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Fgallery_images%2F2021%2F12%2F13%2Ffile7it39sg3fyvuyj4ray1.jpg",
          link: "KashiVishwanathTemple",
        },
        {
            name: "Manikarnika Ghat",
            image: "https://www.myvaranasi.com/wp-content/uploads/2019/06/Manikarnika-Ghat-Varanasi-review-look-580x408.jpg",
            link: "ManikarnikaGhat",
        }
      ];
  return (
    <div className="travel-container">
      {/* Header Section */}
      <div className="headerb3">
        <h1>Banaras</h1>
        <h2>Day 3 - Exploring Hidden Gems & Markets</h2>
        <div className="buttons">
          <button className="nav-button" onClick={() => onBack("Banaras2")}>Previous</button>
        </div>
      </div>
      <div className="content">
        <h2 className="section-title">Activities</h2>
        <div className="activity-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card"
            onClick={() => activity.link && onImageClick(activity.link)}
            style={{ cursor: activity.link ? "pointer" : "default" }}>
              <img src={activity.image} alt={activity.name} />
              <div className="overlay">
                <h3>{activity.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Banaras3;

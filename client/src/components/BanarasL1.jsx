// eslint-disable-next-line no-unused-vars
import React from "react";
import "./BanarasL1.css";
// eslint-disable-next-line react/prop-types, no-unused-vars
const BanarasL1 = ({ destination, onBack, onNext, onImageClick}) => {
    const activities = [
        {
            name: "BrijRama Palace",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/251112110.jpg?k=510fb180b730b92c6ac67feabd50216167c3b0c1479191bdf3ab76d2a6a86e18&o=&hp=1",
            link: "BrijRamaPalace",
        },
        {
            name: "Taj Nadesar Palace",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/582961658.jpg?k=08597803bf4eb59d087f350cefdbac8672cf625aff5e80990dc2c58b40d460b8&o=&hp=1",
            link: "TajNadesarPalace",
        },
        {
            name: "Assi Ghat",
            image: "https://kashiyatra.in/wp-content/uploads/2023/10/assi-ghat-ganga-aarti.jpeg",
            link: "AssiGhat",
          },
          {
            name: "Kashi Vishwanath Temple",
            image: "https://www.prabhatkhabar.com/wp-content/uploads/2024/07/Kashi-Vishwanath-Temple.jpeg",
            link: "KashiVishwanathTemple",  
          },
          {
              name: "Banaras Hindu University",
              image: "https://s7ap1.scene7.com/is/image/incredibleindia/banaras-hindu-university-varanasi-uttar-pradesh-6-attr-hero?qlt=82&ts=1727353280305",
              link: "BHUCampus",
          },
        {
            name: "Manikarnika Ghat",
            image: "https://www.myvaranasi.com/wp-content/uploads/2019/06/Manikarnika-Ghat-Varanasi-review-look-580x408.jpg",
            link: "ManikarnikaGhat",
        },
        {
            name: "Dashashwamedh Ghat",
            image: "https://shrikashidham.com/wp-content/uploads/2023/09/dashashwamedh-ghat-varanasi-scaled.jpg",
            link: "DashashwamedhGhat",
        },
      ];
  return (
    <div className="travel-container">
      {/* Header Section */}
      <div className="headersbl">
        <h1>Banaras</h1>
        <h2>Day 1 - Spiritual Beginnings & Heritage Exploration</h2>
        <div className="buttons">
          <button className="nav-button" onClick={() => onBack("BudgetBanaras")}>Previous</button>
          <button className="nav-button" onClick={() => onNext("BanarasL2")}>Next</button>
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

export default BanarasL1;

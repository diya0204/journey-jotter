// eslint-disable-next-line no-unused-vars
import React from "react";
import "./UdaipurL2.css";
// eslint-disable-next-line react/prop-types, no-unused-vars
const UdaipurL2 = ({ destination, onBack, onNext, onImageClick}) => {
    const activities = [
        {
            name: "Fateh Sagar Lake",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHhv9Wdh_4ZfzGLXBe3mUgJczay2QBgUpV_V7_FQoa40eMvPjt3PRgzDcgzXnMKRHBgBX_rY9JFnDNoespc4XBpSljSh20wY8Xi3m8m_gjbNUomz4w6Uu4tsV07dh8rXZ5Al-9FG1xDTg/s720/Fateh+Sagar+Lake+in+Udaipur+-+Rajasthan+State+of+India-6.jpg",
            link: "FatehSagarLake",
        },
        {
            name: "Saheliyon Ki Bari",
            image: "https://www.theleela.com/prod/content/assets/styles/tl_1920_735/public/aio-banner/dekstop/Saheliyon-Ki-Bari-in-Udaipur.jpg.webp?VersionId=NmrSkX5Q3wo.2VR5QOOw92CyRAj0ACpH&itok=Ap--a5r7",
            link: "SaheliyonKiBari",
        },
        {
            name: "Bagore Ki Haveli",
            image: "https://i0.wp.com/www.manishjaishree.com/wp-content/uploads/2019/11/IMG_6635-1024x768.jpg?resize=1024%2C768&ssl=1",
            link: "BagoreKiHaveli",
        },
        {
          name: "Upre",
          image: "https://media-cdn.tripadvisor.com/media/photo-s/12/63/e2/35/roof-top-restraunt-upre.jpg",
          link: "Upre",
        },
        {
            name: "Bhartiya Lok Kala Museum",
            image: "https://udaipurtourism.co.in/images/places-to-visit/headers/bharatiya-lok-kala-museum-udaipur-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg",
            link: "BhartiyaLokKalaMuseum",
        }
      ];
  return (
    <div className="travel-container">
      {/* Header Section */}
      <div className="headerl2">
        <h1>Udaipur</h1>
        <h2>Day 2 - Cultural Splendor & Scenic Beauty</h2>
        <div className="buttons">
          <button className="nav-button" onClick={() => onBack("UdaipurL1")}>Previous</button>
          <button className="nav-button" onClick={() => onNext("UdaipurL3")}>Next</button>
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

export default UdaipurL2;

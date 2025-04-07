// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Goa3.css";
// eslint-disable-next-line react/prop-types, no-unused-vars
const Goa3 = ({ destination, onBack, onNext}) => {
    const activities = [
      {
        name: "Ferry Ride to Divar Island",
        image: "https://live.staticflickr.com/65535/52572670168_692b1fd8d9_z.jpg",
      },
        {
          name: "Ferry Ride to Chorao Island",
          image: "https://content.jdmagicbox.com/comp/goa/l5/0832px832.x832.190823103322.m1l5/catalogue/chorao-ferry-ribandar-goa-ferry-services-t6l58whbsl.jpg",
        },
        {
            name: "Portuguese-style Houses",
            image: "https://www.dsource.in/sites/default/files/gallery/4284/2.jpg",
        },
        {
            name: "Scenic Countryside",
            image: "https://scenic-countryside-1-bhk-in-the-lap-of-nature-apartment.goa-india-hotels-resorts.com/data/Pictures/OriginalPhoto/11874/1187490/1187490973/picture-calangute-scenic-countryside-1-bhk-in-the-lap-of-nature-apartment-18.JPEG",
        },
        {
            name: "Baba Au Rhum",
            image: "https://whatsupgoa.com/media/3960a19b43f14108b363a49aaa82e4b0.jpeg",
        },
        {
            name: "Panjim Market",
            image: "https://housing.com/news/wp-content/uploads/2023/02/Panjim-market-in-Goa-How-to-reach-and-what-to-shop-01.jpg",
        },
        {
            name: "Miramar Beach",
            image: "https://storage.googleapis.com/goa-app-12a91.appspot.com/2021-12-08T08%3A09%3A34.153Zmiramar-4.webp?GoogleAccessId=firebase-adminsdk-zeqcj%40goa-app-12a91.iam.gserviceaccount.com&Expires=16447017600&Signature=Qc9V9kh1ql7air5BltzutVznoHjk1nWhH46SQBKDNnau5u5qRHlxZu5db9VhWelUPUlbFHMzyL0ZyrCf%2B4wVYPIO%2FS34%2FKfaWRqXjuZSg5OZ8UzbZvlQRxNVDh2MCjoUTWwweWdrwj%2FqbYPefbuLXkE3BnMN%2Bj8s1woZMkxsLpmoMyBKd3P28noB4kSs2PUPyi4UEvK4F3MPBgQgfqTsYzilPRfZjhlvCd9DGdq7XU3J%2F2zw7BwB1yTsP2nPQ390gD6RxtltBfK3oeIH2S6X421hj0cVLUDn1nl0bBG%2BD33WIQdjCHhmPM8DnewmyDF3MI1kqrO4VVvUqToBiZC8%2Fg%3D%3D",
        }
      ];
  return (
    <div className="travel-container">
      {/* Header Section */}
      <div className="headerG3">
        <h1>Goa</h1>
        <h2>Day 3 - Island Visit & Shopping</h2>
        <div className="buttons">
          <button className="nav-button" onClick={onBack}>Previous</button>
        </div>
      </div>
      <div className="content">
        <h2 className="section-title">Activities</h2>
        <div className="activity-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card">
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

export default Goa3;
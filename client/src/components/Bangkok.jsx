/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const BangkokPackage = ({ onCurrentPage }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div>
      {/* Header Section */}
      <div
        style={{
          width: "1200px",
          height: "250px",
          background:
            "url(https://t3.ftcdn.net/jpg/01/22/39/58/360_F_122395817_jAct5bO49wI6pisZHdUP9NwtW42mrynQ.jpg) no-repeat center",
          color: "white",
          textAlign: "left",
          padding: "50px 0",
          backgroundSize: "100% 100%",
        }}
      >
        <h1 style={{ marginLeft: "10px" }}>Bangkok Packages</h1>
        <br />
        <button
          style={{
            backgroundColor: hoveredButton === "previous" ? "#0055aa" : "#003366",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginLeft: "10px",
            padding: "10px 15px",
            transition: "background-color 0.3s ease",
          }}
          onClick={() => onCurrentPage("PlacardsTable")}
          onMouseEnter={() => setHoveredButton("previous")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          Previous
        </button>
      </div>

      <br />
      <p style={{ textAlign: "center", padding: "0 20px" }}>
      Explore the vibrant streets, majestic temples, and bustling markets of Bangkok with a Bangkok tour package. The capital of Thailand, and one of the most popular tourist destinations in South East Asia, Bangkok welcomes travelers from all over the world for an unforgettable Bangkok trip. A Bangkok tour package will take travellers on a whirlwind tour of the city, starting from the serene backwaters to the crowded marketplaces, from the vibrant upscale malls to the fragrant street food stalls. Our Bangkok packages cover all the top attractions of the region. With winters being the best time to visit the city and book Bangkok holiday packages, Bangkok Travel has something or the other to offer for people of all ages, all mindsets and from all walks of life. So, book your tour packages to Bangkok now. A Bangkok trip package is a great way to enjoy an exciting holiday, which is also replete with comfort and the occasional shopping excursions.
      Bangkok travel allows you to experience the enchanting blend of ancient temples and modern skyscrapers, bustling street markets and serene river cruises. Bangkok, where the old and the new harmoniously coexist, invites you to explore a world of endless wonders.
      </p>

      <div style={{ textAlign: "center" }}>
        <div style={{ marginTop: "50px", width: "100%", padding: "10px" }}>
          {/* Budget Package */}
          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              width: "100%",
              margin: "0 auto",
              textAlign: "center",
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
          >
            <table>
              <tr>
                <td rowSpan="2">
                  <img
                    src="https://president-tailors.com/wp-content/uploads/2023/11/Bangkok-1.webp"
                    alt="Budget Friendly Itinerary"
                    style={{ width: "300px", height: "300px", borderRadius: "10px" }}
                  />
                </td>
                <td>
                  <h3><b>Budget Friendly Itinerary</b></h3>
                  <p>Total Estimated Budget for 3 days: ₹15,000 - ₹20,000 per person.</p>
                  <p><b>Price Breakdown</b></p>
                  <p>Accommodation(Budget Hostels & Guesthouses): ₹1,500 - ₹4,500(₹500 - ₹1,500 per night)</p>
                  <p>Food(Street Food and Local Eateries): ₹2,000 - ₹3,500(₹600 - ₹1,200 per day)</p>
                  <p>Transportation(BTS, Tuk-Tuks, Shared Cabs): ₹1,800 - ₹2,500</p>
                  <p>Attractions & Sightseeing: ₹4,000 - ₹5,500</p>
                  <p>Shopping & Miscellaneous: ₹2,500 - ₹3,500</p>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    style={{
                      backgroundColor: hoveredButton === "budget" ? "#0055aa" : "#003366",
                      color: "white",
                      padding: "10px",
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                    onClick={() => onCurrentPage("Bangkok1")}
                    onMouseEnter={() => setHoveredButton("budget")}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    Get Details
                  </button>
                </td>
              </tr>
            </table>
          </div>

          <br />

          {/* Luxury Package */}
          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              width: "100%",
              margin: "0 auto",
              textAlign: "center",
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
          >
            <table>
              <tr>
                <td rowSpan="2">
                  <img
                    src="https://www.travelplusstyle.com/wp-content/uploads/2021/05/Exterior_Facade.jpg"
                    alt="Luxury Itinerary"
                    style={{ width: "300px", height: "300px", borderRadius: "10px" }}
                  />
                </td>
                <td>
                  <h3><b>Luxury Itinerary</b></h3>
                  <p>Total Estimated Budget for 3 days: ₹2,00,000 - ₹2,50,000 per person.</p>
                  <p><b>Price Breakdown</b></p>
                  <p>5-Star Luxury Stay(Mandarin Oriental Bangkok, The Peninsula, or Siam Kempinski): ₹60,000 - ₹80,000 for 3 nights</p>
                  <p>Private Transfers(Luxury SUV, Limo): ₹15,000 - ₹20,000</p>
                  <p>Fine Dining & Beverages(Michelin-star restaurants, rooftop bars, afternoon tea): ₹25,000 - ₹35,000</p>
                  <p>Private Tours & VIP Experiences(Boat tours, temples, spa, shopping with personal stylist): ₹45,000 - ₹55,000</p>
                  <p>Wellness & Spa Treatments: ₹15,000 - ₹25,000</p>
                  <p>Miscellaneous(Shopping, Clubbing, Extras): ₹20,000 - ₹30,000</p>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    style={{
                      backgroundColor: hoveredButton === "luxury" ? "#0055aa" : "#003366",
                      color: "white",
                      padding: "10px",
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                    onClick={() => onCurrentPage("BangkokL1")}
                    onMouseEnter={() => setHoveredButton("luxury")}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    Get Details
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BangkokPackage;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const BudgetSikkim = ({ onCurrentPage }) => {
  const [hoveredButton, setHoveredButton] = useState(null);
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "250px",
          background:
            "url(https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/panorama-from-dzongri-top-sikkim-amitabha-gupta.jpg) no-repeat center",
          color: "white",
          textAlign: "left",
          padding: "50px 0",
          backgroundSize: "100% 100%",
        }}
      >
        <h1 style={{ marginLeft: "10px" }}>Sikkim Packages</h1>
        <br></br>
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
      <br></br>
      <p style={{ textAlign: "center", padding: "0 20px" }}>
      If you want to enjoy the natural ambiance and the vicinity of Sikkim & Gangtok, our cheap & luxury tour packages allow you to explore the ethnical blend of the Lepchas, Bhutias, Nepalis and their culture, tradition, the way they live and many more things about them. Our special Sikkim tour packages will drive you to the highest mountain passes of the world which also acted as a major part on the ancient trade route. We understand your travelling needs and hence we have designed Sikkim-Gangtok tour packages, to give you entirely memorable experience.
      </p>
      <div style={{ textAlign: "center" }}>
        <div style={{ marginTop: "50px", width: "100%", padding: "10px" }}>
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
                    src="https://travelgangtok.com/storage/815/01J7ADP49WHTVW5W45JHX9ZSWF.jpg"
                    alt="Budget Friendly Itinerary"
                    style={{ width: "300px", height: "300px", borderRadius: "10px" }}
                  />
                </td>
                <td>
                  <h3><b>Budget Friendly Itinerary</b></h3>
                  <p>Total Estimated budget for 3 days: ₹8,000 to ₹12,000(Approx.) per person.</p>
                  <p><b>Price Breakdown</b></p>
                  <p>Accommodation(Budget hotels, homestays): ₹1,500 - ₹3,500(₹500 - ₹1,200 per night)</p>
                  <p>Food(Local eateries, street food): ₹600 - ₹1,200 per day</p>
                  <p>Transportation(Shared cabs, local buses): ₹600 - ₹1,000 per day</p>
                  <p>Sightseeing & Entry Fees: ₹2,500 - ₹3,500(for all attractions)</p>
                  <p>Miscellaneous(Shopping, Extras): ₹1,000 - ₹2,000</p>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    style={{backgroundColor: hoveredButton === "budget" ? "#0055aa" : "#003366", color: "white", padding: "10px", border: "none", cursor: "pointer",transition: "background-color 0.3s ease", }}
                    onClick={() => onCurrentPage("Sikkim1")}
                    onMouseEnter={() => setHoveredButton("budget")}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    Get Details
                  </button>
                </td>
              </tr>
            </table>
          </div>
          <br></br>
          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              width: "100%",
              margin: "0 auto",
              textAlign: "center",
              backgroundColor: "#fff",
              borderRadius: "10px",
              display: "flexbox",
            }}
          >
            <table>
              <tr>
                <td rowSpan="2">
                  <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/0a/e1/af/caption.jpg?w=1200&h=-1&s=1"
                    alt="Luxury Itinerary"
                    style={{ width: "300px", height: "300px", borderRadius: "10px" }}
                  />
                </td>
                <td>
                  <h3><b>Luxury Itinerary</b></h3>
                  <p>Total Estimated Budget for 3 days: ₹90,000 per perosn.</p>
                  <p><b>Price Breakdown</b></p>
                  <p>Luxury Stay(2 nights): ₹45,000</p>
                  <p>Private Transfers & SUV: ₹15,000</p>
                <p>Fine Dining & Beverages: ₹10,000</p>
                <p>Guided Tours & VIP Access: ₹12,000</p>
                <p>Spa & Wellness: ₹8,000</p>
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
                      onClick={() => onCurrentPage("SikkimL1")}
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

export default BudgetSikkim;

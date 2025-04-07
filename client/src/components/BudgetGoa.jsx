/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./BudgetGoa.css";
const BudgetGoa = ({ onCurrentPage }) => {
  return (
    <div>
    <div className="headerG">
      <h1>Goa Packages</h1><br></br>
      <div>
      <button className="back-button" onClick={() => onCurrentPage("PlacardsTable")}>Previous</button>
      </div>
    </div><br></br>
    <div>
    <p> The amazing city of Goa is full of scenic beaches, outstanding churches and incredible forts. The land of sand, sea surf and sun is not just beautiful but romantic as well. This is why; Goa holiday packages for couples are always in demand. The endless fun opportunities in this magical city are meant to offer endless fun. From honeymooners to nightlife enthusiasts and from fun freaks to serenity seekers, Goa offers something to everyone. So, family holiday packages in Goa are also very popular. No matter why you are going to visit Goa, it welcomes you with lots of leisure & shopping activities, nightlife and high spirits. Go Goa!</p>
    </div>
    <div className="banaras-container">
      <div className="packages">
        <div className="ackage-card">
            <table>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td rowSpan="2"><img src="https://championsyachtclub.com/blog/wp-content/uploads/2021/09/Budget-friendly-Trip-to-Goa.jpg" alt="Budget Friendly Itinerary" /></td>
                    <td><h3><b>Budget Friendly Itinerary</b></h3>
                    <p>Total Estimated budget for 3 days: ₹5,000 (Approx.) per person.</p>
                    <p><b>Price Breakdown</b></p>
                    <p>Budget Stay (Hostel/Guesthouse): ₹800 - ₹2,000 per night</p>
                    <p>Food (Local Cafés & Shacks): ₹300 - ₹700 per meal</p>
                    <p>Bike Rental (Scooter): ₹300 - ₹500 per day</p>
                    <p>Local Transport (Buses, Ferries, Auto-Rickshaws): ₹500 - ₹1,000 for 3 days</p>
                    <p>Sightseeing (Dudhsagar, Spice Plantation, Cruise, etc.): ₹1,500 - ₹3,000</p>
                    <p>Shopping & Miscellaneous: ₹1,000 - ₹2,000</p>
                    </td>
                </tr>
                <tr>
                    <td><button className="next-button" onClick={() => onCurrentPage("Goa1")}>Get Details</button></td>
                </tr>
            </table>
        </div><br></br>
        <div className="ackage-card">
            <table>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td rowSpan="2"><img src="https://assets.serenity.co.uk/37000-37999/37673/720x480.jpg" alt="Luxury Itinerary" /></td>
                    <td><h3><b>Luxury Itinerary</b></h3>
                    <p>Total Estimated Budget for 3 days: ₹135,000 (Approx.).</p>
                    <p><b>Price Breakdown</b></p>
                    <p>Luxury Resort Stay (Leela, Taj): ₹20,000 - ₹35,000 per night</p>
                    <p>Fine Dining & Gourmet Meals: ₹5,000 - ₹10,000 per meal.</p>
                    <p>Private Yacht & Cruises: ₹20,000 - ₹40,000</p>
                    <p>Spa & Wellness Sessions: ₹5,000 - ₹10,000</p>
                    <p>Private Tours & Guided Experiences: ₹10,000 - ₹20,000</p>
                    <p>Watersports & Island Hopping: ₹10,000 - ₹20,000</p>
                    <p>Luxury Transportation (Private Car): ₹5,000 - ₹10,000 for 3 days</p>
                    </td>
                </tr>
                <tr>
                    <td><button className="next-button" onClick={() => onCurrentPage("GoaL1")}>Get Details</button></td>
                </tr>
            </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BudgetGoa;

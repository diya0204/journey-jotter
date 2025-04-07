/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./UBudget.css";
const BudgetUdaipur = ({ onCurrentPage }) => {
  return (
    <div>
    <div className="header4">
      <h1>Udaipur Packages</h1><br></br>
      <div>
      <button className="back-button" onClick={() => onCurrentPage("PlacardsTable")}>Previous</button>
      </div>
    </div><br></br>
    <div>
    <p> Get best deals on Udaipur Tour Packages. Book customizable Udaipur City Tour Packages from JourneyJotter and enjoy your holiday to the fullest.Udaipur, also known as Venice of the East, located in Rajasthan, is one of the major tourist hubs of India. The medieval capital of Mewar kingdom, Udaipur is a stunning destination which is famous for lakes, Aravali hills, royal palaces, and lively markets. Therefore, a variety of Udaipur Tour Packages are available for tourists from all around the globe who want to explore the city rich culture, authentic food, lifestyle, exceptional architecture, charming royal residences and historical background. <br></br>
        Udaipur Tour Packages are not only about the budget but also about providing best traveling experience. Integrating a number of services like Udaipur Sightseeing Tour, a stay at best accommodations, exploring the rich culture, lifestyle, colorful clothing, flavourful food, and shopping are some of the advantages it has. To provide all such services to the travelers, these holiday packages for Udaipur incorporate a detailed tour itinerary which is crafted by our travel experts to ensure a planned, organized, and hassle-free vacation. Moreover, these itineraries can also be customized according to the requirements and personal preferences of the travelers.
        </p>
    </div>
    <div className="udaipur-container">
      <div className="packages">
        <div className="package-card">
            <table>
              <tbody>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td rowSpan="2"><img src="https://miro.medium.com/v2/resize:fit:1400/0*-8UUVIzg8d_9f8Yv" alt="Budget Friendly Itinerary" /></td>
                    <td><h3><b>Budget Friendly Itinerary</b></h3>
                    <p>Total Estimated budget for 3 days: ₹7,000 to ₹11,000 (Approx.) per person.</p>
                    <p><b>Price Breakdown</b></p>
                    <p>Accommodation: ₹1,500 to ₹3,000 per night (Budget hotels/guesthouses)</p>
                    <p>Food: ₹500 - ₹1,000 per day</p>
                    <p>Transportation (Local): ₹500 to ₹800 per day (auto-rickshaw, local buses, or taxis)</p>
                    <p>Sightseeing & Activities (Entry Fees): ₹2,000 - ₹2,500 for 3 days (City Palace, Jag Mandir, Sajjangarh, Boat Ride, etc.)</p>
                    <p>Miscellaneous Expenses (Shopping, Extras): ₹1,000 - ₹2,000 </p>
                    </td>
                </tr>
                <tr>
                    <td><button className="next-button" onClick={() => onCurrentPage("TravelItinerary")}>Get Details</button></td>
                </tr>
              </tbody>
            </table>
        </div><br></br>
        <div className="package-card">
            <table>
              <tbody>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td rowSpan="2"><img src="https://imgmediagumlet.lbb.in/media/2024/12/676a7135279f13310773faf5_1735029045804.jpg" alt="Luxury Itinerary" style={{ width: "495px"}} /></td>
                    <td><h3><b>Luxury Itinerary</b></h3>
                    <p>Total Estimated Budget for 3 days: ₹115,500 (Approx.) per person.</p>
                    <p><b>Price Breakdown</b></p>
                    <p>Accommodation: Approx. ₹25,000-40,000 per night for a luxury room (Taj Lake Palace or Leela Palace)</p>
                    <p>Food and Dining: ₹1,500 - ₹3,000 per meal per person.</p>
                    <p>Transportation (Private Car Hire or Taxi): ₹3,500 - ₹7,000 per day</p>
                    <p>Sightseeing and Boat Rides: ₹6,000 - ₹12,000 (Private Boat Ride on Lake Pichola, City Palace, Saheliyon ki Bari, Fateh Sagar Boat Ride,Bagore Ki Haveli Dance Show, Sajjangarh etc.)</p>
                    <p>Spa and Wellness: ₹3,000 - ₹6,000 per person</p></td>
                </tr>
                <tr>
                    <td><button className="next-button" onClick={() => onCurrentPage("UdaipurL1")}>Get Details</button></td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BudgetUdaipur;

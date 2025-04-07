/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./BudgetBanaras.css";
const BudgetBanaras = ({ onCurrentPage }) => {
  return (
    <div>
    <div className="headerB">
      <h1>Banaras Packages</h1><br></br>
      <div>
      <button className="back-button" onClick={() => onCurrentPage("PlacardsTable")}>Previous</button>
      </div>
    </div><br></br>
    <div>
    <p> The city of ghats, known as Varanasi, Banaras, and Kashi, reflects the centuries-old traditions, influences, invasions, and metamorphosis. Not only is Varanasi the oldest city in India but also one of the most ancient in the world. Since it is one of the most important destinations for pilgrims, a Kashi yatra package is a very popular option. Situated on the banks of the holiest river in India - Ganga, this city hypnotizes with its ambience, which one can experience on their Kashi Yatra package. Whether it is the ritualistic Ganga Aarti on Dashashwamedh Ghat where the air reverberates with holy chants, experiencing nirvana at Sarnath, or just shopping for the quintessential Banarasi saree – a Kashi yatra package helps you make memories that stay with you long after you have left the city.<br></br>
        Some people are drawn to Varanasi for a feeling of moksha or salvation while others want to have a glimpse of an ancient civilization through the Banaras tour packages. Others just want to enjoy a boat ride over the mighty Ganges. Whatever your purpose of booking a Varanasi package, Veena World can help you plan the perfect Varanasi sightseeing tour to be included in the cost-effectively priced Varanasi package that you can choose online. Based on your interests and preferences, Veena World offers a wide range of Varanasi tour packages to suit every budget, price, and cost requirement. All you need to do is choose a Varanasi holiday package to get the most out of your Varanasi trip.</p>
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
                    <td rowSpan="2"><img src="https://hindi.cdn.zeenews.com/hindi/sites/default/files/2024/07/29/3090872-banaras-gali.jpg" alt="Budget Friendly Itinerary" /></td>
                    <td><h3><b>Budget Friendly Itinerary</b></h3>
                    <p>Total Estimated budget for 3 days: ₹5,500 - ₹9,000 (Approx.) per person.</p>
                    <p><b>Price Breakdown</b></p>
                    <p>Accommodation: ₹1,000 to ₹2,000 per night (Budget hotels/guesthouses)</p>
                    <p>Food: ₹400 - ₹800 per day</p>
                    <p>Transportation (Local): ₹300 - ₹600 per day (auto-rickshaw, e-rickshaws, shared cabs)</p>
                    <p>Sightseeing & Activities (Entry Fees): ₹500 - ₹1,000 for 3 days (Ramnagar Fort, Sarnath, etc.)</p>
                    <p>Miscellaneous (Shopping, Pooja, Boat Rides, Extras): ₹1,500 - ₹2,000</p>
                    </td>
                </tr>
                <tr>
                    <td><button className="next-button" onClick={() => onCurrentPage("Banaras1")}>Get Details</button></td>
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
                    <td rowSpan="2"><img src="https://www.tourmyindia.com/blog//wp-content/uploads/2020/12/Feature-Varanasi-Luxury-Cruise.jpg" alt="Luxury Itinerary" /></td>
                    <td><h3><b>Luxury Itinerary</b></h3>
                    <p>Total Estimated Budget for 3 days: ₹120,000 (Approx.).</p>
                    <p><b>Price Breakdown</b></p>
                    <p>Luxury Hotel Stay (BrijRama Palace / Taj Nadesar Palace): ₹25,000 - ₹50,000 per night</p>
                    <p>Food and Fine Dining: ₹3,000 - ₹6,000 per meal.</p>
                    <p>Private Boat Rides: ₹4,000 - ₹8,000</p>
                    <p>Sarnath Tour & Private Guide: ₹3,000 - ₹6,000</p>
                    <p>VIP Temple Darshan & Experiences: ₹5,000 - ₹10,000</p>
                    <p>Cultural Activities (Music Show, Silk Tour, etc.): ₹4,000 - ₹8,000</p>
                    <p>Luxury Spa & Wellness: ₹6,000 - ₹12,000</p>
                    <p>Transportation (Private Car for 3 Days): ₹10,000 - ₹20,000</p></td>
                </tr>
                <tr>
                    <td><button className="next-button" onClick={() => onCurrentPage("BanarasL1")}>Get Details</button></td>
                </tr>
            </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BudgetBanaras;

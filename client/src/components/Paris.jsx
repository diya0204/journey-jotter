/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
const ParisPackage = ({ onCurrentPage }) => {
  const [hoveredButton, setHoveredButton] = useState(null);
  return (
    <div>
      <div
        style={{
          width: "1200px",
          height: "250px",
          background:
            "url(https://m.media-amazon.com/images/S/aplus-media-library-service-media/fd588b95-3d64-446d-abdb-e039d11ba1fd.__CR0,0,970,300_PT0_SX970_V1___.jpg) no-repeat center",
          color: "Black",
          textAlign: "left",
          padding: "50px 0",
          backgroundSize: "100% 100%",
        }}
      >
        <h1 style={{ marginLeft: "10px" }}>Paris Packages</h1>
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
      Though your first trip to Paris is going to be all about the Eiffel Tower, there is a lot in this city
of love that you need to explore. The Paris tour packages make sure that you don’t miss any of the must-visit places, giving you the easiest way to explore the town. Right from museum-touring to operas to the shopping, Paris is sure to keep you entertained throughout your stay.
Paris is always crowded with people, be it tourists or localites. Living there permanently is extremely expensive for a person belonging to the middle-class family. But soaking in the goodness that this city has to offer is everybody piece of cake. So, if you are planning a trip to Paris, and opting for Paris packages, it is necessary to circle down the main attractions that you want to visit to get the whole Paris vibes.
Research about the museums, historical places, forts, restaurants, local fests, markets, shopping heaven etc. beforehand. Make dinner reservations well in advance. Since its always crowded and very difficult to find a table on the spot.<br></br>
August is that time of the year where every European is holidaying in some part of the world. You can call it the European tradition to be doing so. Therefore, August is the best time to visit Paris. The city will be less crowded than usual. This way, you can find the best of this city.
A famous and a must visit spot offered by Paris tourism is the huge Disneyland theme park. Adults, children and people of any age group enjoy it here. This theme park is a massive hit with tourists. With thrilling rides such as the roller coaster ride, the theme based restaurants and the fun parades that happen every day are its main attractions. The place is located about 20 miles outside the city area. The closest station is Marne-la-Vallee-Chessy, served by Eurostar trains. Direct shuttle buses are also available from the airport. <br></br>
To thoroughly soak in the Paris culture and live the bygone era, your Paris packages must have at least two days in Paris. More than two days is always a perfect idea since this way you’ll cover entire Paris.
There are plenty of hotels near the theme park site. Luxurious as well budget-friendly hotels can be chosen according to preferences. There’s s a Disney’s Sequoia Lodge, which is recommended for stay during the winter months. If you want your Paris holiday packages to be cost-effective, always opt for hotels that are easy on your pockets. The hotels does not matter as long as you do not care about having an extremely lavish stay.
Paris is a destination fascinated by many. Holidays in Paris are no doubt a cherishable memory. As it is rightly said, if you have ever lived in Paris, then no matter where you go, it stays with you forever.
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
                    src="https://images.squarespace-cdn.com/content/v1/5bbcf00a9b8fe874ed2f03d0/1553944774389-ZPVX64W3KL6XZH7EQ08K/Paris+weekend+guide+%28on+a+budget%29+-+Helena+Bradbury+Travel+Blogger+%7C+how+to+see+Paris+on+a+budget+%7C+where+to+stay+on+a+budget+in+Paris+%7C+paris+for+two+days+%7C+48+hours+in+paris+%7C+what+to+do+with+one+night+in+Paris+%7C+paris+budget+guide+%7C+france+%7C+europe+weekend+city+break+%7C+city+break+paris+%7C+instagram+locations+%7C+what+to+see+and+do+%7C+cheap+places+to+eat+paris+%7C+photography+%7C+city+guide+%7C+wanderlust+%7C+taking+the+bus+from+London+to+Paris+%7C+overnight+bus+to+paris+%7C+how+to+get+from+london+to+paris"
                    alt="Budget Friendly Itinerary"
                    style={{ width: "300px", height: "300px", borderRadius: "10px" }}
                  />
                </td>
                <td>
                  <h3><b>Budget Friendly Itinerary</b></h3>
                  <p>Total Estimated Budget for 3 days: ₹40,000 - ₹55,000 per person.</p>
                  <p><b>Price Breakdown</b></p>
                  <p>Accommodation (Budget Hotels & Hostels): ₹10,000 - ₹15,000</p>
                  <p>Food (Street Cafés, Bistros): ₹6,000 - ₹9,000</p>
                  <p>Transportation (Metro, Bus, Walking): ₹3,000 - ₹5,000</p>
                  <p>Attractions & Sightseeing: ₹10,000 - ₹15,000</p>
                  <p>Shopping & Miscellaneous: ₹5,000 - ₹7,000</p>
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
                    onClick={() => onCurrentPage("Paris1")}
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
                    src="https://theluxurytravelbook.com/storage/media/images/general/France-Paris-holiday-apartments-rue-jean-goujon-luxury-travel-TLTB-4b84b0.jpg"
                    alt="Luxury Itinerary"
                    style={{ width: "300px", height: "300px", borderRadius: "10px" }}
                  />
                </td>
                <td>
                  <h3><b>Luxury Itinerary</b></h3>
                  <p>Total Estimated Budget for 3 days: ₹6,75,000 – ₹10,80,000 per person.</p>
                  <p><b>Price Breakdown</b></p>
                  <p>Luxury 5-Star Hotel(3 Nights): ₹2,25,000+</p>
                  <p>Luxury Transportation(Chauffeur & Transfers): ₹54,000+</p>
                  <p>Shopping & Extras(Variable): ₹90,000+</p>
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
                    onClick={() => onCurrentPage("ParisL1")}
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

export default ParisPackage;

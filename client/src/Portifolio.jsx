import React from "react";

const Portifolio = () => {
  return (
    <div className="portfolio section container py-12">
      <div className="secContainer grid md:grid-cols-2 gap-8 items-center">
        <div className="leftContainer space-y-6">
          <div className="secHeading">
            <h3 className="text-2xl font-bold text-gray-800">WHY SHOULD YOU CHOOSE US</h3>
            <p className="text-gray-600">
              "Our AI-powered platform simplifies trip planning with smart recommendations and budget-friendly itineraries."
            </p>
            <div className="m-10 ">
        <img src="IMAGES\9434413.png" className="w-80 h-70 object-contain"/>
      </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="singlePortfolio flex items-center space-x-4 bg-white p-4 shadow-lg rounded-lg">
              <div className="info text-gray-700">
                <span className="font-bold text-lg">{feature.title}</span>
                <p className="text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    

  );
};

const features = [
  { title: "Time-Saving", description: "AI-generated plans reduce hours of research." },
  { title: "Budget-Friendly", description: "Helps you plan and track expenses efficiently." },
  { title: " Customizable Itineraries ", description: "Adjust plans based on your needs." },
  { title: " Smart Recommendations", description: "Personalized suggestions for food, transport, and activities." },
  { title: "Real-Time Assistance", description: "Get location-based insights while traveling." },
];

export default Portifolio;
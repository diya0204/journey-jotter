import React from "react";

const Pricing = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-purple-100 p-8">
 
      <div className="text-center mb-12">
        <h3 className="text-lg font-semibold text-purple-600">Pricing</h3>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Choose the right plan for you
        </h1>
        <p className="text-gray-600 mt-4 max-w-xl">
        Select an affordable plan packed with features like AI itinerary planning, an expense tracker, and exclusive membership perks.
        </p>
      </div>

    
      <div className="grid md:grid-cols-2 gap-8">

        <div className="relative group">
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 transform group-hover:scale-105 group-hover:z-10">
            <h3 className="text-lg font-semibold text-purple-600">Personal</h3>
            <p className="text-4xl font-bold text-gray-900 mt-2">Rs.30</p>
            <span className="text-gray-500 text-sm">/month</span>
            <p className="text-gray-600 mt-4">
              The perfect plan if you're just getting started.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✔ Expense tracking</li>
              <li>✔ Unlimited itinerary generation</li>
              <li>✔ Exclusive travel deals</li>
              <li>✔ Email support</li>
              <li>✔ Priority customer service</li>
            </ul>
            <button className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
              Get started today
            </button>
          </div>
        </div>

  
        <div className="relative group">
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 transform group-hover:scale-105 group-hover:z-10">
            <h3 className="text-lg font-semibold text-purple-600">Group</h3>
            <p className="text-4xl font-bold text-gray-900 mt-2">Rs.99</p>
            <span className="text-gray-500 text-sm">/month</span>
            <p className="text-gray-600 mt-4">
            A plan designed for groups traveling together with shared tools
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✔ Group itinerary sharing</li>
              <li>✔ Split expense tracking</li>
              <li>✔ Exclusive group travel discounts</li>
              <li>✔ Custom travel analytics</li>
            </ul>
            <button className="mt-6 w-full border border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition">
              Get started today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

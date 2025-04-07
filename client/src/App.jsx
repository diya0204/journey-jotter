import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./Signup";
import Login from "./Login";
import About from './About';
import Dashboard from "./Dashboard";
import Contact from './Contact';
import Portifolio from "./Portifolio";
import Create from './Create';
import Viewtrip from './view-trip/[tripid]';
import Packages from "./Packages";
import ExpenseTracker from "./ExpenseTracker"; 
import MyTrips from './MyTrips';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/portifolio' element={<Dashboard />} />
          <Route path="/view-trip/:tripId" element={<Viewtrip />} />
          <Route path="/ExpenseTracker" element={<ExpenseTracker />} />
          <Route path="/myTrip" element={<MyTrips />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";

const PopLogin = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/Login");
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black">
      {/* Welcome Message */}
      <h1 className="text-4xl font-bold text-white text-center z-20 relative">
        Welcome to Journey Jotter
      </h1>

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/IMAGES/3569294-uhd_3840_2160_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
    </div>
  );
};

export default PopLogin;

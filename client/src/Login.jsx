import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "boxicons/css/boxicons.min.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { name, password })
      .then((result) => {
        if (result.data === "Success") {
          // Store user data in localStorage similar to Google login
          const userData = {
            name: name,
            email: name, // Using username as email since we don't have email in regular login
            picture: null // No picture available for regular login
          };
          localStorage.setItem('user', JSON.stringify(userData));
          navigate("/Create");
        } else {
          alert("Invalid credentials. Please try again.");
        }
      })
      .catch((err) => console.error(err));
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert("An email has been sent to change your password.");
  };

  return (
    <div className="container-fluid vh-100 p-0 d-flex align-items-center justify-content-center position-relative">
      {/* Video Background */}
      <div className="position-absolute w-100 h-100 overflow-hidden">
        <video autoPlay muted loop id="bg-video" className="w-100 h-100" style={{ objectFit: "cover" }}>
          <source src="./IMAGES/80872-573482019_tiny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Login Form */}
      <div className="card p-4 shadow-lg" style={{ width: "22rem", zIndex: 1 }}>
        <div className="card-header text-center bg-primary text-white">
          <h5 className="mb-0">Login</h5>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bx bx-user"></i>
                </span>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bx bx-lock-alt"></i>
                </span>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input type="checkbox" id="remember" className="form-check-input" />
                <label htmlFor="remember" className="form-check-label" style={{ fontSize: "12px" }}>
                  Remember me
                </label>
              </div>
              <a href="#" onClick={handleForgotPassword} style={{ fontSize: "12px" }}>
                Forgot password?
              </a>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>

            <div className="text-center mt-3">
              <p className="mb-0" style={{ fontSize: "14px" }}>
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
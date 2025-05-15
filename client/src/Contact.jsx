import React, { useState } from 'react';
import axios from 'axios';
import './Dashboard.css'; 
import './Contactus.css';
import { useNavigate } from "react-router-dom";
import Header from './components/Header';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError('Please fill out all fields before submitting.');
      return;
    }

    axios.post('http://localhost:3001/contact', { name, email, message })
      .then((result) => {
        console.log(result);
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        navigate('/'); // Redirect to homepage after submission
      })
      .catch((err) => {
        console.error('Error submitting contact form:', err);
        // Optionally, set a more specific error message based on the response
        setError('Failed to send message. Please try again.');
      });
  };

  return (
    <div>
      <Header />
      <div className="mt-24 px-4 py-8 md:px-8 lg:px-16">
        <video className="video-background" autoPlay muted loop>
          <source src="/IMAGES/80872-573482019_tiny.mp4" type="video/mp4" />
        </video>

        <div className="contact-container">
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" placeholder="Write your message here" value={formData.message} onChange={handleChange} required />

            <button type="submit">Send Message</button>
          </form>

          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;

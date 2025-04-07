const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const userModel = require("./models/user");
const contactModel = require("./models/contact"); // 

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/user")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const PLACES_API_BASE_URL = 'https://places.googleapis.com/v1';
const GOOGLE_API_KEY = process.env.VITE_GOOGLE_PLACE_API_KEY;

// Proxy endpoint for Places API
app.post('/api/places/search', async (req, res) => {
  try {
    const response = await axios.post(
      `${PLACES_API_BASE_URL}/places:searchText`,
      req.body,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': GOOGLE_API_KEY,
          'X-Goog-FieldMask': 'places.displayName,places.photos,places.id,places.formattedAddress,places.location,places.rating,places.userRatingCount,places.primaryTypeDisplayName'
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Places API Error:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

// Proxy endpoint for Place Photos
app.get('/api/places/photo/:photoName', async (req, res) => {
  try {
    const response = await axios.get(
      `${PLACES_API_BASE_URL}/${req.params.photoName}/media`,
      {
        params: {
          maxHeightPx: 400,
          maxWidthPx: 400,
          key: GOOGLE_API_KEY
        },
        responseType: 'stream'
      }
    );
    response.data.pipe(res);
  } catch (error) {
    console.error('Photo API Error:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

app.get("/api/places/textsearch", async (req, res) => {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
      params: {
        ...req.query,
        key: process.env.VITE_GOOGLE_PLACE_API_KEY || req.query.key
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error proxying to Places API:', error);
    res.status(500).json({ error: 'Failed to fetch from Places API' });
  }
});

app.post("/login", async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await userModel.findOne({ name });
    if (!user) return res.status(404).json("No record existed");
    if (user.password !== password) return res.status(400).json("The password is incorrect");
    res.status(200).json("Success");
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/register", async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/contact", async (req, res) => {
  try {
    console.log('Received contact form data:', req.body);  
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      console.log('Missing required fields');  
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new contactModel({ name, email, message });
    console.log('Created new contact model:', newContact); 
    const savedContact = await newContact.save();
    console.log('Successfully saved contact:', savedContact);  
    
    res.status(201).json({ message: "Message received!", contact: savedContact });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

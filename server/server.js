const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Google Places API proxy endpoint
app.post('/api/places/search', async (req, res) => {
  try {
    const response = await axios.post('https://places.googleapis.com/v1/places:searchText', req.body, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': process.env.GOOGLE_API_KEY,
        'X-Goog-FieldMask': 'places.displayName,places.photos,places.id,places.formattedAddress,places.location,places.rating,places.userRatingCount,places.primaryTypeDisplayName'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Proxy error:', error.response?.data || error.message);
    res.status(500).json({ error: error.message });
  }
});

// Google Places Photo proxy endpoint
app.get('/api/places/photo', async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({ error: 'Photo name is required' });
    }

    const response = await axios.get(
      `https://places.googleapis.com/v1/${name}/media`,
      {
        headers: {
          'X-Goog-Api-Key': process.env.GOOGLE_API_KEY
        },
        params: {
          maxHeightPx: 1000,
          maxWidthPx: 1000
        },
        responseType: 'stream'
      }
    );

    response.data.pipe(res);
  } catch (error) {
    console.error('Photo proxy error:', error.response?.data || error.message);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));

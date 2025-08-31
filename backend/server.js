const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

// --- Configure CORS (Temporarily Disabled for Debugging) ---
// This will allow requests from ANY origin.
app.use(cors());

/*
// --- Original Stricter CORS Configuration ---
const allowedOrigins = [
  'http://localhost:5173', // Your local frontend for development
  process.env.FRONTEND_URL  // Your deployed frontend URL (add this to your .env and Vercel env variables)
].filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));
*/

// --- Middleware ---
app.use(express.json());

// --- Routes ---
const projectRoutes = require('./routes/projects');
app.use('/api/projects', projectRoutes);


// --- Connect to DB & Start Server ---
// This ensures we don't start listening for requests until the database is connected.
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.error('Could not connect to MongoDB:', err);
  });


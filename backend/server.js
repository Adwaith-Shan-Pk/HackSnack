const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

// --- Configure CORS ---
const allowedOrigins = [
  'http://localhost:5173', 
  process.env.FRONTEND_URL  
].filter(Boolean); // This removes any falsy values (like undefined) if FRONTEND_URL is not set

const corsOptions = {
  origin: (origin, callback) => {
    // For this project, we want to be strict and only allow our frontend.
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));

// --- Middleware ---
app.use(express.json());

// --- Routes ---
const projectRoutes = require('./routes/projects');
app.use('/api/projects', projectRoutes);


// --- Connect to DB & Start Server ---
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


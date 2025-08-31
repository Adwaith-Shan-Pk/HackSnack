require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const projectRoutes = require('./routes/projects');

const app = express();
const PORT = process.env.PORT || 5001;

// --- Secure CORS Configuration ---
const allowedOrigins = [
  'http://localhost:5173',
'https://hacksnack.shan.is-a.dev', // Local dev environment
  process.env.FRONTEND_URL // Deployed frontend URL from .env
];

const corsOptions = {
  origin: (origin, callback) => {

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
// --- End of CORS Configuration ---

app.use(express.json());

// A simple welcome route
app.get('/', (req, res) => {
  res.send('Welcome to the Project Showcase API');
});

app.use('/api/projects', projectRoutes);

// Connect to DB and start server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Successfully connected to MongoDB!');
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error('Could not connect to MongoDB:', error.message);
    process.exit(1);
  }
};

startServer();


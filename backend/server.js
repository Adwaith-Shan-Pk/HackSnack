const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 
const app = express();
const PORT = process.env.PORT || 5001;

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- MongoDB Connection ---
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
    console.error("FATAL ERROR: MONGO_URI is not defined in the .env file.");
    process.exit(1); 
}

mongoose.connect(mongoURI)
    .then(() => console.log("Successfully connected to MongoDB Atlas!"))
    .catch(err => console.error("MongoDB connection error:", err));



// A simple test route to ensure the server is running
app.get('/', (req, res) => {
    res.send('<h1>Blog API </h1><p>Welcome! The server is up and running.</p>');
});

// Import and use the routes for projects/blogs
const projectRoutes = require('./routes/projects');
app.use('/api/projects', projectRoutes);


// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

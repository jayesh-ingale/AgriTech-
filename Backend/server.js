const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors'); // Add this
require("dotenv").config();

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

console.log("✅ Auth routes should be available at /api/auth");

const PORT = process.env.PORT || 3000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
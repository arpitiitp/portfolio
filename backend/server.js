const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/contact', require('./routes/contactRoutes'));

// Test route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Portfolio API!', status: 'live' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Secure Server initialized on port ${PORT}`));

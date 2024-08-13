const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();

// Load environment variables from .env file
dotenv.config({ path: './config.env' });

// Connect to MongoDB
require('./db/conn');

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// Import User model
const User = require('./model/userSchema');

// Link the router folder
app.use(require('./router/auth')); // Ensure this file exports your routes

const PORT = process.env.PORT || 5000;

// Middleware function
const middleware = (req, res, next) => {
    console.log('Hello middleware');
    next(); // Pass control to the next middleware
};

// Routes
app.get('/', (req, res) => {
    res.send('Hello world from the server');
});

app.get('/about', middleware, (req, res) => {
    res.send('About me');
});

app.get('/contact', (req, res) => {
    res.send('Contact form');
});

app.get('/signin', (req, res) => {
    res.send('Login here');
});

app.get('/signup', (req, res) => {
    res.send('Register your account here');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});

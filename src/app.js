// Import the necessary modules
const express = require('express');
const path = require('path');

// Create an instance of Express
const app = express();

// Set the public directory to serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Define routes for serving HTML files
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../views/index.html')));
app.get('/catalogue', (req, res) => res.sendFile(path.join(__dirname, '../views/catalogue.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, '../views/contact.html')));

// Start the server on a specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

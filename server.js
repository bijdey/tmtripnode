// Required Modules
const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const path = require('path');

// Initialize App
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static Files 
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use('/', require('./routes/mainRoutes'));

// Start Server
http.createServer(app).listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`http://localhost:${port}`);
});

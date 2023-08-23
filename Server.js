// Load environment variables from the .env file
require('dotenv').config({path: './config/.env'});

// Import the required packages and modules
const express = require('express');                                     // Import Express framework        
const app = express();                                                  // Create an instance of Express application
const mongoose = require('mongoose');                                   // Import Mongoose for MongoDB interactions
const routes = require('./routes/UsersRoutes');                         // Import user routes module

const port = process.env.PORT || 3000;                                  // Set the server port

// Connect to the MongoDB database using the provided URI
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB')                              // Log successful database connection
    })
    .catch(err => {
        console.log('Error connecting to MongoDB', err)                  // Log error if database connection fails
    })

app.use(express.json());                                                 // Parse incoming JSON data in requests

app.use('/', routes);                                                    // Use the imported user routes as middleware for handling routes

// Start the server and listen for incoming requests on the specified port
app.listen (port, () => {
    console.log(`Server is running at port http://localhost:${port}`)    // Log that the server is running
})
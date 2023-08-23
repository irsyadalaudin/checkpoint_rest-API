const express = require('express');                                      // Import Express framework
const routes = express.Router();                                         // Create a Router instance
const Users = require('../models/Users');                                // Import the Users model

/* GET all users  */
routes.get('/', async (req, res)=>{
    try {
        const users = await Users.find();                                // Retrieve all users from the database
        res.status(200).json({users});                                   // Respond with the retrieved users
    } catch (err) {
        res.status(400).json({message: 'Error getting users'});          // Handle error if fetching users fails
    }
})

/* POST a new user */
routes.post('/users', async (req, res) => {
    const {name, userName, email, password} = req.body;                  // Extract user data from the request body
    try {
        const newUser = new Users({name, userName, email, password});    // Create a new user instance
        await newUser.save();                                            // Save the new user to the database
        res.status(200).json(newUser);                                   // Respond with the newly created user
    } catch (err) {
        res.status(400).json({message: 'Error creating new user'});      // Handle error if creating a user fails             
    }
});

/* PUT (update) a user by ID */
routes.put('/users/:id', async (req, res) => {
    const {id} = req.params;                                                                                     // Extract user ID from the request parameters
    const {name, userName, email, password} = req.body;                                                          // Extract updated user data from the request body
    try {
        const updateUser = await Users.findByIdAndUpdate(id, {name, userName, email, password}, {new: true});    // Update the user and retrieve the updated version
        res.status(200).json(updateUser);
    } catch (err) {
        res.status(400).json({message: 'Error updating User'});                                                  // Handle error if updating the user fails
    }
});

/* DELETE a user by ID */
routes.delete('/users/:id', async (req, res) => {
    const {id} = req.params;                                              // Extract user ID from the request parameters
    try {
        const deleteUser = await Users.findByIdAndDelete(id);             // Delete the user by ID
        res.status(200).json(deleteUser);                                 // Respond with the deleted user
    } catch (err) {
        res.status(400).json({message: 'Error deleting User'})            // Handle error if deleting the user fails
    }
}); 

module.exports = routes;                                                  // Export the defined routes
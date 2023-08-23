const express = require('express');
const routes = express.Router();
const Users = require('../models/Users');

/* GET all users  */
routes.get('/', async (req, res)=>{
    try {
        const users = await Users.find();
        res.status(200).json({users})
    } catch (err) {
        res.status(400).json({message: 'Error getting users'})
    }
})

/* POST a new user */
routes.post('/users', async (req, res) => {
    const {name, userName, email, password} = req.body;
    try {
        const newUser = new Users({name, userName, email, password});
        await newUser.save();
        res.status(200).json(newUser);
    } catch (err) {
        res.status(400).json({message: 'Error creating new user'})
    }
});

/* PUT (update) a user by ID */
routes.put('/users/:id', async (req, res) => {
    const {id} = req.params;
    const {name, userName, email, password} = req.body;
    try {
        const updateUser = await Users.findByIdAndUpdate(id, {name, userName, email, password}, {new: true});
        res.status(200).json(updateUser);
    } catch (err) {
        res.status(400).json({message: 'Error updating User'});
    }
});

/* DELETE a user by ID */
routes.delete('/users/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const deleteUser = await Users.findByIdAndDelete(id);
        res.status(200).json(deleteUser);
    } catch (err) {
        res.status(400).json({message: 'Error deleting User'})
    }
}); 

module.exports = routes;
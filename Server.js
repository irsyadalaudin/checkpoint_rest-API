require('dotenv').config({path: './config/.env'});
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const Users = require('./models/Users');
const routes = require('./routes/UsersRoutes');

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(err => {
        console.log('Error connecting to MongoDB', err)
    })

app.use(express.json());

app.use('/', routes);

// /* GET all users  */
// app.get('/', async (req, res)=>{
//     try {
//         const users = await Users.find();
//         res.status(200).json({users})
//     } catch (err) {
//         res.status(400).json({message: 'Error getting users'})
//     }
// })

// /* POST a new user */
// app.post('/users', async (req, res) => {
//     const {name, userName, email, password} = req.body;
//     try {
//         const newUser = new Users({name, userName, email, password});
//         await newUser.save();
//         res.status(200).json(newUser);
//     } catch (err) {
//         res.status(400).json({message: 'Error creating new user'})
//     }
// });

// /* PUT (update) a user by ID */
// app.put('/users/:id', async (req, res) => {
//     const {id} = req.params;
//     const {name, userName, email, password} = req.body;
//     try {
//         const updateUser = await Users.findByIdAndUpdate(id, {name, userName, email, password}, {new: true});
//         res.status(200).json(updateUser);
//     } catch (err) {
//         res.status(400).json({message: 'Error updating User'});
//     }
// });

// /* DELETE a user by ID */
// app.delete('/users/:id', async (req, res) => {
//     const {id} = req.params;
//     try {
//         const deleteUser = await Users.findByIdAndDelete(id);
//         res.status(200).json(deleteUser);
//     } catch (err) {
//         res.status(400).json({message: 'Error deleting User'})
//     }
// });

app.listen (port, () => {
    console.log(`Server is running at port http://localhost:${port}`)
})
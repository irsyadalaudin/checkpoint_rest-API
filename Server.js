require('dotenv').config({path: './config/.env'});
const express = require('express');
const app = express();
const mongoose = require('mongoose');
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

app.listen (port, () => {
    console.log(`Server is running at port http://localhost:${port}`)
})
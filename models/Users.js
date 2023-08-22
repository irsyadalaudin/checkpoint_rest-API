require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/* CREATE A PERSON WITH PROTOTYPE */
const personSchema = new mongoose.Schema({
    name: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
const mongoose = require('mongoose');

/* CREATE A PERSON WITH PROTOTYPE */
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users;
/*
Users.create([
    {
        name: 'Anita Wijaya',
        userName: 'anita123',
        email: 'anita123@gmail.com',
        password: 'Dj*v!8%^*52@5d&sj'
    },
    {
        name: 'Budi Santoso',
        userName: 'budi456',
        email: 'budi456@gmail.com',
        password: 'Bj#*P936@1cFs'
    },
    {
        name: 'Citra Permata',
        userName: 'citra789',
        email: 'citra789@gmail.com',
        password: 'CmR820@3d!lw'
    },
    {
        name: 'Dewi Sari',
        userName: 'dewi012',
        email: 'dewi012@gmail.com',
        password: 'DzS419@2a$dH'
    },
    {
        name: 'Eka Putri',
        userName: 'eka345',
        email: 'eka345@gmail.com',
        password: 'EkP7^*25@6u!pk'
    },
    {
        name: 'Fajar Pratama',
        userName: 'fajar678',
        email: 'fajar678@gmail.com',
        password: 'FjP643@8t^cm'
    },
    {
        name: 'Gita Maharani',
        userName: 'gita901',
        email: 'gita901@gmail.com',
        password: 'GtM512@9es^n'
    },
    {
        name: 'Hadi Susanto',
        userName: 'hadi234',
        email: 'hadi234@gmail.com',
        password: 'HdS783@4b&sd'
    },
    {
        name: 'Indra Perdana',
        userName: 'indra567',
        email: 'indra567@gmail.com',
        password: 'IjP6*47@5qsr'
    },
    {
        name: 'Joko Miyung',
        userName: 'joko890',
        email: 'joko890@gmail.com',
        password: 'JkW1#*53@0k&s'
    }
])
    .then(doc => {
        console.log('All users created', doc)
    })
    .catch(err => {
        console.log('Error while creating users', err)
    })
*/


// module.exports = mongoose.model('Users', userSchema);
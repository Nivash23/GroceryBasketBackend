const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    hashpassword:String
})

const User = mongoose.model('Users', UserSchema, 'User');

module.exports = User;
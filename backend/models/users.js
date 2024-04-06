const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    googleId: {
        type: String,
        unique: true
    },
    role: {
        type: String,
        enum: ['admin', 'supervisor', 'hod', 'student'],
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
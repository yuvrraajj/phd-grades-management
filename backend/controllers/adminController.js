const User = require('../models/user');

exports.login = (req, res) => {
    res.redirect('/auth/google');
};

exports.getDashboard = (req, res) => {
    // Retrieve necessary data for the admin dashboard
    // Send the data as a response
    res.json({ message: 'Admin dashboard data' });
};
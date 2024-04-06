const User = require('../models/user');
const PhDGrade = require('../models/phdGrade');

exports.login = (req, res) => {
    res.redirect('/auth/google');
};

exports.getDashboard = (req, res) => {
    // Retrieve necessary data for the admin dashboard
    // Send the data as a response
    res.json({ message: 'Admin dashboard data' });
};

exports.createUser = (req, res) => {
    const { name, email, role } = req.body;

    // Create a new user instance
    const newUser = new User({
        name,
        email,
        role
    });

    // Save the user to the database
    newUser.save((err, user) => {
        if (err) {
            console.error('Error creating user:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.status(201).json(user);
    });
};

exports.getUsers = (req, res) => {
    // Retrieve all users from the database
    User.find({}, (err, users) => {
        if (err) {
            console.error('Error retrieving users:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.json(users);
    });
};

exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const { name, email, role } = req.body;

    // Find the user by ID and update the fields
    User.findByIdAndUpdate(
        userId,
        { name, email, role },
        { new: true },
        (err, user) => {
            if (err) {
                console.error('Error updating user:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.json(user);
        }
    );
};

exports.deleteUser = (req, res) => {
    const userId = req.params.id;

    // Find the user by ID and remove it from the database
    User.findByIdAndRemove(userId, (err, user) => {
        if (err) {
            console.error('Error deleting user:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'User deleted successfully' });
    });
};

exports.getPhDGrades = (req, res) => {
    // Retrieve all PhD grades from the database
    PhDGrade.find({}, (err, grades) => {
        if (err) {
            console.error('Error retrieving PhD grades:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.json(grades);
    });
};
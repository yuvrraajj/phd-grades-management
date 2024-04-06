const User = require('../models/user');

exports.login = (req, res) => {
    const { email, password } = req.body;

    // Find the user by email
    User.findOne({ email }, (err, user) => {
        if (err) {
            console.error('Error finding user:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Check if the user has admin role
        if (user.role !== 'admin') {
            return res.status(403).json({ error: 'Unauthorized access' });
        }

        // Compare the provided password with the stored password
        user.comparePassword(password, (err, isMatch) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (!isMatch) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Password is correct, generate and send a token
            const token = user.generateAuthToken();
            res.json({ token });
        });
    });
};

exports.getDashboard = (req, res) => {
    // Retrieve necessary data for the admin dashboard
    // Send the data as a response
    res.json({ message: 'Admin dashboard data' });
};

exports.registerUser = (req, res) => {
    const { name, email, password, role } = req.body;

    // Create a new user instance
    const newUser = new User({ name, email, password, role });

    // Save the user to the database
    newUser.save((err) => {
        if (err) {
            console.error('Error registering user:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.status(201).json({ message: 'User registered successfully' });
    });
};

exports.getAllUsers = (req, res) => {
    // Retrieve all users from the database
    User.find({}, (err, users) => {
        if (err) {
            console.error('Error retrieving users:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.json(users);
    });
};

exports.getUserById = (req, res) => {
    const userId = req.params.id;

    // Find the user by ID
    User.findById(userId, (err, user) => {
        if (err) {
            console.error('Error retrieving user:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
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
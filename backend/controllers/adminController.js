const User = require('../models/user');
const PhDGrade = require('../models/phdGrade');

exports.getDashboard = async (req, res) => {
    try {
        // Retrieve the count of all users
        const totalUsersCount = await User.countDocuments();

        // Retrieve the count of users by role
        const adminCount = await User.countDocuments({ role: 'admin' });
        const supervisorCount = await User.countDocuments({ role: 'supervisor' });
        const hodCount = await User.countDocuments({ role: 'hod' });
        const studentCount = await User.countDocuments({ role: 'student' });

        // Retrieve the count of all PhD grades
        const totalGradesCount = await PhDGrade.countDocuments();

        // Retrieve the count of PhD grades by status
        const pendingGradesCount = await PhDGrade.countDocuments({
            hodSignature: 'unsigned'
        });
        const signedGradesCount = await PhDGrade.countDocuments({
            hodSignature: 'signed'
        });

        // Prepare the dashboard data
        const dashboardData = {
            totalUsersCount,
            userCountByRole: {
                admin: adminCount,
                supervisor: supervisorCount,
                hod: hodCount,
                student: studentCount
            },
            totalGradesCount,
            gradeCountByStatus: {
                pending: pendingGradesCount,
                signed: signedGradesCount
            }
        };

        res.json(dashboardData);
    } catch (error) {
        console.error('Error retrieving admin dashboard data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.login = (req, res) => {
    res.redirect('/auth/google');
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
const PhdGrade = require('../models/PhdGrade');
const User = require('../models/User');
const nodemailer = require('nodemailer');


exports.getDashboard = async (req, res) => {
    try {
        // Retrieve the count of all PhD grades
        const totalGradesCount = await PhDGrade.countDocuments();

        // Retrieve the count of PhD grades pending HOD signature
        const pendingGradesCount = await PhDGrade.countDocuments({
            hodSignature: 'unsigned'
        });

        // Retrieve the count of PhD grades signed by the HOD
        const signedGradesCount = await PhDGrade.countDocuments({
            hodSignature: 'signed'
        });

        // Prepare the dashboard data
        const dashboardData = {
            totalGradesCount,
            pendingGradesCount,
            signedGradesCount
        };

        res.json(dashboardData);
    } catch (error) {
        console.error('Error retrieving HOD dashboard data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
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

exports.approvePhDGrade = (req, res) => {
    const gradeId = req.params.id;

    // Find the PhD grade by ID and update the HOD signature
    PhDGrade.findByIdAndUpdate(
        gradeId,
        { hodSignature: 'signed' },
        { new: true },
        (err, grade) => {
            if (err) {
                console.error('Error approving PhD grade:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (!grade) {
                return res.status(404).json({ error: 'PhD grade not found' });
            }

            res.json(grade);
        }
    );
};

exports.getStudentList = (req, res) => {
    // Retrieve all students from the database
    User.find({ role: 'student' }, (err, students) => {
        if (err) {
            console.error('Error retrieving students:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.json(students);
    });
};

exports.getStudentGrades = (req, res) => {
    const studentId = req.params.id;

    // Find the PhD grades for a specific student
    PhDGrade.find({ studentId }, (err, grades) => {
        if (err) {
            console.error('Error retrieving student grades:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.json(grades);
    });
};

exports.updatePhDGrade = (req, res) => {
    const gradeId = req.params.id;
    const { tpPlsGrade, seminarGrade, thesisGrade } = req.body;

    // Find the PhD grade by ID and update the fields
    PhDGrade.findByIdAndUpdate(
        gradeId,
        { tpPlsGrade, seminarGrade, thesisGrade },
        { new: true },
        (err, grade) => {
            if (err) {
                console.error('Error updating PhD grade:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (!grade) {
                return res.status(404).json({ error: 'PhD grade not found' });
            }

            res.json(grade);
        }
    );
};

exports.deletePhDGrade = (req, res) => {
    const gradeId = req.params.id;

    // Find the PhD grade by ID and remove it from the database
    PhDGrade.findByIdAndRemove(gradeId, (err, grade) => {
        if (err) {
            console.error('Error deleting PhD grade:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (!grade) {
            return res.status(404).json({ error: 'PhD grade not found' });
        }

        res.json({ message: 'PhD grade deleted successfully' });
    });
};
exports.getPendingPhDGrades = async (req, res) => {
    try {
        const pendingGrades = await PhdGrade.find({ hodSignature: 'unsigned' });
        res.json({ pendingGrades });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving pending PhD grades', error: error.message });
    }
};

// Function to approve a PhD grade by HOD
exports.approvePhDGrade = async (req, res) => {
    try {
        const updatedPhdGrade = await PhdGrade.findByIdAndUpdate(
            req.params.id,
            { hodSignature: 'signed' },
            { new: true }
        );
        if (!updatedPhdGrade) {
            return res.status(404).json({ message: 'PhD grade not found' });
        }

        // Send email notification to the student
        const student = await User.findById(updatedPhdGrade.studentId);
        if (student) {
            const transporter = nodemailer.createTransport({
                // Configure your email service provider (e.g., Gmail, SendGrid, etc.)
                // ...
            });

            const mailOptions = {
                from: 'your-email@example.com',
                to: student.email,
                subject: 'PhD Grade Approved',
                text: 'Your PhD grade has been approved by the HOD. You can now download your grade.',
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('Error sending email:', error);
                } else {
                    console.log('Email sent:', info.response);
                }
            });
        }

        res.json({ message: 'PhD grade approved successfully', updatedPhdGrade });
    } catch (error) {
        res.status(400).json({ message: 'Error approving PhD grade', error: error.message });
    }
};

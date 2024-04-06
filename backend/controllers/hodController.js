const PhDGrade = require('../models/phdGrade');
const User = require('../models/user');


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
const User = require('../models/user');
const PhDGrade = require('../models/phdGrade');

exports.getDashboard = async (req, res) => {
    try {
        const supervisorId = req.user._id;

        // Retrieve the count of students supervised by the logged-in supervisor
        const studentCount = await User.countDocuments({
            supervisor: supervisorId,
            role: 'student'
        });

        // Retrieve the count of PhD grades submitted by the students of the logged-in supervisor
        const submittedGradesCount = await PhDGrade.countDocuments({
            supervisorId: supervisorId,
            supervisorSignature: { $exists: true }
        });

        // Retrieve the count of PhD grades pending supervisor signature
        const pendingGradesCount = await PhDGrade.countDocuments({
            supervisorId: supervisorId,
            supervisorSignature: { $exists: false }
        });

        // Prepare the dashboard data
        const dashboardData = {
            studentCount,
            submittedGradesCount,
            pendingGradesCount
        };

        res.json(dashboardData);
    } catch (error) {
        console.error('Error retrieving supervisor dashboard data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};;

exports.getStudents = (req, res) => {
    const supervisorId = req.user._id;

    // Find the students supervised by the logged-in supervisor
    User.find({ supervisor: supervisorId, role: 'student' }, (err, students) => {
        if (err) {
            console.error('Error retrieving students:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.json(students);
    });
};

exports.createPhDGrade = (req, res) => {
    const { studentId, tpPlsGrade, seminarGrade, thesisGrade } = req.body;
    const supervisorId = req.user._id;

    // Create a new PhD grade instance
    const newGrade = new PhDGrade({
        studentId,
        tpPlsGrade,
        seminarGrade,
        thesisGrade,
        supervisorId
    });

    // Save the PhD grade to the database
    newGrade.save((err, grade) => {
        if (err) {
            console.error('Error creating PhD grade:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.status(201).json(grade);
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

exports.signPhDGrade = (req, res) => {
    const gradeId = req.params.id;
    const supervisorId = req.user._id;

    // Find the PhD grade by ID and update the supervisor signature
    PhDGrade.findByIdAndUpdate(
        gradeId,
        { supervisorSignature: supervisorId },
        { new: true },
        (err, grade) => {
            if (err) {
                console.error('Error signing PhD grade:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (!grade) {
                return res.status(404).json({ error: 'PhD grade not found' });
            }

            res.json(grade);
        }
    );
};
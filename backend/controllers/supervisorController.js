const PhDGrade = require('../models/phdGrade');

exports.getDashboard = (req, res) => {
    // Retrieve necessary data for the supervisor dashboard
    // Send the data as a response
    res.json({ message: 'Supervisor dashboard data' });
};

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
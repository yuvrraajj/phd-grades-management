const PhDGrade = require('../models/phdGrade');

exports.getDashboard = (req, res) => {
    // Retrieve necessary data for the student dashboard
    // Send the data as a response
    res.json({ message: 'Student dashboard data' });
};

exports.getPhDGrade = (req, res) => {
    const studentId = req.user._id;

    // Find the PhD grade for the logged-in student
    PhDGrade.findOne({ studentId }, (err, grade) => {
        if (err) {
            console.error('Error retrieving PhD grade:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (!grade) {
            return res.status(404).json({ error: 'PhD grade not found' });
        }

        res.json(grade);
    });
};

exports.downloadPhDGrade = (req, res) => {
    const studentId = req.user._id;

    // Find the PhD grade for the logged-in student
    PhDGrade.findOne({ studentId }, (err, grade) => {
        if (err) {
            console.error('Error retrieving PhD grade:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (!grade) {
            return res.status(404).json({ error: 'PhD grade not found' });
        }

        if (grade.supervisorSignature && grade.hodSignature) {
            // Generate and send the PDF file
            // ...
            res.download('path/to/generated/pdf/file.pdf');
        } else {
            return res.status(400).json({ error: 'PhD grade not fully signed' });
        }
    });
};

exports.getProfile = (req, res) => {
    const studentId = req.user._id;

    // Find the student profile by ID
    User.findById(studentId, (err, student) => {
        if (err) {
            console.error('Error retrieving student profile:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json(student);
    });
};

exports.updateProfile = (req, res) => {
    const studentId = req.user._id;
    const { name, email } = req.body;

    // Find the student by ID and update the profile fields
    User.findByIdAndUpdate(
        studentId,
        { name, email },
        { new: true },
        (err, student) => {
            if (err) {
                console.error('Error updating student profile:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (!student) {
                return res.status(404).json({ error: 'Student not found' });
            }

            res.json(student);
        }
    );
};

exports.uploadSignature = (req, res) => {
    const studentId = req.user._id;
    const signatureFile = req.file;

    // Update the student's signature file path in the database
    User.findByIdAndUpdate(
        studentId,
        { signatureFilePath: signatureFile.path },
        { new: true },
        (err, student) => {
            if (err) {
                console.error('Error uploading signature:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (!student) {
                return res.status(404).json({ error: 'Student not found' });
            }

            res.json({ message: 'Signature uploaded successfully' });
        }
    );
};
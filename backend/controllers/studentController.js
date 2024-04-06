const PhdGrade = require('../models/PhdGrade');
const PDFDocument = require('pdfkit');

// Function to generate and download PDF of signed PhD grade
exports.downloadPhDGradePDF = async (req, res) => {
    try {
        const phdGrade = await PhdGrade.findOne({ _id: req.params.id, studentId: req.user._id });
        if (!phdGrade) {
            return res.status(404).json({ message: 'PhD grade not found' });
        }

        if (phdGrade.supervisorSignature && phdGrade.hodSignature === 'signed') {
            // Create a new PDF document
            const doc = new PDFDocument();

            // Set the response headers for PDF download
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename="phd_grade_${phdGrade._id}.pdf"`);

            // Pipe the PDF document to the response
            doc.pipe(res);

            // Add content to the PDF document
            doc.fontSize(18).text('PhD Grade Report', { align: 'center' });
            doc.moveDown();
            doc.fontSize(12).text(`Student ID: ${phdGrade.studentId}`);
            doc.moveDown();
            doc.text(`TP/PLS Grade: ${phdGrade.tpPlsGrade}`);
            doc.text(`Seminar/Independent Study Grade: ${phdGrade.seminarIndependentStudyGrade}`);
            doc.text(`Thesis Grade: ${phdGrade.thesisGrade}`);
            doc.moveDown();
            doc.text(`Supervisor Signature: ${phdGrade.supervisorSignature ? 'Signed' : 'Pending'}`);
            doc.text(`HOD Signature: ${phdGrade.hodSignature}`);

            // End the PDF document
            doc.end();
        } else {
            return res.status(400).json({ message: 'PhD grade is not fully signed' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error generating PDF', error: error.message });
    }
};

exports.getDashboard = async (req, res) => {
    try {
        const studentId = req.user._id;

        // Retrieve the PhD grade for the logged-in student
        const phdGrade = await PhDGrade.findOne({ studentId: studentId });

        if (!phdGrade) {
            return res.status(404).json({ error: 'PhD grade not found' });
        }

        // Prepare the dashboard data
        const dashboardData = {
            tpPlsGrade: phdGrade.tpPlsGrade,
            seminarGrade: phdGrade.seminarGrade,
            thesisGrade: phdGrade.thesisGrade,
            supervisorSignature: phdGrade.supervisorSignature ? 'Signed' : 'Pending',
            hodSignature: phdGrade.hodSignature === 'signed' ? 'Signed' : 'Pending'
        };

        res.json(dashboardData);
    } catch (error) {
        console.error('Error retrieving student dashboard data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
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
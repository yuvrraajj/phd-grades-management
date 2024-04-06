// routes/facultyRoutes.js
const express = require('express');
const router = express.Router();
const PhdGrade = require('../models/PhdGrade');

// POST route to add a new PhD grade entry
router.post('/phd-grades', async (req, res) => {
  try {
    const { studentId, tpPlsGrade, seminarIndependentStudyGrade, thesisGrade, supervisorAuthorId } = req.body;

    // Add logic to handle the file upload for the signature

    const newPhdGrade = new PhdGrade({
      studentId,
      authorId: req.user._id, // Assuming you have the faculty's user ID from the session
      tpPlsGrade,
      seminarIndependentStudyGrade,
      thesisGrade,
      supervisorAuthorId,
      // signature: 'path/to/signature', if you are uploading a signature
    });

    await newPhdGrade.save();
    res.status(201).json({ message: 'PhD grade added successfully', newPhdGrade });
  } catch (error) {
    res.status(400).json({ message: 'Error adding PhD grade', error: error.message });
  }
});

module.exports = router;

// routes/facultyRoutes.js
const express = require('express');
const router = express.Router();
const PhdGrade = require('../models/PhdGrade');
const authMiddleware = require('../middlewares/authMiddleware');
const multer = require('multer');

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// POST route to add a new PhD grade entry
router.post('/phd-grades', authMiddleware.isFaculty, upload.single('signature'), async (req, res) => {
  try {
    const { studentId, tpPlsGrade, seminarIndependentStudyGrade, thesisGrade, supervisorAuthorId } = req.body;
    const newPhdGrade = new PhdGrade({
      studentId,
      authorId: req.user._id,
      tpPlsGrade,
      seminarIndependentStudyGrade,
      thesisGrade,
      supervisorAuthorId,
      signature: req.file ? req.file.path : null,
    });
    await newPhdGrade.save();
    res.status(201).json({ message: 'PhD grade added successfully', newPhdGrade });
  } catch (error) {
    res.status(400).json({ message: 'Error adding PhD grade', error: error.message });
  }
});

// GET route to retrieve all PhD grades added by the faculty
router.get('/phd-grades', authMiddleware.isFaculty, async (req, res) => {
  try {
    const phdGrades = await PhdGrade.find({ authorId: req.user._id });
    res.json({ phdGrades });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving PhD grades', error: error.message });
  }
});

// GET route to retrieve a specific PhD grade by ID
router.get('/phd-grades/:id', authMiddleware.isFaculty, async (req, res) => {
  try {
    const phdGrade = await PhdGrade.findOne({ _id: req.params.id, authorId: req.user._id });
    if (!phdGrade) {
      return res.status(404).json({ message: 'PhD grade not found' });
    }
    res.json({ phdGrade });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving PhD grade', error: error.message });
  }
});

// PUT route to update a PhD grade entry
router.put('/phd-grades/:id', authMiddleware.isFaculty, upload.single('signature'), async (req, res) => {
  try {
    const { studentId, tpPlsGrade, seminarIndependentStudyGrade, thesisGrade, supervisorAuthorId } = req.body;
    const updatedPhdGrade = await PhdGrade.findOneAndUpdate(
        { _id: req.params.id, authorId: req.user._id },
        {
          studentId,
          tpPlsGrade,
          seminarIndependentStudyGrade,
          thesisGrade,
          supervisorAuthorId,
          signature: req.file ? req.file.path : undefined,
        },
        { new: true }
    );
    if (!updatedPhdGrade) {
      return res.status(404).json({ message: 'PhD grade not found' });
    }
    res.json({ message: 'PhD grade updated successfully', updatedPhdGrade });
  } catch (error) {
    res.status(400).json({ message: 'Error updating PhD grade', error: error.message });
  }
});

// DELETE route to remove a PhD grade entry
router.delete('/phd-grades/:id', authMiddleware.isFaculty, async (req, res) => {
  try {
    const deletedPhdGrade = await PhdGrade.findOneAndDelete({ _id: req.params.id, authorId: req.user._id });
    if (!deletedPhdGrade) {
      return res.status(404).json({ message: 'PhD grade not found' });
    }
    res.json({ message: 'PhD grade deleted successfully', deletedPhdGrade });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting PhD grade', error: error.message });
  }
});

module.exports = router;
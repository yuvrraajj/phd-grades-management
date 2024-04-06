const express = require('express');
const router = express.Router();
const hodController = require('../controllers/hodController');
const { isAuthenticated, isHOD } = require('../middlewares/authMiddleware');

router.get('/dashboard', isAuthenticated, isHOD, hodController.getDashboard);
router.get('/students', isAuthenticated, isHOD, hodController.getStudentList);
router.get('/students/:id/grades', isAuthenticated, isHOD, hodController.getStudentGrades);
router.put('/grades/:id', isAuthenticated, isHOD, hodController.updatePhDGrade);
router.delete('/grades/:id', isAuthenticated, isHOD, hodController.deletePhDGrade);
// GET route to retrieve all pending PhD grades for HOD approval
router.get('/phd-grades/pending', authMiddleware.isHOD, hodController.getPendingPhDGrades);

// PUT route to approve a PhD grade by HOD
router.put('/phd-grades/:id/approve', authMiddleware.isHOD, hodController.approvePhDGrade);

module.exports = router;
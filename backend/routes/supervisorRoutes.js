const express = require('express');
const router = express.Router();
const supervisorController = require('../controllers/supervisorController');
const { isAuthenticated, isSupervisor } = require('../middlewares/authMiddleware');

router.get('/dashboard', isAuthenticated, isSupervisor, supervisorController.getDashboard);
router.get('/students', isAuthenticated, isSupervisor, supervisorController.getStudents);
router.post('/grades', isAuthenticated, isSupervisor, supervisorController.createPhDGrade);
router.put('/grades/:id', isAuthenticated, isSupervisor, supervisorController.updatePhDGrade);
router.post('/grades/:id/sign', isAuthenticated, isSupervisor, supervisorController.signPhDGrade);

module.exports = router;
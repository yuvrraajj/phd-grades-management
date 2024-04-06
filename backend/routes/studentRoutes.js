const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const { isAuthenticated, isStudent } = require('../middlewares/authMiddleware');

router.get('/dashboard', isAuthenticated, isStudent, studentController.getDashboard);

module.exports = router;
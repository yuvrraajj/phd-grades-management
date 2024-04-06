const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const { isAuthenticated, isStudent } = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadMiddleware');router.get('/dashboard', isAuthenticated, isStudent, studentController.getDashboard);
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/profile', isAuthenticated, isStudent, studentController.getProfile);
router.put('/profile', isAuthenticated, isStudent, studentController.updateProfile);
router.post('/signature', isAuthenticated, isStudent, upload.single('signature'), studentController.uploadSignature);

// GET route to download signed PhD grade as PDF
router.get('/phd-grades/:id/download', authMiddleware.isStudent, studentController.downloadPhDGradePDF);

module.exports = router;
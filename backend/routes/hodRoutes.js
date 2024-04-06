const express = require('express');
const router = express.Router();
const hodController = require('../controllers/hodController');
const { isAuthenticated, isHOD } = require('../middlewares/authMiddleware');

router.get('/dashboard', isAuthenticated, isHOD, hodController.getDashboard);

module.exports = router;
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/login', adminController.login);
router.get('/dashboard', adminController.getDashboard);
// Add other admin routes

module.exports = router;

module.exports = router;
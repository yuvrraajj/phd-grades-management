const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isAuthenticated, isAdmin } = require('../middlewares/authMiddleware');

router.get('/dashboard', isAuthenticated, isAdmin, adminController.getDashboard);
router.post('/users', isAuthenticated, isAdmin, adminController.createUser);
router.get('/users', isAuthenticated, isAdmin, adminController.getUsers);
router.put('/users/:id', isAuthenticated, isAdmin, adminController.updateUser);
router.delete('/users/:id', isAuthenticated, isAdmin, adminController.deleteUser);
router.get('/grades', isAuthenticated, isAdmin, adminController.getPhDGrades);

module.exports = router;
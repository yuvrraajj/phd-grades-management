// middlewares/authMiddleware.jsdd

// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
}

// Middleware to check if the user is an admin
function isAdmin(req, res, next) {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ error: 'Forbidden' });
    }
}

// Middleware to check if the user is a supervisor
function isSupervisor(req, res, next) {
    if (req.user && (req.user.role === 'admin' || req.user.role === 'supervisor')) {
        next();
    } else {
        res.status(403).json({ error: 'Forbidden' });
    }
}

// Middleware to check if the user is a head of department
function isHOD(req, res, next) {
    if (req.user && (req.user.role === 'admin' || req.user.role === 'hod')) {
        next();
    } else {
        res.status(403).json({ error: 'Forbidden' });
    }
}

// Middleware to check if the user is a student
function isStudent(req, res, next) {
    if (req.user && req.user.role === 'student') {
        next();
    } else {
        res.status(403).json({ error: 'Forbidden' });
    }
}

module.exports = {
    isAuthenticated,
    isAdmin,
    isSupervisor,
    isHOD,
    isStudent
};
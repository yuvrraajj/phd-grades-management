const UserRole = require('./models/UserRole');

// Example route for Google OAuth callback
router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  async (req, res) => {
    // Assuming the user's email is available in req.user.email
    const email = req.user.email;
    try {
      const userRole = await UserRole.findOne({ userEmail: email });
      switch (userRole.role) {
        case 'admin':
          return res.redirect('/admin-dashboard');
        case 'hod':
          return res.redirect('/hod-dashboard');
        case 'student':
          return res.redirect('/student-dashboard');
        case 'supervisor':
          return res.redirect('/supervisor-dashboard');
        default:
          return res.redirect('/unauthorized');
      }
    } catch (error) {
      console.error('Login error:', error);
      res.redirect('/error');
    }
});

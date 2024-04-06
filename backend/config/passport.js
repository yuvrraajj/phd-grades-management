const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');

passport.use(new GoogleStrategy({
    clientID: 'YOUR_GOOGLE_CLIENT_ID',
    clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
    callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    // Find or create the user based on the Google profile
    User.findOne({ googleId: profile.id }, (err, user) => {
        if (err) {
            return done(err);
        }

        if (user) {
            return done(null, user);
        } else {
            // Create a new user if not found
            const newUser = new User({
                googleId: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value,
                role: determineUserRole(profile.emails[0].value) // Assign user role based on email
            });

            newUser.save((err) => {
                if (err) {
                    return done(err);
                }

                return done(null, newUser);
            });
        }
    });
}));

// Function to determine user role based on email
function determineUserRole(email) {
    if (email.endsWith('@admin.com')) {
        return 'admin';
    } else if (email.endsWith('@supervisor.com')) {
        return 'supervisor';
    } else if (email.endsWith('@hod.com')) {
        return 'hod';
    } else {
        return 'student';
    }
}

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});
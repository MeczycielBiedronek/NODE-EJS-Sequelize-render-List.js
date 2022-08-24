var authController = require('../controllers/authController.js');

module.exports = function (app, passport) {
    app.get('/signup', isNotLoggedIn, authController.signup);
    app.get('/signin', isNotLoggedIn, authController.signin);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup',
        failureFlash : true  
    }

    ));
    app.get('/dashboard',isLoggedIn, authController.dashboard);
    app.get('/logout',authController.logout);
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin',
        failureFlash : true  
    }
));
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) 
            return next();
        res.redirect('/signin');
    }

    function isNotLoggedIn(req, res, next) {
        if (!req.isAuthenticated()) 
            return next();
        res.redirect('/dashboard');
    }
};
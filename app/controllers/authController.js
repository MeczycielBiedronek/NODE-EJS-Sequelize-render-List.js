var exports = module.exports = {};

exports.signup = function(req, res) {
    res.render('signup', { message: req.flash('error') });

}

exports.signin = function(req, res) {
    res.render('signin', { message: req.flash('error') });
};

exports.dashboard = function(req, res) {
    let username= req.user.firstname
    res.render('dashboard', 
    { 
        success: req.flash('success'),
        username: username,
        message: req.flash('error')
    }
 );
};

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/signin');
    });
}
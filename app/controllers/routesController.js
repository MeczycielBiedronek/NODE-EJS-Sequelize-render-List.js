var exports = module.exports = {};

/// GET

exports.addorder = function (req, res) {
    console.log(req.user.email + 'loggin req.user and user in addorder')
    res.render('addorder', {
        message: req.flash('error'),
        user: req.user
    });
}

exports.myorders = function (req, res) {
    const Order = order
    Order.findAll({
        // raw: true,
        where: {
            user_id: '55'
        }
    }).then(res=>console.log(res))


    console.log(req)
}

// POST 
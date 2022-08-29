var routesController = require('../controllers/routesController.js');
var formsData = require('./forms/formstosql.js')

module.exports = function (app, models) {
    const Order = models.order
    let logged_email
    app.get('/addorder', function (req, res) {
        console.log(req.user + 'loggin req.user.email in addorder')
        res.render('addorder', {
            message: req.flash('error'),
            user: req.user
        });
    })
    app.get('/myorders', async (req, res) => {
        if (!logged_email) {
            res.redirect('/')
        } else {
            const ordersList = await Order.findAll({
                where: {
                    user_email: logged_email
                }
            })
            let ol = ordersList
            let le = logged_email
            logged_email = undefined // destroys logged_email session
            res.render('myorders', {
                success: req.flash('success'),
                username: req.flash('user'),
                logged_email: le,
                data: ol
            })
        }

    })

    /// POST
    app.post('/addorder', async function (req, res) {

        var data = formsData.ordersform(req, res) // form to sql relation
        Order.create(data).then(res => {}).catch((error) => {
            console.error('Failed to create a new record : ', error)
        })
        logged_email = !req.user ? req.body.user_email : req.user.email
        res.redirect('/myorders')
    })
}
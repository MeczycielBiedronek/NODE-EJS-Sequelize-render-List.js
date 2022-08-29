var routesController = require('../controllers/routesController.js');
var formsData = require('./forms/formstosql.js')

module.exports = function (app, models) {
    const Order = models.order
    let logged_email
    app.get('/addorder', routesController.addorder)
    // app.get('/myorders', routesController.myorders)
    app.get('/myorders', async (req, res) => {

        const ordersList = await Order.findAll({
            where: {
                user_email: logged_email
            }
        })
        let ol = ordersList

        res.render('myorders', {
            success: req.flash('success'),
            username: req.flash('user'),
            logged_email: logged_email,
            data: ol
        })
    })

    /// POST
    app.post('/addorder', async function (req, res) {

        var data = formsData.ordersform(req, res) // form to sql relation
        Order.create(data).then(res => {}).catch((error) => {
            console.error('Failed to create a new record : ', error);
        })
        logged_email = !req.user ? req.body.user_email : req.user.email
        res.redirect('/myorders')
    })
}
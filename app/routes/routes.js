var routesController = require('../controllers/routesController.js');
var formsData = require('./forms/formstosql.js')

module.exports = function (app, models) {
    const Order = models.order
    app.get('/addorder', routesController.addorder)
    // app.get('/myorders', routesController.myorders)
    app.get('/myorders', async (req, res) => {
        
        const ordersList = await Order.findAll({
            // raw: true,
            where: {
                user_email: req.user.email
            }
        })
        let ol = ordersList
        // let username= req.user.firstname
        let loggedEmail = !req.user ? req.body.user_email : req.user.email
        
        res.render('myorders', {
            success: req.flash('success'),
            username: req.flash('user'),
            loggedEmail: loggedEmail,
            data: ol
        })
    })



    /// POST
    app.post('/addorder', async function (req, res) {
        
        var data = formsData.ordersform(req, res) // form to sql relation
        Order.create(data).then(res => {
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        })
        req.flash('success', 'Job created')
        
        const ordersList = await Order.findAll({
            // raw: true,
            where: {
                user_email: req.body.user_email
            }
        })
        let ol = ordersList // results of findAll
        let loggedEmail = !req.user ? req.body.user_email : req.user.first_last_name


        res.render('myorders', {
            success: req.flash('success'),
            loggedEmail: loggedEmail,
            message: req.flash('error'),
            data: ol
        })
    })

    // function middleware1(req, res, next) {
    //     const Order = order
    //             Order.findAll({
    //         // raw: true,
    //         where: {
    //             user_id: '55'
    //         }
    //     }).then(res=>{
    //         // req.dataFromMiddleware1 = res
    //         req.locals = res
    //         // console.log(req.dataFromMiddleware1)
    //     }
    //     )
    //     next();
    //   }        
    //   // Handling Get Request '/'
    //   app.get("/elo", middleware1, (req, res) => {
    //     // console.log(req.dataFromMiddleware1)
    //     console.log(req.locals)

    //     return res.send(req.dataFromMiddleware1);
    //   })

}
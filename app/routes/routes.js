var routesController = require('../controllers/routesController.js');
var formsData = require('./forms/formstosql.js')

module.exports = function (app, order) {

    app.get('/addorder', routesController.addorder)
    // app.get('/myorders', routesController.myorders)
    app.get('/myorders', (req, res) => {
        const Order = order
        Order.findAll({
            // raw: true,
            where: {
                user_id: '55'
            }
        }).then(res => {
            var item = res
        })
        res.render('myorders', {
            success: req.flash('success'),
            username: req.flash('user'),
            message: req.flash('error'),
            tabledata: item
        })
    })



    /// POST
    app.post('/addorder', (req, res) => {
        const Order = order
        var data = formsData.ordersform(req, res) // form to sql relation

        Order.create(data).then(res => {
            console.log(res)
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        res.render('myorders', {
            success: req.flash('success'),
            username: req.flash('user'),
            message: req.flash('error'),
            tabledata: tabledata
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



    app.get('/products', async function (req, res) {
        const Order = order
        const data = await Order.findAll({
            // raw: true,
            where: {
                user_id: '55'
            }
        })
        let d = data[0].dataValues
        console.log(d)
        res.render('products', {
            data: d
        });

    })

    app.get('/test', async function (req, res) {
        const Order = order
        const data = await Order.findAll({
            // raw: true,
            where: {
                user_id: '55'
            }
        })
        let d = data[0].dataValues
        console.log(d)
        res.render('products', {
            data: d
        });

    })
}
const express = require('express');
const app = express();
const path = require("path")
const passport = require('passport')
const session = require('express-session')
const env = require('dotenv').config();
const models = require("./app/models"); ////// SeQuLelizer
const ejs = require('ejs')
const flash = require('connect-flash')

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use(flash());

//STYLING
app.use(express.static(path.join(__dirname, '/app/public')));

app.get('/', function (req, res) {
    res.send('This is our index page');
});

//For EJS
app.set('views', './app/views');
app.set('view engine', '.ejs');



require('./app/config/passport/passport.js')(passport, models.user); //////// USER data




//Sync Database
models.sequelize.sync()
    .then(function () {
        console.log('Nice! Database looks fine')
    }).catch(function (err) {
        console.log(err, "Something went wrong with the Database Update!")
    });

//Routes
const authRoute = require('./app/routes/auth.js')(app, passport);

require('./app/routes/routes')(app, models)


app.listen(5000, function (err) {
    if (!err)
        console.log("Site is live");
    else console.log(err)
});
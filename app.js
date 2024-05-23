// app.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const path = require('path'); // Add path module

// Database and Passport setup
require('./config/database');
require('./config/passport-setup');

// EJS template engine setup
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // Ensure this line is present

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({
    secret: 'lorem ipsum',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 * 15 }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.get('*', (req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

app.get('/', (req, res) => {
    res.render('index');
});


//render universty pages
app.get('/imamu', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'imamu.html'));
});
app.get('/ksu', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'KSU.html'));
});
app.get('/pnu', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pnu.html'));
});




// Routes setup
const events = require('./routes/event-routes');
const users = require('./routes/user-routes');
app.use('/Home', events);
app.use('/users', users);

// Listen on port 3000
app.listen(3000, () => {
    console.log('App is working on port 3000');
});

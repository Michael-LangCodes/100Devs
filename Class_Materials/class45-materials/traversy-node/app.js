const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const passport = require('passport');
const methodOverride = require('method-override')
const session = require('express-session');
const connectDB = require('./config/db');
const MongoStore = require('connect-mongo').default; // ✅ v6 style
const { engine } = require("express-handlebars");

// Load config
dotenv.config({ path: './config/config.env' });

// Passport config
require('./config/passport')(passport);

// Connect DB
connectDB();

//Create App Variable for Express
const app = express();

//Body Parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Method Override
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      let method = req.body._method
      delete req.body._method
      return method
    }
  })
)

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Handlebars Helper
const {formatDate, stripTags, truncate, editIcon, select } = require('./helpers/hbs')

// Handlebars
app.engine('.hbs', engine({ helpers: {
    formatDate,
}, defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

// Sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'keyboard cat', // better to use env variable
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }), // ✅ v6 style
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day
  })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//Set global var
app.use(function(req,res, next){
    res.locals.user = req.user || null
    next()
})

// Routes (AFTER passport + sessions)
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/stories', require('./routes/stories'));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
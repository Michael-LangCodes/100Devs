const path = require('path')
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { exphbs } = require('express-handlebars');
const passport = require('passport');
const session = require('session')
const connectDB = require('./config/db');
const { extname } = require('node:path');
const { engine } = require("express-handlebars");

//Load config
dotenv.config({path: './config/config.env'});

//Passport config
require('./config/passport')(passport)

//Connecting the DB
connectDB();

const app = express();

//Logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//Routes
app.use('/', require('./routes/index'))

//Handlebars
app.engine('.hbs', engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

//Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUnitialized: false,
}))

//Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

//Static Folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const connectDB = require('./config/db');
const { extname } = require('node:path');

//Load config
dotenv.config({path: './config/config.env'});

//Connecting the DB
connectDB();

const app = express();

//Logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//Handlebars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
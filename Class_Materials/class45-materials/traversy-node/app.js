const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')
const passport = require('passport')
const session = require('express-session')
const connectDB = require('./config/db')
const MongoStore = require('connect-mongo')
const { engine } = require("express-handlebars")

//Load config
dotenv.config({path: './config/config.env'})

//Passport config
require('./config/passport')(passport)

//Connect DB
connectDB()

const app = express()

//Logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//Handlebars
app.engine('.hbs', engine({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', '.hbs')

//Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
}))

//Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

//Routes (AFTER passport + sessions)
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

//Static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
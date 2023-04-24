const express = require("express");
const cors = require("cors");
const route = require("./app/routes/TodoRoute");
const cookieParser = require('cookie-parser');
const app = express();

const credentials = require('./app/middleware/credentials')
const errorHandlerMiddleware = require('./app/middleware/error_handler')
const authenticationMiddleware = require('./app/middleware/authentication')


app.use(cors());
app.use(express.json());

// Allow Credentials
app.use(credentials)

// CORS


// application.x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// middleware for cookies
app.use(cookieParser())

app.use(authenticationMiddleware)
// static files
// app.use('/static', express.static(path.join(__dirname, 'public')))
// Default error handler

app.use(errorHandlerMiddleware)
// Routes
app.use('/auth', require('./app/routes/auth'))


app.use(route);
module.exports = app;
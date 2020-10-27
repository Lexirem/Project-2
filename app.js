//(porque?)
require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const mongoose = require("mongoose");
const app = express();
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const router = express.Router();//indica la ruta.

// require DATABASE configuration
//require('./configs/db.config');

// Express View engine setup
app.set('view engine', 'hbs');

//import the routes from another file
app.use("/users", require("./routes/user_route"));

// Mongoose configuration
mongoose.connect("mongodb://localhost/basic-auth-mongoose");

//ROUTES



module.exports = app;

app.listen(process.env.PORT || 3000);
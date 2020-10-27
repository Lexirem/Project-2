require('dotenv').config();

const express = require('express');
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');


// View engine configuration
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

// Mongoose configuration
mongoose.connect("mongodb://localhost/basic-auth-mongoose");


// Routes
app.use('/', router);
 


app.listen(process.env.PORT || 3000)

module.exports = app;
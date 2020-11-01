const express = require("express");
const router = express.Router();

const Photo = require('../models/photo');

router.get('/photo', (req, res, next) => {
    res.render('photos/onePhoto')
});


//indicar ruta de themes y oneTheme o crear theme file en routes
//indicar ruta de cart
//indicar ruta de payments
//indicar ruta a user o podria ir en routes/index.js

router.get('/themes', (req, res, next) => {
    res.render('photos/themes')
});

router.get('/oneTheme', (req, res, next) => {
    res.render('photos/oneTheme')
});

module.exports = router; 
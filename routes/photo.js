const express = require("express");
const router = express.Router();

const Photo = require('../models/photo');

router.get('/photo', (req, res, next) => {
    res.render('photos/onePhoto')
});


//indicar ruta de themes y oneTheme o crear theme file en routes
router.get('/themes', (req, res, next) => {
    res.render('/photos/themes')
});

//indicar ruta de cart

//indicar ruta de payments
    //ruta get y ruta post
//indicar ruta a user o podria ir en routes/index.js
    //ruta get y ruta post

module.exports = router; 
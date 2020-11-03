const express = require("express");
const router = express.Router();
const withAuth = require("../helpers/middleware");


const Photo = require('../models/photo');
const User = require("../models/user");


//indicar ruta de cart
router.get('/cart', withAuth, (req, res, next) => {
    res.render('photos/cart')
});


module.exports = router;

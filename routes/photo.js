const express = require("express");
const router = express.Router();

const Photo = require('../models/photo');

router.get('/photo', (req, res, next) => {
    res.render('photos/onePhoto')
});

module.exports = router; 
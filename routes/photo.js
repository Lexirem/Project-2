const express = require("express");
const router = express.Router();
const withAuth = require("../helpers/middleware");


const Photo = require('../models/photo');
const User = require("../models/user");


//indicar ruta de themes y oneTheme o crear theme file en routes
router.get('/themes', withAuth, async (req, res, next) => {
    const photos = await Photo.find()
    res.render('photos/themes', {photos});
});

router.get('/oneTheme', withAuth, async (req, res, next) => {
    const photos = await Photo.find({theme: "Black and white"})
    console.log(photos)
    res.render('photos/oneTheme', {photos});
});

router.get('/onePhoto', withAuth, (req, res, next) => {
    res.render('photos/onePhoto');
});

//indicar ruta de cart
router.get('/cart', withAuth, (req, res, next) => {
    res.render('photos/cart')
});

//indicar ruta de payments
    //ruta get y ruta post
router.post('/payments', withAuth, async (req, res, next) => {
    const userId = req.userID;
    let payment = await User.findById(req.params.userID)
    try{
        if(user !== null){
            
        }
        res.redirect('photos/message')
    }
    catch (error) {
        next(err);
        return;
    }
})


//indicar ruta a user o podria ir en routes/index.js
    //ruta get y ruta post
router.get('/user/:id', withAuth, (req, res, next) => {
    res.render('photos/user');
});

router.get('/userAccount', withAuth, (req, res, next) => {
    res.render('photos/userAccount');
})


module.exports = router; 
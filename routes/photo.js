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
    res.render('photos/oneTheme', {photos});
});

router.get('/onePhoto/:id', withAuth, async (req, res, next) => {
    //console.log(req.params.id)
    const photos = await Photo.findById(req.params.id)
    //console.log(photos)
    res.render('photos/onePhoto', {photos});
});

//indicar ruta de cart
router.get('/cart', withAuth, async (req, res, next) => {
    const buy = await Photo.findById(req.params.Id)
    res.render('photos/cart', {buy})
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
const express = require("express");
const router = express.Router();
const withAuth = require("../helpers/middleware");


const Photo = require('../models/photo');
const User = require("../models/user");


//ruta de Themes:
router.get('/themes', withAuth, async (req, res, next) => {
    const photos = await Photo.find()
    res.render('photos/themes', {photos});
});

//ruta de cada uno de los Themes:
router.get('/oneTheme', withAuth, async (req, res, next) => {
    const photos = await Photo.find({theme: "Black and white"})
    res.render('photos/oneTheme', {photos});
});
router.get('/oneTheme', withAuth, async (req, res, next) => {
    const photos = await Photo.find({theme: "Urban"})
    res.render('photos/oneTheme', {photos});
});
router.get('/oneTheme', withAuth, async (req, res, next) => {
    const photos = await Photo.find({theme: "Landscape"})
    res.render('photos/oneTheme', {photos});
});
router.get('/oneTheme', withAuth, async (req, res, next) => {
    const photos = await Photo.find({theme: "Street Life"})
    res.render('photos/oneTheme', {photos});
});
router.get('/oneTheme', withAuth, async (req, res, next) => {
    const photos = await Photo.find({theme: "Macro"})
    res.render('photos/oneTheme', {photos});
});

//ruta de One Photo por su ID:
router.get('/onePhoto/:id', withAuth, async (req, res, next) => {
    //console.log(req.params.id)
    const photos = await Photo.findById(req.params.id)
    //console.log(photos)
    res.render('photos/onePhoto', {photos});
});



//ruta de Payments:
router.get('/payments', withAuth, (req, res, next) => {
    res.render('payments')
});    
router.post('/payments', withAuth, async (req, res, next) => {
    let payment = await User.findById(req.params.id)
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


<<<<<<< HEAD
//indicar ruta a user o podria ir en routes/index.js
    //ruta get y ruta post
=======
//ruta de User y User Account:
>>>>>>> intermedia
router.get('/user', withAuth, (req, res, next) => {
    res.render('photos/user');
});

router.get('/userAccount', withAuth, (req, res, next) => {
    res.render('photos/userAccount');
})


module.exports = router; 
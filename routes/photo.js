const express = require("express");
const router = express.Router();
const withAuth = require("../helpers/middleware");


const Photo = require('../models/photo');
const User = require("../models/user");


//ruta de Themes:
router.get('/themes', withAuth, async (req, res, next) => {
  try{
    let counter1 = await Photo.find({theme: "Black and White"}).countDocuments();
    let random1= Math.floor(Math.random() * counter1);
    const photosblackandwhite = await Photo.find({theme: "Black and White"}).skip(random1).limit(3);
    let counter2 = await Photo.find({theme: "Urban"}).countDocuments();
    let random2= Math.floor(Math.random() * counter2);
    const photosurban = await Photo.find({theme: "Urban"}).skip(random2).limit(3);
    let counter3 = await Photo.find({theme: "Landscape"}).countDocuments();
    let random3= Math.floor(Math.random() * counter3);
    const photoslandscape = await Photo.find({theme: "Landscape"}).skip(random3).limit(3);
    let counter4 = await Photo.find({theme: "Street-life"}).countDocuments();
    let random4= Math.floor(Math.random() * counter4);
    const photosstreetlife = await Photo.find({theme: "Street-life"}).skip(random4).limit(3);
    let counter5 = await Photo.find({theme: "Macro"}).countDocuments();
    let random5= Math.floor(Math.random() * counter5);
    const photosmacro = await Photo.find({theme: "Macro"}).skip(random5).limit(3);
    
    res.render('photos/themes', {photosblackandwhite, photosurban, photoslandscape, photosstreetlife, photosmacro});  
  } catch (err){
    console.log(err)
  }
    
});




//ruta de cada uno de los Themes:
router.get('/oneTheme/blackandwhite', withAuth, async (req, res, next) => {
    const photos = await Photo.find({theme: "Black and white"})
    res.render('photos/oneTheme', {photos});
});
router.get('/oneTheme/urban', withAuth, async (req, res, next) => {
    const photos = await Photo.find({theme: "Urban"})
    res.render('photos/oneTheme', {photos});
});
router.get('/oneTheme/landscape', withAuth, async (req, res, next) => {
    const photos = await Photo.find({theme: "Landscape"})
    res.render('photos/oneTheme', {photos});
});
router.get('/oneTheme/street-life', withAuth, async (req, res, next) => {
    const photos = await Photo.find({theme: "Street Life"})
    res.render('photos/oneTheme', {photos});
});
router.get('/oneTheme/macro', withAuth, async (req, res, next) => {
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
    let user = req.userID;

    res.render('photos/payments')
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


//ruta de User y User Account:
router.get('/user', withAuth, (req, res, next) => {
    res.render('photos/user');
});

router.get('/userAccount', withAuth, (req, res, next) => {
    res.render('photos/userAccount');
})


module.exports = router; 
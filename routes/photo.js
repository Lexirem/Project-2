const express = require("express");
const router = express.Router();
const withAuth = require("../helpers/middleware");


const Photo = require('../models/photo');
const User = require("../models/user");


//ruta de Themes:
router.get('/themes', withAuth, async (req, res, next) => {

    try {
        let counter = await Photo.find({ theme: "Street-Life" }).countDocuments();
        let random = Math.floor(Math.random() * counter);
        const photosStreetLife = await Photo.find({ theme: "Street-Life" }).skip(random).limit(2);

        let counter1 = await Photo.find({ theme: "Black and white" }).countDocuments();
        let random1 = Math.floor(Math.random() * counter1);
        const photosblackandwhite = await Photo.find({ theme: "Black and white" }).skip(random1).limit(2);

        let counter2 = await Photo.find({ theme: "Urban" }).countDocuments();
        let random2 = Math.floor(Math.random() * counter2);
        const photosUrban = await Photo.find({ theme: "Urban" }).skip(random2).limit(2);

        let counter3 = await Photo.find({ theme: "Macro" }).countDocuments();
        let random3 = Math.floor(Math.random() * counter3);
        const photosMacro = await Photo.find({ theme: "Macro" }).skip(random3).limit(2);

        let counter4 = await Photo.find({ theme: "Landscape" }).countDocuments();
        let random4 = Math.floor(Math.random() * counter4);
        const photosLandscape = await Photo.find({ theme: "Landscape" }).skip(random4).limit(2);

        res.render('photos/themes', { photosStreetLife, photosblackandwhite, photosUrban, photosMacro, photosLandscape});

    } catch (error) {
        console.log(error);
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
    const photos = await Photo.find({theme: "Street-Life"})
    res.render('photos/oneTheme', {photos});
});
router.get('/oneTheme/macro', withAuth, async (req, res, next) => {
    const photos = await Photo.find({theme: "Macro"})
    res.render('photos/oneTheme', {photos});
});

//ruta de One Photo por su ID:
router.get('/onePhoto/:id', withAuth, async (req, res, next) => {
    //console.log(req.params.id)
    const photos = await Photo.findById(req.params.id);
    //console.log(photos)
    res.render('photos/onePhoto', { photos });
});



//ruta de Payments:
router.get('/payments', withAuth, (req, res, next) => {
    let user = req.userID;

    res.render('photos/payments')
});
router.post('/payments', withAuth, async (req, res, next) => {
    let payment = await User.findById(req.params.id)
    try {
        if (user !== null) {

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

router.post('/userAccount', withAuth, async (req, res, next) => {
    let idUser = req.userID;
    const {name, email, address} = req.body;
    try{
      let updateUser = await User.findByIdAndUpdate(idUser, {name, email, address}, {new:true});  
      res.redirect('/user');  
    } catch(err){
        console.log(err)
    }
});



module.exports = router; 
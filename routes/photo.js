const express = require("express");
const router = express.Router();

const Photo = require('../models/photo');

router.get('/photo', (req, res, next) => {
    res.render('photos/onePhoto')
});


//indicar ruta de themes y oneTheme o crear theme file en routes
router.get('/themes', (req, res, next) => {
    res.render('photos/themes')
});

router.get('/oneTheme', (req, res, next) => {
    res.render('photos/oneTheme')
});

//indicar ruta de cart
router.get('/cart', (req, res, next) => {
    res.render('photos/cart')
});

//indicar ruta de payments
    //ruta get y ruta post
router.post('/payments', async (req, res, next) => {
    const userId = req.userID;
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
router.get('/user', (req, res, next) => {
    res.render('photos/user')
});

router.post('/user', async (req, res, next) => {
    const userId = req.userID; 
})

module.exports = router; 
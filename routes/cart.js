const express = require("express");
const router = express.Router();
const withAuth = require("../helpers/middleware");


const Photo = require('../models/photo');
const User = require("../models/user");

//indicar ruta de cart
router.get('/cart', withAuth, async (req, res, next) => {
    let idUser = req.userID;
    let user = await User.findById(idUser).populate("cart");
    let userPhotos = user.cart;
    console.log(userPhotos)
    res.render('photos/cart', {userPhotos});
});

//ruta para añadir foto al carrito
router.post('/add-to-cart/:id', withAuth, async (req, res, next) => {
    let idPhoto = req.params.id;
    let idUser = req.userID;
    try{
        let user = await User.findByIdAndUpdate(idUser, {$push: {cart: idPhoto}}, {new: true} );
        // console.log(user)
        res.redirect('/cart');
    } catch (err) {
        console.log(err)
        next(err);
    }

});



module.exports = router;

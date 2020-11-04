const express = require("express");
const router = express.Router();
const withAuth = require("../helpers/middleware");


const Photo = require('../models/photo');
const User = require("../models/user");
const Cart = require('../models/cart');

//indicar ruta de cart
router.get('/cart', withAuth, (req, res, next) => {
    console.log('hola', Cart.items);
    res.render('photos/cart')
});

//ruta para añadir foto al carrito
router.get('/add-to-cart/:id', withAuth, async (req, res, next) => {
    const photoId = await Photo.findById(req.params.id);
    // const user = await User.findById(res.locals.currentUserInfo._id);
    let cart = new Cart(req.session.cart ? req.session.cart : {items: {} } );
    console.log(cart.items);
    Photo.findById(photoId, function(err, photo){
        if(err){
            return res.redirect ('/cart');
        }
        cart.add(photo, photo.id)
        req.session.cart = cart;
        console.log(req.session.cart)
        res.redirect('/cart');
    });

});

router.get('/cart', function(req, res, next) {
    if(!req.session.cart){
        return res.render('photos/cart', {photo: null});
    }
    let cart = new Cart(req.session.cart);
    res.render('photos/cart', {photo: cart.generateArray(), totalPrice: cart.totalPrice()});
});

module.exports = router;

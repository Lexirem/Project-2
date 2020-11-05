const express = require("express");
const router = express.Router();
const withAuth = require("../helpers/middleware");

const Photo = require("../models/photo");
const User = require("../models/user");

//indicar ruta de cart
router.get("/cart", withAuth, async (req, res, next) => {
  let idUser = req.userID;
  let user = await User.findById(idUser).populate("cart");
  let userPhotos = user.cart;
  // console.log(userPhotos)
  res.render("photos/cart", { userPhotos });
});

//ruta para añadir foto al carrito
router.post("/add-to-cart/:id", withAuth, async (req, res, next) => {
  let idPhoto = req.params.id;
  let idUser = req.userID;
  try {
    let user = await User.findByIdAndUpdate(
      idUser,
      { $addToSet: { cart: idPhoto } },
      { new: true }
    );
    // console.log(user)
    res.redirect("/cart");
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//ruta para eliminar una foto del carrito
router.post("/delete/:id", withAuth, async (req, res, next) => {
  let idPhoto = req.params.id;
  let idUser = req.userID;
  try {
    let foundUser = await User.findById(idUser);
    console.log(foundUser.cart.length)
    if(foundUser.cart.length > 1){
    let user = await User.findByIdAndUpdate(
      idUser,
      { $pull: { cart: idPhoto } },
      { new: true }
    );
    console.log(user);
    res.redirect("/cart");
    } else {
    let user = await User.findByIdAndUpdate(
      idUser,
      { cart: []},
      { new: true }
    );
    console.log(user);
    res.redirect('/cart')
    };
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;

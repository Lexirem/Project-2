var express = require('express');
const app = require('../app');
var router = express.Router();
const withAuth = require("../helpers/middleware");

/* GET home page. */
router.get('/', withAuth, function(req, res, next) {
  res.render('index', { title: 'SM-Photography' });
});

 /*username*/
/*app.get("/user/:username", (req, res, next) => {
  res.send(req.params);
});

/* route for cart. */
router.get("/cart", (req, res, next) =>{
  res.render("photos/cart");
}); 

/*
app.get("/search",  (req, res, next) => {
  let image = req.query.image
  res.send(`$(image)`);
});)
*/




module.exports = router;

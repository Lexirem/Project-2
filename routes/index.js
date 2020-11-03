var express = require('express');
const app = require('../app');
var router = express.Router();
const withAuth = require("../helpers/middleware");

/* GET home page. */
router.get('/', withAuth, function(req, res, next) {
  res.render('index', { title: 'SM-Photography' });
});

<<<<<<< HEAD
=======


>>>>>>> rama-meritxell

module.exports = router;

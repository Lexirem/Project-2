const express = require("express");
const router = express.Router();

const bcrypt = require('bcryptjs');
const bcryptSalt = 10; 

const jwt = require("jsonwebtoken");

const User = require('../models/user');

const withAuth = require("../helpers/middleware");

router.get("/signup", (req, res, next) => {
    res.render("auth/signup", {
        errorMessage: ""
    });
});

router.post("/signup", async (req, res, next) => { 
    const { name, email, password } = req.body;
  
    if (email === "" || password === "" || name === "") {
      res.render("auth/signup", {
        errorMessage: "Enter name, email and password to sign up.",
      });
      return;
    }
  
    try {
      const existingUser = await User.findOne({ email });
  
      if (existingUser !== null) {
        res.render("auth/signup", {
          errorMessage: `The email ${email} is already in use.`,
        });
        return;
      }
  
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashedPass = bcrypt.hashSync(password, salt);
  
      const userSubmission = {
        name: name,
        email: email,
        password: hashedPass,
      };
  
      const theUser = new User(userSubmission);
  
      theUser.save((err) => {
        if (err) {
          res.render("auth/signup", {
            errorMessage: "Something went wrong. Try again later.",
          });
          return;
        }
  
        res.redirect("/");
      });
    } catch (error) {
      next(error);
      return;
    }
  });
  
router.get('/login', (req, res, next) => {
    res.render('auth/login', {
      errorMessage: ''
    });
  });

router.post("/login", async (req, res) => { 
    // desestructuramos el email y el password de req.body
    const { email, password } = req.body;
  
    // si alguna de estas variables no tiene un valor, renderizamos la vista de auth/signup con un mensaje de error
    if (email === "" || password === "") {
      res.render("auth/login", {
        errorMessage: "Please enter both, username and password to sign up.",
      });
      return;
    }
  
    try {
      // revisamos si el usuario existe en la BD
      const user = await User.findOne({ email });
      // si el usuario no existe, renderizamos la vista de auth/login con un mensaje de error
      if (!user) {
        res.render("auth/login", {
          errorMessage: "The email doesn't exist.",
        });
        return;
      }
      // si el usuario existe, hace hash del password y lo compara con el de la BD
      else if (bcrypt.compareSync(password, user.password)) {
        // Issue token
        const userWithoutPass = await User.findOne({ email }).select("-password");
        const payload = { userID: userWithoutPass._id };
        //console.log('payload', payload);
        // si coincide, creamos el token usando el método sign, el string de secret session y el expiring time
        const token = jwt.sign(payload, process.env.SECRET_SESSION, {
          expiresIn: "1h",
        });
        // enviamos en la respuesta una cookie con el token y luego redirigimos a la home
        res.cookie("token", token, { httpOnly: true });
        res.status(200).redirect("/");
      } else {
        // en caso contrario, renderizamos la vista de auth/login con un mensaje de error
        res.render("auth/login", {
          errorMessage: "Incorrect password",
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
  
  router.get("/logout", withAuth, (req, res) => {
    // seteamos el token con un valor vacío y una fecha de expiración en el pasado (Jan 1st 1970 00:00:00 GMT)
    res.cookie("token", "", { expires: new Date(0) });
    res.redirect("/");
  });

module.exports = router;
const express = require('express');
const router = express.Router();
const withAuth = require('../helpers/middleware');
//requerimos paquete bcrypt y definimos valor para bcryptSalt
const bcrypt = require('bcryptjs');
const bcryptSalt = 10;

const jwt = require('jsonwebtoken');


const User = require('../models/user')

router.get("/signup", (req, res, next) => {
    res.render('auth/signup', {errorMessage: ''} );
});

router.post("/signup", async (req, res, next) => {
   const {name, email, password} = req.body; 
    
    if (email === '' || password === '' || name === ''){
        res.render("auth/signup", {
            errorMessage: "Indicate a username and a password to login",
        });
        return;
    }
    
    try{
        const existUser = await  User.findOne({email: email});
        console.log(existUser)
        
        if(existUser !== null){
            res.render('auth/signup', {errorMessage: `This email ${email} already exists!!`})
            return;
        } 
        
        
        const salt = bcrypt.genSaltSync(bcryptSalt);
        const hashedPass = bcrypt.hashSync(password, salt);
        
        const userSubmit = {
            name: name,
            email: email,
            password: hashedPass,
        };
        
        const theUser = new User(userSubmit);

        theUser.save( (err) => {
            if(err){
                res.render("auth/signup", {
                    errorMessage: 'Something went wrong. Try again.'
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

//iteration 2
router.get('/login', (req, res, next) => {
    res.render('auth/login', {errorMessage: ''});
});

router.post('/login', async (req,res) => {
    const { email, password } = req.body;
    // si alguna de estas variables no tiene un valor, renderizamos la vista de auth/signup con un mensaje de error
  if (email === '' || password === '') {
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
    // si el usuario existe, hace hash del password y lo compara con el de la BD (con el mÃ©todo de bcrypt de compareSync)
    else if (bcrypt.compareSync(password, user.password)) {
      // Issue token
      // buscamos nuestro usuario por 'email' y tramos toda la informacion salvo por el password (metodo select) y lo metemos en una variable.
      const userWithoutPass = await User.findOne({ email }).select("-password");
      
      const payload = { userID: userWithoutPass._id };
      // si coincide, creamos el token usando el metodo sign, el string de secret session y el expiring time
      const token = jwt.sign(payload, process.env.SECRET_SESSION, {
        expiresIn: "1h",
      });
      // enviamos en la respuesta una cookie con el token (recordar agregar el {httpOnly: true} en la respuesta) y luego redirigimos a la home
      res.cookie("token", token, { httpOnly: true });
      res.status(200).redirect('/');
    } else {
      // en caso contrario, renderizamos la vista de auth/login con un mensaje de error
      res.render('auth/login', {errorMessage: "Incorrect password"});
    } 
  } catch (error) {
    console.log(error);
  }
});


router.get('/logout', withAuth, (req, res) => {
    //  Seteamos el token con un valor vacio y una fecha de expiracion en el pasado (Jan 1st 1970 00:00:00 GMT) - Esto es una forma pra¡ctica de 'anular' el token, y por ende desloguearnos.
    res.cookie("token", "", {expires: new Date(0)});
    //Redirigimos a nuestra ruta '/'
    res.redirect('/');
});


module.exports = router;
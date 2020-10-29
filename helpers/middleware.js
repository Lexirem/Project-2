<<<<<<< HEAD
const jwt = require("jsonwebtoken");
=======
//crearemos nuestro propio middleware express personalizado que se ubicará entre una solicitud y una ruta protegida y verificaremos si la solicitud está autorizada.
//Esta función de middleware buscará el token en las cookies de request y luego lo validará.

const jwt = require("jsonwebtoken");

>>>>>>> b11952c28e8ad56cc6499def92c4954aab1e2e61
const secret = process.env.SECRET_SESSION;

const User = require("../models/user");

<<<<<<< HEAD
// declaramos la funcion withAuth y la definimos asincrona
const withAuth = async (req, res, next) => {
    try {
      const token = req.cookies.token;
      // si no hay token, seteamos el valor de la variable isUserLoggedIn en false y pasamos el control a la siguiente funcion de middleware
      if (!token) {
      // utilizamos el objeto res.locals para declarar una variable "isUserLoggedIn" que definiremos inicialmente como 'false'
        res.locals.isUserLoggedIn = false;
        next();
      } else {
        // verificamos el token con el metodo verify de jwt
        const decoded = await jwt.verify(token, secret);

        // si el token valida, configuramos req.userID con el valor del decoded userID
        req.userID = decoded.userID;
        // ... y con Ã©l, hacemos una bÃºsqueda del usuario por ID y lo metemos en la variable 'currentUserInfo'de nuestro objeto res.locals...
        res.locals.currentUserInfo = await User.findById(req.userID);
        //  ... y cambiamos el valor de 'isUserLoggedIn' a 'true' ya que ahora verificamos que el usuario estÃ¡
        res.locals.isUserLoggedIn = true;
        next();
      }
    } catch (err) {
      // si hay un error, configuramos el valor de la variable isUserLoggedIn en false y pasamos el control a la siguiente ruta
      console.error(err);
      res.locals.isUserLoggedIn = false;
      next(err);
    }
  };
  
  module.exports = withAuth;
=======
const withAuth = async (req, res, next) => {
  try {
    // obtenemos el token de las cookies
    const token = req.cookies.token;
    // si no hay token, seteamos el valor de la variable isUserLoggedIn en false y pasamos el control a la siguiente función de middleware
    if (!token) {
      res.locals.isUserLoggedIn = false;
      next();
    } else {
      // verificamos el token
      const decoded = await jwt.verify(token, secret);

      // si el token valida, configuramos req.userID con el valor del decoded userID
      req.userID = decoded.userID;
      res.locals.currentUserInfo = await User.findById(req.userID);
      res.locals.isUserLoggedIn = true;
      next();
    }
  } catch (err) {
    // si hay un error, configuramos el valor de la variable isUserLoggedIn en false y pasamos el control a la siguiente ruta
    console.error(err);
    res.locals.isUserLoggedIn = false;
    next(err);
  }
};

module.exports = withAuth;
>>>>>>> b11952c28e8ad56cc6499def92c4954aab1e2e61

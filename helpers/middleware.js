//crearemos nuestro propio middleware express personalizado que se ubicará entre una solicitud y una ruta protegida y verificaremos si la solicitud está autorizada.
//Esta función de middleware buscará el token en las cookies de request y luego lo validará.

const jwt = require("jsonwebtoken");

const secret = process.env.SECRET_SESSION;

const User = require("../models/user");

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
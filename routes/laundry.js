const express = require('express');
const router = express.Router();
const LaundryPickup = require('../models/laundry-pickup');

const withAuth = require("../helpers/middleware");

const User = require('../models/user');

router.get("/dashboard", withAuth, async (req, res, next) => {
    // si existe req.user, quiere decir que el middleware withAuth ha devuelto el control a esta ruta y renderizamos la vista secret con los datos del user.
    if (req.userID) {
        try {
            // actualizamos la variable res.locals.currentUserInfo con los datos actualizados del usuario
            const userUpdated = await User.findById({ _id: req.userID });
            res.locals.currentUserInfo = userUpdated;

            let query;

            if (res.locals.currentUserInfo.isLaunderer) {
              query = { launderer: res.locals.currentUserInfo._id };
            } else {
              query = { user: res.locals.currentUserInfo._id };
            }
      
            const pickupDocs = await LaundryPickup.find(query)
              .populate("user", "name")
              .populate("launderer", "name")
              .sort("pickupDate")
              .exec()
      
            res.render("laundry/dashboard", {
              pickups: pickupDocs,
            });
          } catch (error) {
            next(err);
            return;
          }
        } else {
          // en caso contrario (si no hay token) redirigimos a la home
          res.redirect("/");
        }
      });

router.post("/launderers", withAuth, async (req, res, next) => {
    const userId = req.userID;
    const laundererInfo = {
        fee: req.body.fee,
        isLaunderer: true,
    };

    try {
        const theUser = await User.findByIdAndUpdate(userId, laundererInfo, {
            new: true,
        });

        req.user = theUser;
        //console.log("now is a launderer", theUser);
        res.redirect("/dashboard");
    } catch (error) {
        next(err);
        return;
    }
});

router.get("/launderers", withAuth, async (req, res, next) => {
    try {
      const launderersList = await User.find({
        $and: [//filtro de búsqueda en la ruta '/launderers' para que podamos ver todos los lavanderos excepto nosotros mismos.
          { isLaunderer: true },
          { _id: { $ne: req.userID } },
        ],
      });
      res.render("laundry/launderers", {
        launderers: launderersList,
      });
    } catch (error) {
      next(err);
      return;
    }
  });


router.get("/launderers/:id", async (req, res, next) => {
    const laundererId = req.params.id;
  
    try {
      const theUser = await User.findById(laundererId);
  
      res.render("laundry/launderer-profile", {
        theLaunderer: theUser,
      });
    } catch (error) {
      next(err);
      return;
    }
  });

  router.post("/laundry-pickups", withAuth, (req, res, next) => {
    const pickupInfo = {
      pickupDate: req.body.pickupDate,
      launderer: req.body.laundererId,
      user: req.userID,
    };
  
    const thePickup = new LaundryPickup(pickupInfo);
  
    thePickup.save((err) => {
      if (err) {
        next(err);
        return;
      }
  
      res.redirect("/dashboard");
    });
  });

module.exports = router;
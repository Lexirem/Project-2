const express = require('express');

const router = express.Router();

router.get('/dashboard', (req, res, next) => {
  res.render('account/dashboard');
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

module.exports = router;
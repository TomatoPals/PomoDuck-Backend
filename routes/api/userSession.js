const router = require("express").Router();
const loginController = require("../../controllers/loginController");
const logoutController = require("../../controllers/logoutController");
const passport = require("../../config/passport");

router
  .route("/login")
  .post(passport.authenticate("local"), loginController.authenticate);
router.route("/logout").get(logoutController.logout);

module.exports = router;

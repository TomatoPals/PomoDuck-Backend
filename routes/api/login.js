const router = require("express").Router();
const loginController = require("../../controllers/loginController");
const passport = require("../../config/passport");

router
  .route("/")
  .post(passport.authenticate("local"), loginController.authenticate);

module.exports = router;

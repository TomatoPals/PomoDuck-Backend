const router = require("express").Router();
const userSessionController = require("../../controllers/userSessionController");
const passport = require("../../config/passport");

router
  .route("/login")
  .post(passport.authenticate("local"), userSessionController.authenticate);
router.route("/logout").get(userSessionController.logout);

module.exports = router;

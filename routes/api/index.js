const router = require("express").Router();
const userRoute = require("./user");
const loginRoute = require("./login");

router.use("/user", userRoute);
router.use("/login", loginRoute);

module.exports = router;

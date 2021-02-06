const router = require("express").Router();
const userRoute = require("./user");
const taskRoute = require("./task");
const loginRoute = require("./login");

router.use("/user", userRoute);
router.use("/login", loginRoute);
router.use("/task", taskRoute);

module.exports = router;

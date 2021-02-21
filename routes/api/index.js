const router = require("express").Router();
const userRoute = require("./user");
const taskRoute = require("./task");
const userSession = require("./userSession");

router.use("/user", userRoute);
router.use("/userSession", userSession);
router.use("/task", taskRoute);

module.exports = router;

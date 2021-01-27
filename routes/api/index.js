const router = require("express").Router();
const userRoute = require("./user");

router.use("/user", userRoute);

module.exports = router;

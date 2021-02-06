const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/createuser").post(userController.create);
router.route("/getuser/:id").get(userController.findById);
router.route("/removeuser/:id").delete(userController.remove);
router.route("/updateuser/:id").put(userController.update);

module.exports = router;

const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/signup").post(userController.create);
router.route("/getuser/:id").get(userController.findById);
router.route("/remove/:id").delete(userController.remove);
router.route("/update/:id").put(userController.update);
router.route("/updateprofile/:id").put(userController.updateProfile);

module.exports = router;

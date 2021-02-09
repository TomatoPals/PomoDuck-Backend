const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/signup").post(userController.create);
router.route("/getuser/:id").get(userController.findById);
router.route("/remove/:id").delete(userController.remove);
router.route("/update/:id").put(userController.update);

module.exports = router;

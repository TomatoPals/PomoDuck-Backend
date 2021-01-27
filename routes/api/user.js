const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/").post(userController.create);
router.route("/:id").get(userController.findById);
router.route("/remove/:id").delete(userController.remove);
router.route("/update/:id").put(userController.update);

module.exports = router;

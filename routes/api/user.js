const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/createuser").post(userController.create);
router.route("/getuser/:id").get(userController.findById);
<<<<<<< HEAD
router.route("/removeuser/:id").delete(userController.remove);
router.route("/updateuser/:id").put(userController.update);
=======
router.route("/userremove/:id").delete(userController.remove);
router.route("/userupdate/:id").put(userController.update);
>>>>>>> develop

module.exports = router;

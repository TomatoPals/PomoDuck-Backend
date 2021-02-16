const router = require("express").Router();
const taskController = require("../../controllers/taskController");

router.route("/createtask").post(taskController.create);
router.route("/gettask/:id").get(taskController.findById);
router.route("/taskremove/:id").delete(taskController.remove);
router.route("/taskupdate/:id").put(taskController.update);
router.route("/findtasks/:id").get(taskController.findByUserId);

module.exports = router;

const db = require("../models");

module.exports = {
  create: async (req, res) => {
    try {
      const newTask = await db.Task.create({
        userId: req.body.userId,
        taskName: req.body.taskName,
        estimatedPoms: req.body.estimatedPoms
      });
      res.json({
        userId: newTask.userId,
        taskName: newTask.taskName,
        estimatedPoms: newTask.estimatedPoms
      });
    } catch (error) {
      res.status(422).json(error);
    }
  },
  findById: async (req, res) => {
    try {
      const allTasks = await db.Task.findAll({
        where: {
          id: req.params.id
        }
      });
      res.json(allTasks);
    } catch (error) {
      res.status(422).json(error);
    }
  },
  remove: async (req, res) => {
    try {
      const allTasks = await db.Task.destroy({
        where: {
          id: req.params.id
        }
      });
      res.json(allTasks);
    } catch (error) {
      res.status(422).json(error);
    }
  },
  update: async (req, res) => {
    try {
      const allTasks = await db.Task.update(req.body, {
        where: {
          id: req.params.id
        }
      });
      res.json(allTasks);
    } catch (error) {
      res.status(422).json(error);
    }
  },
  findByUserId: async (req, res) => {
    try {
      const allTasks = await db.Task.findAll({
        where: {
          userId: req.params.id
        }
      });
      res.json(allTasks);
    } catch (error) {
      res.status(422).json(error);
    }
  }
};

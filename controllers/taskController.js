const db = require("../models");

module.exports = {
  create: async (req, res) => {
    try {
      const newTask = await db.Task.create({
        
      });
      res.json({  });
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
  }
};

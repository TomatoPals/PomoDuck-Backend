const db = require("../models");

module.exports = {
  create: async (req, res) => {
    try {
      const newUser = await db.User.create({
        email: req.body.email,
        password: req.body.password
      });
      res.json(newUser);
    } catch (error) {
      res.status(422).json(error);
    }
  },
  findAll: async (req, res) => {
    try {
      const allUsers = await db.User.findAll({});
      res.json(allUsers);
    } catch (error) {
      res.status(422).json(error);
    }
  },
  findById: async (req, res) => {
    try {
      const allUsers = await db.User.findAll({
        where: {
          id: req.params.id
        }
      });
      res.json(allUsers);
    } catch (error) {
      res.status(422).json(error);
    }
  }
};

const db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = {
  create: async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password,
      country,
      alias,
      aliasImage,
      displayPref,
      totalPomSeconds,
      totalSmallBreakSeconds,
      totalBigBreakSeconds,
      pomTime,
      smallBreakTime,
      bigBreakTime
    } = req.body;

    try {
      const newUser = await db.User.create({
        firstName,
        lastName,
        email,
        password,
        country,
        alias,
        aliasImage,
        displayPref,
        totalPomSeconds,
        totalSmallBreakSeconds,
        totalBigBreakSeconds,
        pomTime,
        smallBreakTime,
        bigBreakTime
      });
      res.json({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        id: newUser.id,
        totalPomSeconds: newUser.totalPomSeconds,
        totalSmallBreakSeconds: newUser.totalSmallBreakSeconds,
        totalBigBreakSeconds: newUser.totalBigBreakSeconds
      });
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
  },
  remove: async (req, res) => {
    try {
      const allUsers = await db.User.destroy({
        where: {
          id: req.params.id
        }
      });
      res.json(allUsers);
    } catch (error) {
      res.status(422).json(error);
    }
  },
  update: async (req, res) => {
    try {
      const allUsers = await db.User.update(req.body, {
        where: {
          id: req.params.id
        }
      });
      res.json(allUsers);
    } catch (error) {
      res.status(422).json(error);
    }
  },
  updateProfile: async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      const allUsers = await db.User.update(
        {
          firstName,
          lastName,
          email,
          password: bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
        },
        {
          where: {
            id: req.params.id
          }
        }
      );
      console.log(allUsers);
      res.json(allUsers);
    } catch (error) {
      res.status(422).json(error);
    }
  }
};

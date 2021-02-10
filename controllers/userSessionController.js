module.exports = {
  authenticate: (req, res) => {
    try {
      res.json({
        firstName: req.user.dataValues.firstName,
        lastName: req.user.dataValues.lastName,
        email: req.user.dataValues.email,
        id: req.user.dataValues.id
      });
    } catch (error) {
      res.status(422).json(error);
    }
  },
  logout: (req, res) => {
    try {
      req.logout();
      res.json({
        message: "logout successful"
      });
    } catch (error) {
      res.status(422).json(error);
    }
  }
};

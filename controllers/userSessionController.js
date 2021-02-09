module.exports = {
  authenticate: (req, res) => {
    try {
      res.json({
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

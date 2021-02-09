module.exports = {
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

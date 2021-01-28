module.exports = {
  authenticate: (req, res) => {
    res.json({
      email: req.user.dataValues.email,
      id: req.user.dataValues.id
    });
  }
};

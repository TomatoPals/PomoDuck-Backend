module.exports = {
  authenticate: (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  }
};

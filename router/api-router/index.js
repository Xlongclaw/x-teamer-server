const userModel = require("../../database/models/userModel");

const router = require("express").Router();

router.route("/").get((_, res) => {
  res.send("/api ENDPOINT");
});

router.route("/users").get(async (req, res) => {
  try {
    const users = await userModel
      .find({})
      .limit(20)
      .skip(((req.query.page ?? 1) - 1) * 20);
    res.status(200).json({ users });
  } catch (error) {
    res.status(400);
  }
});

router.route("/users/:id").get(async (req, res) => {
  try {
    const [user] = await userModel.find({ id: req.params.id });
    res.status(200).json({ user });
  } catch (error) {
    res.status(400);
  }
});

module.exports = router;

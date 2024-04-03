const teamModel = require("../../database/models/teamModel");
const userModel = require("../../database/models/userModel");

const router = require("express").Router();

router.route("/").get((_, res) => {
  res.send("/api ENDPOINT");
});

router
  .route("/users")
  .get(async (req, res) => {
    try {
      const { first_name, domain, gender } = JSON.parse(
        req.query.filterOptions
      );
      const documentCount = await userModel.countDocuments({
        first_name: { $regex: `^${first_name}`, $options: "i" },
      });
      const users = await userModel
        .find({
          first_name: { $regex: `^${first_name ?? ""}`, $options: "i" },
          domain: { $regex: `^${domain ?? ""}`, $options: "i" },
          gender: { $regex: `^${gender ?? ""}`, $options: "i" },
        })
        .limit(20)
        .skip(((req.query.page ?? 1) - 1) * 20);
      res.status(200).json({ users, count: documentCount });
    } catch (error) {
      res.status(400);
    }
  })
  .post(async (req, res) => {
    try {
      await userModel.create(req.body.user);
      res.status(200).json({ message: "user added successfully" });
    } catch (error) {
      res.status(400);
    }
  });

router
  .route("/users/:id")
  .get(async (req, res) => {
    try {
      const [user] = await userModel.find({ id: req.params.id });
      res.status(200).json({ user });
    } catch (error) {
      res.status(400);
    }
  })
  .put(async (req, res) => {
    try {
      const userUpdate = req.body.user;
      await userModel.findOneAndUpdate({ id: req.params.id }, userUpdate);
      res.status(200).json({ message: "user updated succesfully" });
    } catch (error) {
      res.status(400);
    }
  })
  .delete(async (req, res) => {
    try {
      await userModel.deleteOne({ id: req.params.id });
      res.status(200).json({ message: "user deleted succesfully" });
    } catch (error) {
      res.status(400);
    }
  });

router
  .route("/team")
  .post(async (req, res) => {
    try {
      await teamModel.create(req.body.team);
      res.status(200).json({ message: "team created successfully" });
    } catch (error) {
      res.status(400);
    }
  })
  .get(async (_, res) => {
    try {
      const teams = await teamModel.find({});
      res.status(200).json({ teams });
    } catch (error) {
      res.status(400);
    }
  });

router.route("/team/:id").get(async (req, res) => {
  try {
    const [team] = await teamModel.find({ _id: req.params.id });
    res.status(200).json({ team });
  } catch (error) {
    res.status(400);
  }
});

module.exports = router;

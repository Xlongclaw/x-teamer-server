/**
 * Express router for handling API endpoints related to users and teams.
 * @module userTeamRouter
 */

const teamModel = require("../../database/models/teamModel");
const userModel = require("../../database/models/userModel");

const router = require("express").Router();

/**
 * Route serving the root endpoint of the API.
 * @name GET /api
 * @function
 * @memberof module:userTeamRouter
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.route("/").get((_, res) => {
  res.send("/api ENDPOINT");
});

// User endpoints
router
  .route("/users")
  .get(async (req, res) => {
    try {
      // Parsing filter options from query string
      const { first_name, domain, gender, available } = JSON.parse(
        req.query.filterOptions
      );

      const filter = {
        first_name: { $regex: `^${first_name ?? ""}`, $options: "i" },
        domain: { $regex: `^${domain ?? ""}`, $options: "i" },
        gender: { $regex: `^${gender ?? ""}`, $options: "i" },
        available: available ?? true,
      };

      // Counting documents matching filter criteria
      const documentCount = await userModel.countDocuments(filter);
      // Finding users matching filter criteria, limiting results to 20 per page
      const users = await userModel
        .find(filter)
        .limit(20)
        .skip(((req.query.page ?? 1) - 1) * 20);

      // Sending response with users and total count
      res.status(200).json({ users, count: documentCount });
    } catch (error) {
      res.status(400);
    }
  })
  .post(async (req, res) => {
    try {
      // Creating a new user document
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
      // Finding user by ID
      const [user] = await userModel.find({ id: req.params.id });
      res.status(200).json({ user });
    } catch (error) {
      res.status(400);
    }
  })
  .put(async (req, res) => {
    try {
      // Updating user document
      const userUpdate = req.body.user;
      await userModel.findOneAndUpdate({ id: req.params.id }, userUpdate);
      res.status(200).json({ message: "user updated successfully" });
    } catch (error) {
      res.status(400);
    }
  })
  .delete(async (req, res) => {
    try {
      // Deleting user document
      await userModel.deleteOne({ id: req.params.id });
      res.status(200).json({ message: "user deleted successfully" });
    } catch (error) {
      res.status(400);
    }
  });

// Team endpoints
router
  .route("/team")
  .post(async (req, res) => {
    try {
      // Creating a new team document
      await teamModel.create(req.body.team);
      res.status(200).json({ message: "team created successfully" });
    } catch (error) {
      res.status(400);
    }
  })
  .get(async (_, res) => {
    try {
      // Retrieving all teams
      const teams = await teamModel.find({});
      res.status(200).json({ teams });
    } catch (error) {
      res.status(400);
    }
  });

router.route("/team/:id").get(async (req, res) => {
  try {
    // Finding team by ID
    const [team] = await teamModel.find({ _id: req.params.id });
    res.status(200).json({ team });
  } catch (error) {
    res.status(400);
  }
});

module.exports = router;

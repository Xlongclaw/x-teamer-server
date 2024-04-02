const router = require("express").Router();

router.route("/").get((_, res) => {
  res.send("X-Teamer Server Running");
});

module.exports = router;

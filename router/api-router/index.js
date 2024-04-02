const router = require("express").Router();

router.route("/api").get((_, res) => {
  res.send("/api ENDPOINT");
});

module.exports = router;

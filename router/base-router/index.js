/**
 * Express router for handling base routes.
 * @module baseRouter
 */

const router = require("express").Router();

/**
 * Route serving the root endpoint.
 * @name GET /
 * @function
 * @memberof module:baseRouter
 * @param {Object} _ - Express request object (unused).
 * @param {Object} res - Express response object.
 */
router.route("/").get((_, res) => {
  res.sendFile(`./server-info.html`,{ root: __dirname });
});

module.exports = router;

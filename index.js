const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const baseRouter = require("./router/base-router");
const apiRouter = require("./router/api-router");
const connectDB = require("./database/connectDB");
const bodyParser = require("body-parser");
const path = require('node:path')

dotenv.config();

const app = express();
const PORT = process.env.PORT;

/**
 * Express application for handling HTTP requests.
 * @module server
 */

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname , '/public')));

// Routes for base URL and API
app.use("/", baseRouter);
app.use("/api", apiRouter);

/**
 * Starts the server and listens on the specified port.
 * @name Listen
 * @function
 * @memberof module:server
 * @param {number} PORT - The port number on which the server will listen.
 */
app.listen(PORT, async () => {
  console.log(`🟢 Server running at port: ${PORT}`);
  // Connect to the database
  connectDB();
});

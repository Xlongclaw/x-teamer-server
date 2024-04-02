const express = require("express");
const dotenv = require("dotenv");
const baseRouter = require("./router/base-router");
const apiRouter = require("./router/api-router");
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(baseRouter);
app.use(apiRouter);

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});

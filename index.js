const express = require("express");
const dotenv = require("dotenv");
const router = require("./router/base-router");
dotenv.config()
const app = express();
const PORT = process.env.PORT;


app.use(router)

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});

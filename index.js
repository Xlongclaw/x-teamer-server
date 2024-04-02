const express = require("express");
const dotenv = require("dotenv")
dotenv.config()
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});

const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors')
const baseRouter = require("./router/base-router");
const apiRouter = require("./router/api-router");
const connectDB = require("./database/connectDB");
const bodyParser = require("body-parser");
dotenv.config();
const app = express();
const PORT = process.env.PORT;


app.use(cors())
app.use(bodyParser.json())

app.use("/",baseRouter);
app.use("/api",apiRouter);

app.listen(PORT,async () => {
  console.log(`🟢 Server running at port: ${PORT}`);
  connectDB();
});

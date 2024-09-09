const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dataDB = require("./db/db");

dotenv.config();
dataDB();

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log("5000-portda ishladi");
});

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dataDB = require("./db/db");
const categoryRouter = require("./routes/categoryRouter");
dotenv.config();
dataDB();

// ***************
app.use(express.json());

// *************?
app.use("/", categoryRouter);

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log("5000-portda ishladi");
});

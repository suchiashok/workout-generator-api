const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const exercisesRouter = require("./src/routes/exercises");
app.use("/exercises", exercisesRouter);

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  });
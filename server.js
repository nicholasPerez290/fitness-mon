const express = require("express");
// const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require('./controllers');
const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(routes)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// db.Workout.create({ name: "workout" })
//   .then(dbLibrary => {
//     console.log(dbLibrary);
//   })
//   .catch(({message}) => {
//     console.log(message);
//   });
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
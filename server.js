require("dotenv").config(); //configs and loads all environment variables from the .env file
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", (error) => console.log(error)); // runs on error
db.once("open", () => console.log("Connect to Database")); //runs only once when the db connects

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server running @ : ${port}`);
});

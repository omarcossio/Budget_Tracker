const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes
//use the next line when using local system server
app.use(require("./routes/api.js"));
//app.use('/api', require("./routes/api.js"));
//use this next time when using heroku
//app.use(require("routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
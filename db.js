const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://jash:mongoose123@cluster0.snphf.mongodb.net/pizzeria";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("DB CONNECTED SUCCESSFULLY");
});

db.on("error", () => {
  console.log("DB CONNECTION FAILED");
});

module.exports = mongoose;

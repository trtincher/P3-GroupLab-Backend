const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/forte-db",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log("connection established to mongod")
);
mongoose.Promise = Promise;

module.exports = mongoose;


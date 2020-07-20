const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));

const forteRouter = require("./controllers/info");
app.use("/api/", forteRouter);

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () =>
  console.log(`Server running on ${app.get("port")}`)
);

const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");

app.use(cors());

var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
};
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));

const studentRouter = require("./controllers/student");
const teacherRouter = require("./controllers/teacher");
const seedRouter = require("./controllers/seed");

app.use("/api/students", studentRouter);
app.use("/api/teachers", teacherRouter);

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () =>
  console.log(`Server running on ${app.get("port")}`)
);

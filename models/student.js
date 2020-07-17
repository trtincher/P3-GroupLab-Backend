const mongoose = require("../db/connection");

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String },
  idiom: { type: String, required: true },
  language: { type: String },
  other: { type: String },
  myTeachers: { type: Boolean, default: false },
  online: { type: Boolean, default: false },
  student: { type: Boolean, default: false },
  teacher: { type: Boolean, default: false },
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;

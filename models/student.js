const mongoose = require("../db/connection");
const Teacher = require("./teacher");

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String },
  idiom: { type: String, required: true },
  language: { type: String },
  other: { type: String },
  myTeachers: [
    {
      ref: "Teacher",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  online: { type: Boolean, default: false },
  student: { type: Boolean, default: false },
  teacher: { type: Boolean, default: false },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

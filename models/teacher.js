const mongoose = require("../db/connection");

const teacherSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String },
  idiom1: { type: String, required: true },
  idiom2: { type: String },
  idiom3: { type: String },
  rate: { type: Number },
  language: { type: String },
  teachingStyle: { type: String },
  online: { type: Boolean, default: false },
  studentRoster: [
    {
      ref: "student",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  student: { type: Boolean, default: false },
  teacher: { type: Boolean, default: false },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;

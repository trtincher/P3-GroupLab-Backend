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
      ref: "teacher",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  online: { type: Boolean, default: false },
  student: { type: Boolean, default: false },
  teacher: { type: Boolean, default: false },
});

// After the delete, cascade delete all references
studentSchema.post("remove", (document) => {
  res.send(document);
  const studentId = document._id;
  // console.log("studentId", studentId)
  Teacher.find({ studentRoster: { $in: studentId } }).then((teachers) => {
    // res.send(teachers);
    Promise.all(
      teachers.map((teacher) =>
        Teacher.findOneAndUpdate(
          teacher._id,
          { $pull: { studentRoster: studentId } },
          { new: true }
        )
      )
    );
  });
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

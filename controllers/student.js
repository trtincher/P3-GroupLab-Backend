const express = require("express");
const router = express.Router();

// Require the student and teacher models.
const Student = require("../models/student");
const Teacher = require("../models/teacher");

// List all students
router.get("/", (req, res) => {
  Student.find({}, (err, students) => {
    if (err) console.log(err);
    else res.send(students);
  });
});

// Get student by last name
router.get("/:lastname", (req, res) => {
  Student.find({ lastName: req.params.lastname }, (err, student) => {
    if (err) console.log(err);
    else res.send(student);
  });
});

// Get student by email
router.get("/email/:email", (req, res) => {
  Student.find({ email: req.params.email }, (err, student) => {
    if (err) console.log(err);
    else res.send(student);
  });
});

// Create a student
router.post("/", (req, res) => {
  Student.create(req.body, (err, student) => {
    if (err) console.log(err);
    else res.send(student);
  });
});

// Update a student by id
router.put("/:id", (req, res) => {
  Student.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, updated) => {
      if (err) console.log(err);
      else res.send(updated);
    }
  );
});

// Delete a student by id
router.delete("/:id", (req, res) => {
  Student.deleteOne({ _id: req.params.id }, (err, deleted) => {
    if (err) console.log(err);
    else res.send(deleted);
  });
});

// Add teacher to student's myTeachers (addConnectionButton)
router.put("/:studentid/addTeacher/:teacherid", (req, res) => {
  Teacher.findById(req.params.teacherid, (err, teacher) => {
    if (err) console.log(err);
    else {
      Student.findByIdAndUpdate(
        req.params.studentid,
        {
          $push: {
            myTeachers: teacher,
          },
        },
        { new: true },
        (err, student) => {
          if (err) console.log(err);
          else res.send(student);
        }
      );
    }
  });
});

// Remove single teacher from student's myTeachers (works!)
router.delete("/:studentid/removeTeacher/:teacherid", (req, res) => {
  Teacher.findById(req.params.teacherid, (err, teacher) => {
    if (err) console.log(err);
    else {
      Student.findByIdAndUpdate(
        req.params.studentid,
        {
          $pull: {
            myTeachers: teacher._id,
          },
        },
        { new: true },
        (err, student) => {
          if (err) console.log(err);
          else res.send(student);
        }
      );
    }
  });
});

module.exports = router;

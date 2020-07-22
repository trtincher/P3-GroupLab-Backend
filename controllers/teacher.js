const express = require("express");
const router = express.Router();

// Require the student and teacher models.
const Student = require("../models/student");
const Teacher = require("../models/teacher");

// List all teachers
router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.find({}).populate("studentRoster");
    res.send(teachers);
  } catch {
    res.send("nope");
  }
});

// Get teacher by last name
router.get("/:lastname", async (req, res) => {
  try {
    const teacher = await Teacher.find({
      lastName: req.params.lastname,
    }).populate("studentRoster");
    res.send(teacher);
  } catch {
    res.send("nope");
  }
});

// Get teacher by email
router.get("/email/:email", async (req, res) => {
  try {
    const teacher = await Teacher.find({
      email: req.params.email,
    }).populate("studentRoster");
    res.send(teacher);
  } catch {
    res.send("nope");
  }
});

// Create a teacher
router.post("/", (req, res) => {
  Teacher.create(req.body, (err, teacher) => {
    if (err) console.log(err);
    else res.send(teacher);
  });
});

// Update a teacher by id
router.put("/:id", (req, res) => {
  Teacher.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, updated) => {
      if (err) console.log(err);
      else res.send(updated);
    }
  );
});

// Delete a teacher by id
router.delete("/:id", (req, res) => {
  Teacher.deleteOne({ _id: req.params.id }, (err, deleted) => {
    if (err) console.log(err);
    else res.send(deleted);
  });
});

// Add student to teacher's studentRoster (addConnectionButton)
router.put("/:teacherid/addStudent/:studentid", (req, res) => {
  Student.findById(req.params.studentid, (err, student) => {
    if (err) console.log(err);
    else {
      Teacher.findByIdAndUpdate(
        req.params.teacherid,
        {
          $push: {
            studentRoster: student,
          },
        },
        { new: true },
        (err, teacher) => {
          if (err) console.log(err);
          else res.send(teacher);
        }
      );
    }
  });
});

// Remove single student from teacher's studentRoster
router.delete("/:teacherid/removeStudent/:studentid", (req, res) => {
  Student.findById(req.params.studentid, (err, student) => {
    if (err) console.log(err);
    else {
      Teacher.findByIdAndUpdate(
        req.params.teacherid,
        {
          $pull: {
            studentRoster: student._id,
          },
        },
        { new: true },
        (err, teacher) => {
          if (err) console.log(err);
          else res.send(teacher);
        }
      );
    }
  });
});

module.exports = router;

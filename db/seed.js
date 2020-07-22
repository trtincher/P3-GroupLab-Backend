const mongoose = require("./connection.js");
const db = mongoose.connection;
const Student = require("../models/student");
const Teacher = require("../models/teacher");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  await Student.deleteMany({});
  await Teacher.deleteMany({});

  await Student.insertMany([
    {
      firstName: "Tamika",
      lastName: "Robinson",
      email: "tamikar1242@gmail.com",
      location: "Omaha, NE",
      idiom: "Violin",
      language: "English",
      other: "Allergic to peanuts",
      myTeachers: [],
      online: true,
      student: true,
      teacher: false,
    },
    {
      firstName: "Aleksandra",
      lastName: "Dubrov",
      email: "adubrov1248@gmail.com",
      location: "Peoria, IL",
      idiom: "Flute",
      language: "Russian",
      other: "Likes soup",
      myTeachers: [],
      online: true,
      student: true,
      teacher: false,
    },
    {
      firstName: "Chester",
      lastName: "Arthur",
      email: "chaz123@gmail.com",
      location: "Bangor, ME",
      idiom: "Banjo",
      language: "English",
      other: "Prone to mysterious rashes",
      myTeachers: [],
      online: true,
      student: true,
      teacher: false,
    },
  ]);

  await Teacher.insertMany([
    {
      firstName: "Beth",
      lastName: "Bendonach",
      email: "b.adebayo@yahoo.com",
      location: "New York, NY",
      idiom1: "Guitar",
      idiom2: "Banjo",
      idiom3: "Ukelele",
      rate: 50,
      language: "English",
      teachingStyle: "Suzuki",
      online: true,
      studentRoster: [],
      student: false,
      teacher: true,
    },
    {
      firstName: "Bill",
      lastName: "Ferguson",
      email: "b.furgiefurg@yahoo.com",
      location: "Chicago, IL",
      idiom1: "Clarinet",
      idiom2: "Saxophone",
      idiom3: "",
      rate: 48,
      language: "English",
      teachingStyle: "Authoritarian",
      online: true,
      studentRoster: [],
      student: false,
      teacher: true,
    },
    {
      firstName: "Ebi",
      lastName: "Adebayo",
      email: "e.adebayo@yahoo.com",
      location: "New York, NY",
      idiom1: "Guitar",
      idiom2: "Banjo",
      idiom3: "Ukelele",
      rate: 50,
      language: "English",
      teachingStyle: "Suzuki",
      online: true,
      studentRoster: [],
      student: false,
      teacher: true,
    },
    {
      firstName: "Sarah",
      lastName: "Silverfish",
      email: "s.silverfishy@yahoo.com",
      location: "Chicago, IL",
      idiom1: "Violin",
      idiom2: "Saxophone",
      idiom3: "",
      rate: 48,
      language: "English",
      teachingStyle: "Authoritarian",
      online: true,
      studentRoster: [],
      student: false,
      teacher: true,
    },
  ]);

  // Add Sarah to Tamika's teachers
  await Teacher.findOne({ lastName: "Silverfish" }, (err, teacher) => {
    if (err) console.log(err);
    else {
      // let teacherId = teacher._id;
      // console.log("Sarah's id = ", teacherId);
      Student.findOneAndUpdate(
        { lastName: "Robinson" },
        {
          $push: {
            myTeachers: teacher,
          },
        },
        { new: true },
        (err, student) => {
          if (err) console.log(err);
          else {
            console.log(
              `Added ${teacher.firstName} to ${student.firstName}'s myTeachers array.`
            );
          }
        }
      );
    }
  });

  // Add Tamika to Sarah's studentRoster
  await Student.findOne({ lastName: "Robinson" }, (err, student) => {
    if (err) console.log(err);
    else {
      // let teacherId = teacher._id;
      // console.log("Sarah's id = ", teacherId);
      Teacher.findOneAndUpdate(
        { lastName: "Silverfish" },
        {
          $push: {
            studentRoster: student,
          },
        },
        { new: true },
        (err, teacher) => {
          if (err) console.log(err);
          else {
            console.log(
              `Added ${student.firstName} to ${teacher.firstName}'s studentRoster array.`
            );
          }
        }
      );
    }
  });

  // Add Ebi to Tamika's teachers
  await Teacher.findOne({ lastName: "Adebayo" }, (err, teacher) => {
    if (err) console.log(err);
    else {
      // let teacherId = teacher._id;
      // console.log("Sarah's id = ", teacherId);
      Student.findOneAndUpdate(
        { lastName: "Robinson" },
        {
          $push: {
            myTeachers: teacher,
          },
        },
        { new: true },
        (err, student) => {
          if (err) console.log(err);
          else {
            console.log(
              `Added ${teacher.firstName} to ${student.firstName}'s myTeachers array.`
            );
          }
        }
      );
    }
  });

  // Add Tamika to Ebi's studentRoster
  await Student.findOne({ lastName: "Robinson" }, (err, student) => {
    if (err) console.log(err);
    else {
      // let teacherId = teacher._id;
      // console.log("Sarah's id = ", teacherId);
      Teacher.findOneAndUpdate(
        { lastName: "Adebayo" },
        {
          $push: {
            studentRoster: student,
          },
        },
        { new: true },
        (err, teacher) => {
          if (err) console.log(err);
          else {
            console.log(
              `Added ${student.firstName} to ${teacher.firstName}'s studentRoster array.`
            );
          }
        }
      );
    }
  });

  // Add Sarah to Aleksandra's teachers
  await Teacher.findOne({ lastName: "Silverfish" }, (err, teacher) => {
    if (err) console.log(err);
    else {
      // let teacherId = teacher._id;
      // console.log("Sarah's id = ", teacherId);
      Student.findOneAndUpdate(
        { lastName: "Dubrov" },
        {
          $push: {
            myTeachers: teacher,
          },
        },
        { new: true },
        (err, student) => {
          if (err) console.log(err);
          else {
            console.log(
              `Added ${teacher.firstName} to ${student.firstName}'s myTeachers array.`
            );
          }
        }
      );
    }
  });

  // Add Aleks to Sarah's studentRoster
  await Student.findOne({ lastName: "Dubrov" }, (err, student) => {
    if (err) console.log(err);
    else {
      // let teacherId = teacher._id;
      // console.log("Sarah's id = ", teacherId);
      Teacher.findOneAndUpdate(
        { lastName: "Silverfish" },
        {
          $push: {
            studentRoster: student,
          },
        },
        { new: true },
        (err, teacher) => {
          if (err) console.log(err);
          else {
            console.log(
              `Added ${student.firstName} to ${teacher.firstName}'s studentRoster array.`
            );
          }
        }
      );
    }
  });

  // Add Bill to Aleksandra's teachers
  await Teacher.findOne({ lastName: "Ferguson" }, (err, teacher) => {
    if (err) console.log(err);
    else {
      // let teacherId = teacher._id;
      // console.log("Sarah's id = ", teacherId);
      Student.findOneAndUpdate(
        { lastName: "Dubrov" },
        {
          $push: {
            myTeachers: teacher,
          },
        },
        { new: true },
        (err, student) => {
          if (err) console.log(err);
          else {
            console.log(
              `Added ${teacher.firstName} to ${student.firstName}'s myTeachers array.`
            );
          }
        }
      );
    }
  });

  // Add Aleks to Bill's studentRoster
  await Student.findOne({ lastName: "Dubrov" }, (err, student) => {
    if (err) console.log(err);
    else {
      // let teacherId = teacher._id;
      // console.log("Sarah's id = ", teacherId);
      Teacher.findOneAndUpdate(
        { lastName: "Ferguson" },
        {
          $push: {
            studentRoster: student,
          },
        },
        { new: true },
        (err, teacher) => {
          if (err) console.log(err);
          else {
            console.log(
              `Added ${student.firstName} to ${teacher.firstName}'s studentRoster array.`
            );
          }
        }
      );
    }
  });

  // Add Beth to Chester's teachers
  await Teacher.findOne({ lastName: "Bendonach" }, (err, teacher) => {
    if (err) console.log(err);
    else {
      // let teacherId = teacher._id;
      // console.log("Sarah's id = ", teacherId);
      Student.findOneAndUpdate(
        { lastName: "Arthur" },
        {
          $push: {
            myTeachers: teacher,
          },
        },
        { new: true },
        (err, student) => {
          if (err) console.log(err);
          else {
            console.log(
              `Added ${teacher.firstName} to ${student.firstName}'s myTeachers array.`
            );
          }
        }
      );
    }
  });

  // Add Chester to Beth's studentRoster
  await Student.findOne({ lastName: "Arthur" }, (err, student) => {
    if (err) console.log(err);
    else {
      // let teacherId = teacher._id;
      // console.log("Sarah's id = ", teacherId);
      Teacher.findOneAndUpdate(
        { lastName: "Bendonach" },
        {
          $push: {
            studentRoster: student,
          },
        },
        { new: true },
        (err, teacher) => {
          if (err) console.log(err);
          else {
            console.log(
              `Added ${student.firstName} to ${teacher.firstName}'s studentRoster array.`
            );
          }
        }
      );
    }
  });

  // Add Beth to Chester's teachers
};

console.log("Created Teachers and Students!");

const run = async () => {
  await main();
  db.close();
};

run();

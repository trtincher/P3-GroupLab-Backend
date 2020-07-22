const Student = require("../models/student");
const Teacher = require("../models/teacher");
const router = require("./student");

router.get("/", async (req, res) => {
  try {
    console.log("trying...");
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
    // Tamika => Sarah
    Teacher.findOneAndUpdate({ lastName: "Silverfish" }, (err, teacher) => {
      if (err) console.log(err);
      else {
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
            else res.send(student);
          }
        );
      }
    });
    console.log("Created Teachers and Students!");
  } catch {
    res.send("There was an error with seeding, bub.");
  }
});

module.exports = router;
// const run = async () => {
//   await main();
//   db.close();
// };

// run();

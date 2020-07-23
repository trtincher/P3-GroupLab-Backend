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
    {
      firstName: "Jhohan",
      lastName: "Hernandez",
      email: "jho@gmail.com",
      location: "New York, NY",
      idiom: "Violin",
      language: "Spanish",
      other: "Likes potatoes",
      myTeachers: [],
      online: true,
      student: true,
      teacher: false,
    },
    {
      firstName: "Hector",
      lastName: "Gonzalez",
      email: "hasenr@gmail.com",
      location: "San Antonio, TX",
      idiom: "Viola",
      language: "Spanish",
      other: "Sneaky",
      myTeachers: [],
      online: true,
      student: true,
      teacher: false,
    },
    {
      firstName: "Tony",
      lastName: "Tellei",
      email: "tt3422@gmail.com",
      location: "San Francisco, CA",
      idiom: "Cello",
      language: "English",
      other: "Good Swimmer",
      myTeachers: [],
      online: true,
      student: true,
      teacher: false,
    },
    {
      firstName: "Mani",
      lastName: "Kumar",
      email: "mkaeintsdh3@gmail.com",
      location: "Phoenix, AZ",
      idiom: "Viola",
      language: "English",
      other: "Hella good skateboarder",
      myTeachers: [],
      online: true,
      student: true,
      teacher: false,
    },
    {
      firstName: "Andrew",
      lastName: "Wang",
      email: "wanggang23413@gmail.com",
      location: "San Diego, CA",
      idiom: "Trumpet",
      language: "Chinese",
      other: "Allergic to peanuts",
      myTeachers: [],
      online: true,
      student: true,
      teacher: false,
    },
    {
      firstName: "Sheri",
      lastName: "Zhang",
      email: "zhang3952@gmail.com",
      location: "San Diego, CA",
      idiom: "Guitar",
      language: "English",
      other: "Tea Connoiseur",
      myTeachers: [],
      online: true,
      student: true,
      teacher: false,
    },
    {
      firstName: "Mohammed",
      lastName: "Saidi",
      email: "ms235933@gmail.com",
      location: "Columbus, OH",
      idiom: "Guitar",
      language: "English",
      other: "Very ticklish",
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
      idiom2: "Violin",
      idiom3: "Viola",
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
      idiom3: "Trombone",
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
      idiom2: "Trumpet",
      idiom3: "Cello",
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
      idiom2: "Viola",
      idiom3: "Cello",
      rate: 48,
      language: "English",
      teachingStyle: "Authoritarian",
      online: true,
      studentRoster: [],
      student: false,
      teacher: true,
    },
    {
      firstName: "Abi",
      lastName: "Trabelsi",
      email: "a.trouble34@yahoo.com",
      location: "Chicago, IL",
      idiom1: "Trumpet",
      idiom2: "Trombone",
      idiom3: "Cello",
      rate: 52,
      language: "Spanish",
      teachingStyle: "Orff",
      online: true,
      studentRoster: [],
      student: false,
      teacher: true,
    },
    {
      firstName: "Andrew",
      lastName: "Nkosi",
      email: "an2359@yahoo.com",
      location: "Houston, TX",
      idiom1: "Guitar",
      idiom2: "Drums",
      idiom3: "Violin",
      rate: 48,
      language: "English",
      teachingStyle: "Orff",
      online: true,
      studentRoster: [],
      student: false,
      teacher: true,
    },
    {
      firstName: "Dragan",
      lastName: "Filipovic",
      email: "ddraganman384@yahoo.com",
      location: "Chicago, IL",
      idiom1: "Trumpet",
      idiom2: "",
      idiom3: "",
      rate: 54,
      language: "English",
      teachingStyle: "Loosey Goosey",
      online: true,
      studentRoster: [],
      student: false,
      teacher: true,
    },
    {
      firstName: "Michael",
      lastName: "De Jong",
      email: "mdj23857@yahoo.com",
      location: "New Canaan, CT",
      idiom1: "Guitar",
      idiom2: "Trumpet",
      idiom3: "Trombone",
      rate: 44,
      language: "English",
      teachingStyle: "Kodaly",
      online: true,
      studentRoster: [],
      student: false,
      teacher: true,
    },
  ]);

// Add De Jong to Saidi's teachers
await Teacher.findOne({ lastName: "De Jong" }, (err, teacher) => {
  if (err) console.log(err);
  else {
    // let teacherId = teacher._id;
    // console.log("Sarah's id = ", teacherId);
    Student.findOneAndUpdate(
      { lastName: "Saidi" },
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

// Add Saidi to De Jong's studentRoster
await Student.findOne({ lastName: "Saidi" }, (err, student) => {
  if (err) console.log(err);
  else {
    // let teacherId = teacher._id;
    // console.log("Sarah's id = ", teacherId);
    Teacher.findOneAndUpdate(
      { lastName: "De Jong" },
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

// Add Bendonach to Hernandez's teachers
await Teacher.findOne({ lastName: "Bendonach" }, (err, teacher) => {
  if (err) console.log(err);
  else {
    // let teacherId = teacher._id;
    // console.log("Sarah's id = ", teacherId);
    Student.findOneAndUpdate(
      { lastName: "Hernandez" },
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

// Add Hernandez to Bendonach's studentRoster
await Student.findOne({ lastName: "Hernandez" }, (err, student) => {
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

// Add Filipovic to Wang's teachers
await Teacher.findOne({ lastName: "Filipovic" }, (err, teacher) => {
  if (err) console.log(err);
  else {
    // let teacherId = teacher._id;
    // console.log("Sarah's id = ", teacherId);
    Student.findOneAndUpdate(
      { lastName: "Wang" },
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

// Add Wang to Filipovic's studentRoster
await Student.findOne({ lastName: "Wang" }, (err, student) => {
  if (err) console.log(err);
  else {
    // let teacherId = teacher._id;
    // console.log("Sarah's id = ", teacherId);
    Teacher.findOneAndUpdate(
      { lastName: "Filipovic" },
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

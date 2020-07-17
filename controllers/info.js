const express = require('express');
const router = express.Router();

// Require the student and teacher models.
const Student = require('../models/student');
const Teacher = require('../models/teacher');

// List all students
router.get('/students/', (req, res) => {
	Student.find({}, (err, students) => {
		if (err) console.log(err);
		else res.send(students);
	});
});

// List all teachers
router.get('/teachers/', (req, res) => {
	Teacher.find({}, (err, teachers) => {
		if (err) console.log(err);
		else res.send(teachers);
	});
});

// // Write the route to get song by artist//show
// router.get('/artist/:artist', (req, res) => {
// 	Song.find({ artist: req.params.artist }, (err, song) => {
// 		if (err) console.log(err);
// 		else res.send(song);
// 	});
// });

// // Write the route to get song by name//show
// router.get('/name/:name', (req, res) => {
// 	Song.find({ name: req.params.name }, (err, song) => {
// 		if (err) console.log(err);
// 		else res.send(song);
// 	});
// });

// // Write the route to create a song//create
// router.post('/', (req, res) => {
// 	Song.create(req.body, (err, song) => {
// 		if (err) console.log(err);
// 		else res.send(song);
// 	});
// });

// // Write the route to update a song//update
// router.put('/:id', (req, res) => {
// 	Song.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, updated) => {
// 		if (err) console.log(err);
// 		else res.send(updated);
// 	});
// });

// // Write the route to delete the song by id//delete
// router.delete('/:id', (req, res) => {
// 	Song.deleteOne({ _id: req.params.id }, (err, deleted) => {
// 		if (err) console.log(err);
// 		else res.send(deleted);
// 	});
// });

module.exports = router;

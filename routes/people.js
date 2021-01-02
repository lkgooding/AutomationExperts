//CRUD OPERATIONS

const router = require("express").Router();
let Person = require("../models/personModel"); //require what you need
const mongoose = require("mongoose");


// READ
router.route("/").get((req, res) => {
Person.find()
.then(people => res.json(people))
.catch(err => res.status(400).json("Error: " + err));
});

// CREATE
router.route("/add").post((req, res) => {
const newFName = req.body.firstName;
const newSName = req.body.surName;
const newEmail = req.body.email;
const newQuery = req.body.query


const newPerson = new Person({
    firstName: newFName,
    surName: newSName,
    email: newEmail,
    query: newQuery
});


newPerson.save()
.then(() => res.json("Person added."))
.catch((err) => res.status(400).json("Error: " + err));
});


// UPDATE

router.route("/update/:id").patch((req, res) => {
Person.findById(req.params.id)
.then((person) => {
person.firstName = req.body.firstName;
person.surName = req.body.surName;
person.email = req.body.email;
person.query = req.body.query

person.save()
.then(() => res.json("Person Edited"))
.catch((err) => res.status(400).json("Error: " + err));
})
.catch((err) => res.status(400).json("Error: " + err));
});

//DELETE

router.route("/:id").delete((req, res) => {
Person.findByIdAndDelete(req.params.id)
.then(() => res.json("Person deleted."))
.catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;

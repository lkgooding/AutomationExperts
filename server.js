const express = require("express");
const cors = require("cors");
const path = require("path");

require('dotenv').config(); //environment variables

//Creates express server
const app = express(); 
const port = process.env.PORT || 5000;

//Middleware:
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }))//parses json

//Set up mongoose connection

const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true } 
).then(() => console.log('Connected to MongoDB...'))
.catch((err) => console.error("Couldn't connect MongoDB....", err));

//test schema- Comment this out again when starting with a new DB to test. 

/*
const testSchema= new mongoose.Schema({ testData1: String, testData2: String, email: String});

const Test= mongoose.model('Test', testSchema);

async function createNewTest() {const test= new Test({testData1: 'new test', testData2: 'db here', email: 'testsuccess@new.com',});const result = await test.save();console.log(result);
}
createNewTest();  */

//Routes

//For Deployment

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
  app.use('*', express.static('client/build'));    }

//Routes

const peopleRouter = require("./routes/people");

app.post("/", function(req, res) {

const personName = req.body.newPerson; //This taps into what the user types into the form field. 

const person = new personModel({
  	firstName: personFirstname,
    surName: personSurname,
    email: personEmail,
    query: personQuery
});

person.save();

res.redirect("/");

});

app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname+ "/client/build/index.html"));
}); 


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



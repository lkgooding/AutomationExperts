const mongoose = require("mongoose");

//Schema
const Schema = mongoose.Schema;

const personSchema = new Schema (
    {
    
    firstName: String,
    surName: String,
    email: String,
    query: String,
    
    }
); 

//Model
const Person = mongoose.model("Person", personSchema);

//Export 
module.exports = mongoose.model("Person", personSchema);
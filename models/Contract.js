const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types


// SCHEMA > MODEL > QUERY 

// Schema design

const contactSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "please provide valid name"],
        trim: true,
        // unique: [true, "Name Must be unique"],
        lowercase: true,
        minLength: [3, "Name must be at least 3 chearacters."],
        maxLength: [20, " Name is too large"],
    },
    description: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        validator: [validator.isEmail, "Please provide a valid email"]
    },
    website: {
        type: String,
        // validator: [validator.isURL, " Please Provie av valid URL"]
    },
    location: String,
    contact: Number,


}, { timestamps: true })

const Contact = mongoose.model("Address", contactSchema)


module.exports = Contact
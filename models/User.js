const mongoose = require('mongoose');
const validator = require('validator');

const bcrypt = require("bcryptjs")
// SCHEMA > MODEL > QUERY 

// Schema design

const userSchema = mongoose.Schema({

    email: {
        type: String,
        required: [true, "please provide valid email"],
        trim: true,
        unique: [true, "Name Must be unique"],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        // validate: {
        //     validator: (value) =>
        //         validator.isStrongPassword(value, {
        //             minLength: 6,
        //         }),
        //     message: "Password must be 6 cheracter",
        // },
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }




}, { timestamps: true })

userSchema.pre("save", function (next) {

    const password = this.password;
    const hashPassword = bcrypt.hashSync(password);
    this.password = hashPassword;

    next()

})


const User = mongoose.model("User", userSchema)


module.exports = User
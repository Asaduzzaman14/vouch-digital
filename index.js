const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const collors = require('colors');
const express = require('express');

const app = express();
const cors = require('cors');

// middleware
app.use(express.json());
app.use(cors())


//database connecton
mongoose.connect(process.env.DATABASE).then(() => {
    console.log("Database is connection is Succesfull".green.bold)
})

const contactRoutes = require("./routes/contactRoutes")
const userRoutes = require("./routes/user.route")


app.get("/", (req, res) => {
    res.send("Rouret is warking!")
})

app.use("/contact", contactRoutes)
app.use("/user", userRoutes)

//server
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`app is runing on port ${port}`.yellow.bold);
})
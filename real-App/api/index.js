const express = require("express");
const bosyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require('passport');
const localStrategy =  require("passport-local").Strategy

const app= express();
const port= 8000;
const cors= require("cors");
const bodyParser = require("body-parser");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require("jsonwebtoken")

mongoose.connect(
    "mongodb+srv://ntampulamthunzi:<97Ntampula1&>@cluster0.ebp5zo9.mongodb.net/",
    {
        useNewUrlParset:true,
        userUnifiedTopology:true
        }
).then(() =>{
    console.log("connected to Mongo Db");

}).catch((err) => {
    console.log("Error connecting to MongoDB",err)

});
app.listen(port, () => {
    console.log("server running on port 8000");
});




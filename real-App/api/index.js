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



const User = require("./models/user");
const Message =  require(".models/message");

// endpoint for registrtion of the user
app.post("/register",(req,res) => {
    const {name,email,password,image} = req,body;

    //create a new user object

const newUser = new  ({name,email,password,image})

// save the user to the database
newUUser.save().then(()=> {
    res.status(200).json({message:"user registered successfully"});
})
.catch((err) =>{
    onslotchange.log("Error registering the user!")
})


})


const express = require("express");
const colors = require('colors');
const dotenv = require('dotenv');
const db=require('./config/mongoose');

const User = require("./models/userModel");


const app = express();
// env configuration
dotenv.config();

// middlewares





app.post('/signup',async (req,res)=>{

    const user = new User({
        firstName:"Sandeep",
        lastName:"kumar",
        emailId:"Sandeep@gmail.com",
        password:"Sandeep@1234",
        
    })
    await user.save()

    res.send("user signup successfully");
})

const PORT = process.env.PORT ||8080

db().then(()=>{
    console.log(`database connected successfully`);
    app.listen(PORT,()=>{
        console.log(colors.green(`server is running or port no ${PORT}`));
    })

}).catch(()=>console.error('database not connected!!'))

const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    firstName :{
        type:String,
        required:true,
        trim:true

    },
    lastName:{
       type:String,
       required:true,
       trim:true,
    },
    emailId:{
        type:String,
        required:true,
        // unique:true
    },
    password:{
        type:String,
        required:true,
    },
    address:{
        type:String,

    }
    ,
   
    
    roll:{
        type:Number,
        default:0
    }
},
{
    timestamps:true
})

const User = mongoose.model('user',userSchema);

module.exports = User
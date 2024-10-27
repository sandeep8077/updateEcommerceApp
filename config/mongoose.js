const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const  db = async ()=>{
    await mongoose.connect(process.env.DATABASE_URL)
   }

   module.exports = db;




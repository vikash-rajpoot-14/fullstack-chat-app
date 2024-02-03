const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
   mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("DB Connected".green.bold);
   }).catch((err)=>{
    console.log(err);
   })

};

module.exports = connectDB;

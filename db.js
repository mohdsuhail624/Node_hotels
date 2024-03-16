const mongoose=require("mongoose");
require("dotenv").config();
//Define the mongodb connection URL
//  const mongodb_URL=process.env.MONGODB_URL_LOCAL"mongodb://127.0.0.1:27017/hotels";
const mongodb_URL=process.env.MONGODB_URL;
//setup MongoDb connection
mongoose.connect(mongodb_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection;
db.on('connected',()=>{
    console.log(" Connected to Mongodb server");
});

db.on('disconnected',()=>{
    console.log("Database Disconnected");
});

db.on('error',()=>{
    console.log("Database error");
});

module.exports=db;


const mongoose=require("mongoose");

//Define the mongodb connection URL
const mongodb_URL="mongodb://127.0.0.1:27017/hotels";
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


// console.log("server file is running");

// function add(a,b){
//     return a+b;
// }

// var add=function(a,b){
//     return a+b;
// }

// var add=(a,b)=>{return a+b};
// var add=(a,b)=>a+b;
// var result=add(44,7);
// console.log(result);

// (function(){
//     console.log("prince");
// })();

// function callback(){
//     console.log("prince calling a callback");
// }
// const add=function(a,b,callback){
//     var result=a+b;
//     console.log("result"+result);
//     callback();
// }
// add(3,4,callback);

// const add=function(a,b,prince){
//         var result=a+b;
//         console.log("result"+result);
//         prince();
//     }
//     add(3,4,()=>{
//         console.log("successfully");
//     });

// var fs=require("fs");
// var os=require("os");

// var user=os.userInfo();
// console.log(user.username);

// fs.appendFile("greeting.txt","Hi"+user.username+"\n",()=>{console.log("file is created");});

// console.log(os);


// const notes=require("./notes");
// var _=require('lodash');

// var age=notes.age;
// var result=notes.addNumber(age+18,10);
// console.log(age);
// console.log(result);
// console.log("server file is available");

// var data=["person","person",1,2,1,2,"name","age","2"];
// var filter=_.uniq(data);
// console.log(filter);

// console.log(_.isString('Suhail'));


// const json='{"name":"john","age":30}';
// const jsonObject=JSON.parse(json);
// console.log(jsonObject);

const express=require("express");
const app=express();
const db = require('./db');
require('dotenv').config();
const PORT=process.env.PORT || 3000;

const bodyParser=require("body-parser");
app.use(bodyParser.json());//req.body;

// const MenuItem=require("./models/menuItem");
app.get('/',function (req,res){
    res.send("welcome to my hotel How i can help you? We have a list of menu");
})

//import the router file
const personRoutes=require("./routes/personRoutes");
const menuListRoutes=require("./routes/menuListRoutes");
//use the routers;
app.use("/person",personRoutes);
app.use("/menuItem",menuListRoutes);

app.listen(PORT,()=>{
    console.log("listening on port 3000");
});


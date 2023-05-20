// // // npm init
// // // npm i express https body-parser requests
// // // nodemon app.js

// // const express = require('express');
// // const bodyParser = require("body-parser");
// // const https = require("https");
// // const requests = require("requests");


// // const app = express();
// // // Post nested pbjects from HTML 
// // // Parse http request
// // app.use(bodyParser.urlencoded({extended:true}))

// // app.listen(3000,function(){
// //     console.log("Server is running on port 3000");
// // });

// // app.get("/",function(req,res){
// //     res.sendFile(__dirname+"/index.html");
// //     // res.send("Hello Friends");
// // });

// // app.get("/about",function(req,res){
// //     res.sendFile(__dirname+"/about.html");
// //     // res.send("Hello Friends");
// // });


// // app.post("/",function(req,res){
// //     var num1 = req.body.number1; // html se dekho name kya hai 
// //     var num2 = req.body.number2;
// //     var cc = req.body;
// //     var result = Number(num1) + Number(num2); 
// //     // res.send("The result is : "+result);
// //     res.write("Num1 : "+num1+"\n");
// //     res.write("Num1 : "+num2+"\n");
// //     res.write("The result is : "+result+"\n");
// //     // res.write("Check : "+cc);
// //     res.send();
// // });

// // Weather app steps:
// /*  Create basic node.js snippet
// export all the dependencies



// */ 

// // const express = require("express");
// // const https = require("https");
// // const bodyParser = require("body-parser");

// // const app = express(); 
// // app.use(bodyParser.urlencoded({extended:true}));
// // app.listen(3000, function(){
// //     console.log("Server is running !");
// // });

// // app.get("/",function(req,res){

// //     res.sendFile(__dirname + "/index.html");
   
// // });

// // app.post("/",function(req,res){
// //     const querry = req.body.cityName;
// //     const apiId = "4576982fac63b3c9857b6d0ce715cbab";
// //     const unit = "metric";
// //     const url = "https://api.openweathermap.org/data/2.5/weather?q="+querry+"&appid="+apiId+"&units="+unit;

//     // // Get https request to API 
//     // https.get(url,function(response){
//     //     // Fetch data from API 
//     //     response.on("data",function(data){
// //             const wd = JSON.parse(data);
// //         });
// //     });
// // });



// // app.post("/",function(req,res){
    
// //     const querry = req.body.cityName;
// //     const apiId = "4576982fac63b3c9857b6d0ce715cbab";
// //     const unit = "metric";
// //     const url = "https://api.openweathermap.org/data/2.5/weather?q="+querry+"&appid="+apiId+"&units="+unit;
    
// //     // Makes a get request to this URL i.e our API 
// //     https.get(url,function(response){
// //         console.log(response.statusCode);

// //         // This data stores the response from API in the form JSON
// //         response.on("data",function(data){
// //             const weatherData = JSON.parse(data);
// //             // const temp = weather.main.temp;
// //             const temp = weatherData.main.temp;
// //             // console.log(temp); 
// //             const icon = weatherData.weather[0].icon;
// //             const desc = weatherData.weather[0].description;
// //             const imgurl = "http://openweathermap.org/img/wn"+icon+"@2x.png";
// //             res.write("<p>Weather at " +querry+" "+desc+ " </p>");
// //             res.write("<h1>Temp in "+querry+" is: " + temp+" degree</h1>");
// //             res.write("<img src=" + imgurl  + ">");
// //             res.send();

// //         });

// //     });
    
// // });

 
//     // res.send("Server is Running");

// const express = require("express");
// const https = require("https");
// const bodyParser = require("body-parser");
// const app = express(); 
// app.use(bodyParser.urlencoded({extended:true}));
// app.listen(3000, function(){
//     console.log("Server is running !");
// });

// app.get("/",function(req,res){

//     res.sendFile(__dirname + "/index.html");
   
// });

// app.post("/",function(req,res){
    
//     const querry = req.body.cityName;
//     const apiId = "4576982fac63b3c9857b6d0ce715cbab";
//     const unit = "metric";
//     const url = "https://api.openweathermap.org/data/2.5/weather?q="+querry+"&appid="+apiId+"&units="+unit;
    
//     // Makes a get request to this URL i.e our API 
//     https.get(url,function(response){
//         console.log(response.statusCode);
        
//         // if(response.statusCode == 200){
//         //     res.sendFile(__dirname+"/about.html");
//         // }
//         // This data stores the response from API in the form JSON
//         response.on("data",function(data){
//             const weatherData = JSON.parse(data);
//             // const temp = weather.main.temp;
//             const temp = weatherData.main.temp;
//             // console.log(temp); 
//             const icon = weatherData.weather[0].icon;
//             const desc = weatherData.weather[0].description;
//             const imgurl = "http://openweathermap.org/img/wn"+icon+"@2x.png";


//             res.write("<p>Weather at " +querry+" "+desc+ " </p>");
//             res.write("<h1>Temp in "+querry+" is: " + temp+" degree</h1>");
//             res.write("<img src=" + imgurl  + ">");
//             res.send();

//         });

//     });
    
// });



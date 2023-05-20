const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express(); 
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000, function(){
    console.log("Server is running !");
});

app.get("/",function(req,res){

    res.sendFile(__dirname + "/index.html");
   
});

app.post("/",function(req,res){
    
    const querry = req.body.cityName;
    const apiId = "4576982fac63b3c9857b6d0ce715cbab";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+querry+"&appid="+apiId+"&units="+unit;
    
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            // const temp = weather.main.temp;
            const temp = weatherData.main.temp;
            // console.log(temp); 
            const icon = weatherData.weather[0].icon;
            const desc = weatherData.weather[0].description;
            const imgurl = "http://openweathermap.org/img/wn"+icon+"@2x.png";
            res.write("<p>Weather at " +querry+" "+desc+ " </p>");
            res.write("<h1>Temp in "+querry+" is: " + temp+" degree</h1>");
            res.write("<img src=" + imgurl  + ">");
            res.send();

        });

    });
    
});

 
    // res.send("Server is Running");
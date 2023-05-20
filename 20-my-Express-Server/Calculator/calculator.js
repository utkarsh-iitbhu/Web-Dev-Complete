const express = require('express');
const bodyParser = require("body-parser");

const app = express();
// Post nested pbjects from HTML 
// Parse http request
app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000,function(){
    console.log("Server is running");
});

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});


// Sends a post request 
app.post("/",function(req,res){
    // Shows the req send by user 
    var num1 = req.body.n1; // html se dekho name kya hai 
    var num2 = req.body.n2;
    var result = Number(num1) + Number(num2); 
    res.send("The result is : "+result);
});
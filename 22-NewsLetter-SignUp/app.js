const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https")

const app = express(); 

// For static images css
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Dynamic PORT defined by Heroku
app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on Port 3000 !");
});

app.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }; 
    const jsonData = JSON.stringify(data);
    const url = "https://us8.api.mailchimp.com/3.0/lists/31a3fec866"

    const options = {
        method: "POST",
        auth: "sahu:0fba4127f415f1f2e2caeaeac18c6e38-us8"
    }

    // ISme request type is url, option and call back function 
    const request = https.request(url,options,function(response){

        if(response.statusCode === 200){
            res.sendFile(__dirname+"/success.html");
        }else{
            res.sendFile(__dirname+"/failure.html");
        }

        response.on("data",function(data){
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();
    
});

app.post("/failure",function(req,res){
    res.redirect("/");
});


// Api -> 0fba4127f415f1f2e2caeaeac18c6e38-us8
// ID -> 31a3fec866
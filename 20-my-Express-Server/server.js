// Import express
const express = require("express")
// Create a obj 
const app = express(); 

// GET function, request to ('/')-> home route
// req and res -> request and response 
app.get("/",function(request,response){
    response.send("Sahu");
});


app.get("/contact",function(req,res){
    res.send("Contact Me !");
});

app.get("/about",function(req,res){
    res.send("<h1>Myself Utkarsh from IIT BHU</h1>");
});



// Listens on specific port http
app.listen(3000, function () {
    console.log("listening on port 3000")
}); 
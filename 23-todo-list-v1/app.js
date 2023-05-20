const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname+"/date.js");

// console.log(date);

const app = express(); 
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.listen(3000,function(){
    console.log("Server running on Port 3000");
});

// We can append values in a const array but not change the entire array
const items = ["Buy Food","Cook Food","Eat Food"];
const workItems = [];
app.get("/",function(req,res){
    
    const today = new Date();
    day = date.getDate(); 
    // Right now newTask is not defined so create a empty var on top 
    res.render("list",{listTitle:day, newListItems:items});
    
});

app.post("/",function(req,res){
    // This gives item and button
    // console.log(req.body);
    
    const item = req.body.newItem;

    if(req.body.list == "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/"); 
    }
    
    
});

app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work List", newListItems:workItems});
});

app.post("/work",function(req,res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

    // console.log(req.body.task);
    // res.send("Thanks for posting " + req.body.task );
    // res.render("list",{newTask:newTask});

    // if(today.getDay()==6 || today.getDay()==0){
        // day = "Week end!";
        // res.send("Yaay its week end ");
        // res.render('list',{kindOfDay:day});
    // }else{
        // day = "Week Day!"
        // res.render('list',{kindOfDay:day});
        // res.send("Its week day");
        // res.sendFile(__dirname+"/index.html");
    // }

    app.get("/about",function(req,res){
        res.render("about");
    });
//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash")
const mongoose = require("mongoose")
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
// mongodb://127.0.0.1:27017/todoDB
// mongodb+srv://utkarshbhuiit:<password>@cluster0.api8j21.mongodb.net/
mongoose.connect("mongodb+srv://utkarshbhuiit:Dahisar2020@cluster0.api8j21.mongodb.net/todoDB")
// mongoose.connect("mongodb://127.0.0.1:27017/todoDB");
// const items = ['a','b','c'];
const itemsSchema = {
  name: String
};
const Item = mongoose.model("Item",itemsSchema);

const item1 = new Item({
  name : "Welcome to your to-do list"
});
const item2 = new Item({
  name : "Sahu"
});
const item3 = new Item({
  name : "Codes"
});

const defaultItems = [item1,item2,item3];

const listSchema = {
  name: String, 
  item: [itemsSchema]
};

const List = mongoose.model("List",listSchema);

app.get("/", function(req, res) {

  // Item.find({}).exec(function(foundItems){
  //    res.render("list", {listTitle: "Today", newListItems: foundItems});
  // });
  Item.find({}).exec()
  .then(function(foundItems) {
    if(foundItems.length === 0){
      Item.insertMany(defaultItems);
      res.redirect("/");
    }else{
    res.render("list", {listTitle: "Today", newListItems: foundItems});
  }
  })
  .catch(function(err) {
    console.log(err);
  });

});



app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const listName = req.body.list;
  const item = new Item({
    name: itemName
  });
  if(listName === "Today"){
    item.save();
    res.redirect("/");
  }else{
    List.findOne({name: listName})
    .then(function(foundList){
      if(foundList){
        foundList.item.push(item);
        foundList.save();
        res.redirect("/"+listName);
        }
    })
  }
});

app.post("/delete",function(req,res){
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName; 

  if(listName === "Today"){
   Item.findByIdAndRemove(checkedItemId)
    .then(() => {
      console.log("Item deleted successfully.");
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
    });
  }else{
    List.findOneAndUpdate({name:listName},{$pull:{items:{_id:checkedItemId}}})
    .then(function(foundList){
      if(foundList){
        res.redirect("/"+listName);
      }
    })
  }
});

app.get("/:customListName",function(req,res){
  const customListName = _.capitalize(req.params.customListName) ;
  List.findOne({name:customListName})
  .catch(function(err) {
    console.log(err);
  })
  .then(function(foundList){
    if(!foundList){
      // Create new List 
      const list = new List({
        name: customListName,
        items: defaultItems
      });
      list.save(); 
      res.redirect("/"+customListName);
      // console.log("Doesnt Exist");
    }else{
      res.render("list",{listTitle: foundList.name, newListItems: foundList.items});
    }
  });
  

});



app.get("/about", function(req, res){
  res.render("about");
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});

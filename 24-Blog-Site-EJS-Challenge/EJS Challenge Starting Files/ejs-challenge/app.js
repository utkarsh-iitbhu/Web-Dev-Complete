//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const homeStartingContent = "My name is Utkarsh and I'm currently a part 3 student studying at the Indian Institute of Technology (IIT) BHU. I have a strong interest in the field of computer science and I am skilled in a variety of programming languages and technologies. \n Specifically, I have experience working with Python, Machine Learning (ML), Deep Learning, Computer Vision (CV), and Natural Language Processing (NLP). Additionally, I am proficient in Front End development using HTML, CSS, and Javascript, as well as Backend development using Node.js, Express, SQL, and MongoDB. \nThank you for taking the time to read my bio, and I look forward to contributing my skills and knowledge to future projects.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/blogDB");


const blogSchema = {
  title: String,
  content: String
};

const Blog = mongoose.model("Blog",blogSchema);

const blog1 = new Blog({
  title : "Code",
  content: "abababababbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
});
const blog2 = new Blog({
  title : "Sahu",
  content: "abablksdgjlkjlkjkldfjsfklsjdfdsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsssssssssssssssb"
});

const posts = [blog1,blog2];


app.get("/",function(req,res){
  res.render("home",{
    startingContent:homeStartingContent,
    posts:posts});
});

app.post("/",function(req,res){

});

app.get("/about",function(req,res){
  res.render("about",{aboutContent:aboutContent});
});

app.get("/contact",function(req,res){
  res.render("contact",{contactContent:contactContent});
});

app.get("/compose",function(req,res){
  res.render("compose");
});

app.post("/compose",function(req,res){

  Blog.find({})
  .then(function(foundBlogs){
    
  })


  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };
  posts.push(post);
  const newBlog = new Blog({
    title: req.body.postTitle,
    content: req.body.postBody
  });
  newBlog.save();
  res.redirect("/");
});

app.get('/posts/:postName', (req, res) => {
  const requestedTitle = _.lowerCase(req.params.postName);
  posts.forEach(function(post){
    const storedTitle = _.lowerCase(post.title);
    if(storedTitle === requestedTitle){
      res.render("post",{
        title:post.title,
        content:post.content
      });    
    }
  });
  // console.log(req.params.postName);
});

app.post("/posts/:postName", function(req,res){
  let tit = postName; 
  let bod = posts[postName];
  res.render("/post",{tit:tit,bod:bod});

}); 









app.listen(3000, function() {
  console.log("Server started on port 3000");
});

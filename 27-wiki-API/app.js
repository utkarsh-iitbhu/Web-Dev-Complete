const express = require('express');
const bodyParser = require("body-parser");
// const https = require("https");
// const requests = require("requests");
const ejs = require("ejs");
const mongoose = require("mongoose")
const app = express();

app.set('view engine','ejs'); // Sets ejs templates 
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/wikiDB");

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article",articleSchema);

// Request targeting all articles 
app.route("/articles")
.get(function(req,res){
    Article.find()
    .then(function(foundArticles){
        console.log(foundArticles);
        res.send(foundArticles);
    })
    .catch(function(err){
        res.send(err);
    });
})

.post(function(req,res){
    console.log(req.body.title);
    console.log(req.body.content);

    // Create 
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });
    newArticle.save();

})

.delete(function(req,res){
    Article.deleteMany()
    .catch(function(err){
        if(!err){
            res.send("Successfully deleted all articles");
        }else{
            res.send(err);
        }
    });
        
}); 


// Request targeting specific article
app.route("/articles/:articleTitle")
.get(function(req,res){
    Article.findOne({title:req.params.articleTitle})
    .then(function(foundArticle){
        if(foundArticle){
            res.send(foundArticle);
        }else{
            res.send("No articles matching that title was found");
        }
    })
    .catch(function(err){
        res.send(err);
    });
})
// Put replaces the entire selected JSON doc
.put(function(req,res){
    Article.updateOne(
        {title:req.params.articleTitle},
        {title:req.body.title, content:req.body.content},
        {overwrite: true}
    )
    .catch(function(err){
        if(!err){
            console.log("Updated YESSS");
            res.send("Successfully updated article!!!");
        }
    }
    );
})
// Updates only the selected key value pair
.patch(function(req,res){
    Article.updateMany(
        {title:req.params.articleTitle},
        {$set: req.body}
    )
    .catch(function(err){
            if(!err){
                res.send("Successfully updated article");
            }else{
                res.send(err);
            }
        });
    
})
// Delete One article
.delete(function(err){
    Article.deleteOne(
        {title:req.params.articleTitle}
    )
    .catch(function(err){
        if(!err){
            res.send("Successfully deleted article");
        }else{
            res.send(err);
        }
    });
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});

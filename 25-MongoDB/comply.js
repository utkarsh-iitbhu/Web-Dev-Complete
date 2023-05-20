const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB");

schema = {
    name: String,
    rating: Number,
    review: String
};

const Fruit = mongoose.model("Fruit",schema);
console.log("Dbg");

const fruit = new Fruit({
    name:"Apple",
        rating: 7,
        review:"Pretty Solid"
});
mongoose.connection.close();


fruit.save().then(() => console.log('Fruit compiled successfully !!')); 
// console.log("Dbg3");

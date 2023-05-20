

//   const findDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('fruits');
//     // Find some documents
//     collection.find({}).toArray(function(err, fruits) {
//       assert.equal(err, null);
//       console.log("Found the following records");
//       console.log(fruits)
//       callback(fruits);
//     });
//   }
  
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/todoDB');



const todo = mongoose.model('todo', { name: String });

const todo1 = new todo({ name: 'Code' });
todo1.save().then(() => console.log('Check compiled successfully !!'));
// mongoose.connection.close();
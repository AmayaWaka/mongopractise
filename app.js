const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/good");
//mongoose schema
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number
});
//mongoose model
const Fruit = mongoose.model('fruit', fruitSchema);

//Data
const fruit = new Fruit({

  name: "Apple",
  rating: 5
});


const banana = new Fruit({
  name: "Banan",
  rating: 8
});
//inserting many documents
Fruit.insertMany([fruit, banana], function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully Saved all  the fruits")
  }
})
//Reading from our collection
Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
    console.log(fruits);
  }
})


// fruit.save().then(()=>console.log("Successful"));
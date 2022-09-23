const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/good");
//mongoose schema
const fruitSchema = new mongoose.Schema({
  //Validation using mongoose
  name:{
    type: String,
    required: [true, "Please check your data"]
  },
  rating:{
    type: Number,
    min: 1,
    max: 10
  }
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
//Updating documents

Fruit.updateOne({_id: "632cfe09bb4634fd0e90dbb7"}, { name: "Radbrad"}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Document updated successfully");
  }
})
//Reading from our collection
Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
    //closed the connection
    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name)

    });
  }
});


// fruit.save().then(()=>console.log("Successful"));

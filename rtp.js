
//Initializedmongoose
const mongoose = require("mongoose");
//Created the mongoose connection
mongoose.connect("mongodb://127.0.0.1:27017/fav");
//Fruit schema

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number
});
const Fruit = mongoose.model("fruit", fruitSchema);

const apple = new Fruit({
  name: "Mango",
  rating: 2
});
 // apple.save();
//Initialized fruitSchema relationship
const personSchema = new mongoose.Schema({
  name: String,
  favorite: fruitSchema
});

const Person = mongoose.model("person", personSchema);


const person = new Person({
  name: "Kennedy",
  favorite: apple
});

// person.save();

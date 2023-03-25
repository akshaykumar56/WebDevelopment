const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/harryKart',{useNewUrlParser: true});

var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log("we are conected");
})


const kittySchema = new mongoose.Schema({
    name: String
  });

// const Kitten = mongoose.model('Kitten', kittySchema);

// const harryKitty = new Kitten({ name: 'HarryKitty Name' });
// console.log(harryKitty.name); // 'Silence'


kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };
  
var Kitten = mongoose.model('Kitten', kittySchema);

var harryKitty = new Kitten({ name: 'harryKitty' });
var MarryKitty = new Kitten({ name: 'MarryKitty' });

console.log(harryKitty.name);
harryKitty.speak();

harryKitty.save();
harryKitty.speak();

 Kitten.find({ name: MarryKitty});

 console.log(MarryKitty.name);
MarryKitty.speak();

MarryKitty.save();
MarryKitty.speak();

 Kitten.find({ name: MarryKitty});
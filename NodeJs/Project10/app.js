const express = require('express')
const path=require('path')
const app = express()

const mongoose = require('mongoose');
const bodyparser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Educate',{useNewURLParser:true});

const port = 3000

app.set('index.html') //This set function is very important as this is used to set name to value{name:value}
//important to save data in the database

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))
 
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email:String,
    address:String,
    description:String
  });

var Contact= mongoose.model('Contact',contactSchema);
app.use("/static",express.static("static"))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"index.html"))
})

app.post('/addData', (req, res)=>{
    var myData = new Contact(req.body);
    console.log(myData)
    myData.save().then(()=>{
    res.send("This item has been saved to the database")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")
  })
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
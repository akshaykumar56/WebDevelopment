const express = require('express')
const mongoose = require('mongoose');
const bodyparser = require("body-parser");


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/nodeq");

const path = require("path");   // path --> used to serve files
const { TextEncoder, TextDecoder } = require("util");
const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views')) 

app.use('/static', express.static('static'))

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

var Contact= mongoose.model('Contact',contactSchema);

app.get('/', (req, res) => {
  res.sendFile((path.join(__dirname,'./views/home.html')))
})

app.get('/home', (req, res) => {
  res.sendFile((path.join(__dirname,'./views/home.html')))
})

app.get('/about', (req, res) => {
  res.sendFile((path.join(__dirname,'./views/about.html')))
})

app.get('/contact', (req, res) => {
  res.sendFile((path.join(__dirname,'./views/contact.html')))
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
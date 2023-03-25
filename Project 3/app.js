const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const { TextEncoder, TextDecoder } = require("util");

mongoose.connect('mongodb://localhost/contactDance',{useNewURLParser:true});
const port = 18000;


app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    description: String
  });
  
var Contact= mongoose.model('Contact',contactSchema);


// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory 

// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})

app.get('/Home', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})

app.get('/Contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})

app.get('/About', (req, res)=>{
    const params = {}
    res.status(200).render('about.pug', params);
})

app.get('/Classes', (req, res)=>{
    const params = {}
    res.status(200).render('classes.pug', params);
})

app.get('/Services', (req, res)=>{
    const params = {}
    res.status(200).render('service.pug', params);
})

app.post('/Contact', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
    res.send("This item has been saved to the database")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")
})
});

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});



// call http://127.0.0.1:18000/
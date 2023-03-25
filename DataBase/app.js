var express=require("express");
var app=express()
var bodyParser=require("body-parser");
const mongoose = require('mongoose');
port=3000
mongoose.connect('mongodb://localhost:27017/gfg');
var db=mongoose.connection;

// on signifies the action will be called evertime
// once signifies the action will be called once
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})
mongoose.set('strictQuery', false);

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/sign_up', function(req,res){
	var name = req.body.name;
	var email =req.body.email;
	var pass = req.body.password;
	var phone =req.body.phone;

	var data = {
		"name": name,
		"email":email,
		"password":pass,
		"phone":phone
	}

db.collection('details').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully");
			
	});
		
	return res.redirect('signup_suc.html');
})


app.get('/',function(req,res){
return res.redirect('index.html');
})


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
  })

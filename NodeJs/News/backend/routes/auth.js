const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var fetchuser=require("../middleware/fetchuser");

const User=require("../models/User")
const JWT_SECRET="ITSASECRET"

// Create a User using: POST "/api/auth/". Doesnot require Auth
router.post('/createuser',[
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast 5 characters').isLength({ min: 5 }),
],async (req,res)=>{
     let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
 
    try{
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ success,error: "Sorry a user with this email already exists" })
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass
    })

    const data = {
      user: {
        id: user.id
      }
    }
    success=true;
    const Auth = jwt.sign(data, JWT_SECRET);
    // console.log(Auth);
    res.json({success, Auth })
  }
    catch (error) {
      console.error(error.message);
      res.status(500).send(success,'Internal Server Error');
    }
})

// Route 2: For Login Page
router.post("/login", [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists()
], async (req, res) => {
  let success=false;
  // if there are errors, return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password} = req.body;
  try {
    let user = await User.findOne({ email });
    if(!user)
    {  
      success=false;
      return res.status(400).json({ success,error: "Please try to login with correct credentials" })
    }
    const passWordCompare = await bcrypt.compare(password, user.password);
    if (!passWordCompare) {
      success=false;
      return res.status(400).json({success, error: "Please try to login with correct credentials" })
    }
    const payLoad = {
      user: {
        id: user.id
      }
    }

    const Auth = jwt.sign(payLoad, JWT_SECRET);
    success=true;
    res.json({ success,Auth })
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }

})
// Route 3
router.post("/getuser", fetchuser,async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {

  }
})


  module.exports=router
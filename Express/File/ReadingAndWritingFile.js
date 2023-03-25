// modules
const fs =require("fs");  //-->to import fs module
let text =fs.readFileSync("read.txt", "utf-8");

text = text.replace("read","rohan");
console.log(text);

// creating a new text file
fs.writeFileSync("rohan.txt",text);

var os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());





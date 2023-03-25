// synchronus and blocking --->line by line execution
const fs =require("fs");  //-->to import fs module
let text =fs.readFileSync("read.txt", "utf-8");
console.log(text);

// Asynchronus and non blocking  -->line by line is not guarranted
fs.readFile("read.txt","utf-8",(err ,data)=>{
console.log(data);
});
console.log("this is a message");
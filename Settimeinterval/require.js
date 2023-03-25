// const helper=require('./helper'); //here hepler is the helper.js file and not the module
//  console.log(helper('alex')); // this is not going to work as we did not export it

// console.log(helper.user('alex'));//now it work because we export the module in the helper file
// console.log(helper.id('123'))
// console.log(helper.email('alex@gmail.com'));



// const events=require('events');
// ElementInternals.on('click',function(){

// })




// On the backend side, Node.js offers us the option to build a similar system using the events module

//  1.emit is used to trigger an event
//  o2.n is used to add a callback function that's going to be executed when the event is triggered

// const eventsa = require('events');
// const myEmittter = new eventsa.EventEmitter;
// myEmittter.on('test',function(arg)
// {
//     console.log(arg);
// }) 

// myEmittter.emit('test','hello world');




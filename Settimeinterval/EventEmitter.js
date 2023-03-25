// EventEmitter is a class in node.js that is responsible for handling the events
//  created using the ‘events’ module in node.js


// Node.js has a built-in module, called "Events", 
// where you can create-, fire-, and listen for- your own events.
// const eventsa = require('events');

// const eventEmitter =new eventsa.EventEmitter;

 // let's create a start event
// eventEmitter.on('start', (start, end) => {
//     console.log(`started from ${start} to ${end}`)
//   })
  
//  we run the event handler function is triggered, and we get the console log.
// eventEmitter.emit('start', 1, 100);


const events=require('events');
const util=require('util');

const teams=function(name){
    this.name=name;
}

util.inherits(teams, events.EventEmitter) //as we want to inherit teams so we have pass the tears as an argument
const Arsenal= new teams('Arsenal');
const India=new teams('India');
const United=new teams('United');

const teamArray=[Arsenal, India , United];

teamArray.forEach((team)=>{
    team.on('nation',function(nation){
        console.log(team.name + ' is '+ nation + " football club");
    });
});

Arsenal.emit('nation','england');
India.emit('nation','India')
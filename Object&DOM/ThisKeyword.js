
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.




// // console.log(this);
// function addtwonumbers(x,y){
//     console.log(x+y);
//     console.log(this);
// }
// addtwonumbers(12,13);


// var sheldon={
//     name:'sheldon',
//     age:34,
//     hasGone:true,
//     friends:['pemmy','ramu'],
//     say:function()
//     {
//         console.log(this);
//     }
// }
// sheldon.say();

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
y=person.fullName();
  console.log(y);



//   In HTML event handlers, this refers to the HTML element that received the event:

<button onclick="this.style.display='none'">
  {/* Click to Remove Me! */}
</button>



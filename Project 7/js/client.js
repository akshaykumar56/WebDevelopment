const socket = io('http://localhost:3200');

//Get DOM elements in respective Js variables
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");

//Audio that will play on receiving messages
var audio = new Audio('Ting.mp3');

const append =(message, position)=>{
    const messageElement =document.createElement('div');
    messageElement.innerText= message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if(position =='left'){
    audio.play();
    }
}

//Ask new user for his/her name and let the server know
let name = prompt('Enter Your Name To Join The Chat');
socket.emit('new-user-joined',name);

// If a new user join, receive his/her name from the server
socket.on('user-joined',name =>{
 append(`${name} joined the chat`,'right')
})

// If server sends a message receive it
socket.on('receive',data =>{
    append(`${data.name}:${data.message}`, 'left')
})

//  If a user leave the appeend the info to the  container
socket.on('left', name =>{
    append(`${name} left the chat`, 'right')
})

//If the form get submitted, send server the message
form.addEventListener('submit',(e)=>{
    e.preventDefault();    // -->page do not refresh
    const message = messageInput.value;
    append(`You: ${message}`,'right');
    socket.emit('send', message);
    messageInput.value='';  //-->empty the input in index.html
});
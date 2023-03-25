const io = require('socket.io')(3200,{
    cors:{
        origin:'*',
    }
});
 
const users={};

io.on('connection',socket=>{
    // If any new user joins, let other connected people to the server know!
    socket.on('new-user-joined', name =>{
        // console.log("new user", name)
        users[socket.id]= name;
        socket.broadcast.emit('user-joined',name);
    });
    
    //If someone sends a message,Broadcast it to other people
    socket.on('send', message=>{
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
    });

    //If someone leaves the chat, let other people Know about it
    socket.on('disconnect', message =>{
        socket.broadcast.emit('left', users[socket.id])
        delete users[socket.id];
    });
})
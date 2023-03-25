// buffer is a temporary storage for a data that's being transferred from one place to another
//stream -->stream is a data that flows from one place to another
// writeable stream -->allow node js to write data to a stream
// readable stream --> allow node js to read data from a stream
// duplex--> allow nodejs to read and write data from a stream


// on property is used to bind a function with the event and emit is used to fire an event.

////////////////////////////////////////////Read Stream//////////////////////////////////////
const http=require('http');
const fs=require('fs');

// const readStream =fs.createReadStream(__dirname + '/readme.txt','utf-8');

// // on is used to bind 'data' event to the function that take 'chunk' as argument
// // data is a inbuilt function that allow us to fire the function whenever something is received by it
// readStream.on('data',(chunk)=>{
//     console.log('new data receivd');
//     console.log(chunk);
// });


////////////////////////////////////////////////////////Write Stream////////////////////////////////
// const http=require('http');
// const fs=require('fs');
// const readStream =fs.createReadStream(__dirname + '/readme.txt','utf-8'); // read data from the /readme.txt
// const writeStream =fs.createWriteStream(__dirname + '/writeme.txt');// write data to the writeme.txt

// readStream.on('data',(chunk)=>{
//     console.log('new data receivd');
//     console.log(chunk);
//     writeStream.write(chunk); // write the same data as in readme.txt in writeme.txt
// });



////////////////////////////////////////////////pipe//////////////////////////////////////////////////
const http=require('http');
const fs=require('fs');
const readStream =fs.createReadStream(__dirname + '/readme.txt','utf-8'); // read data from the /readme.txt
const writeStream =fs.createWriteStream(__dirname + '/writeme.txt');// write data to the writeme.txt

readStream.pipe(writeStream);


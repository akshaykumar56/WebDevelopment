const http = require('http');

const hostname = '127.0.0.1';
// const port =700;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device.width ,initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>
             CSS Grid
          </title>
          <style>
  
              .container
              {
              display:grid;
              grid-template-columns:1fr 3fr 3fr;
              grid-template-rows: repeat (4, 1fr);
              grid-column-gap: 7rem;
              grid-row-gap: 1rem;
              
              }
  
              .box
              {
                 border:2px solid red;
                 background-color:salmon;
                 padding:4px;
               
              }
  
              .box:first-child
              {
                  /* grid-column-start: 1;
                  grid-column-end: 3;
                  grid-row-start: 1;
                  grid-row-end:3; */
                  grid-column: 1/span 2;
                  grid-row: 1/span 2;
              }
            
          </style>
      </head>
      <body>
      <div class="container">
          <div class="box">This is item-1</div>
          <div class="box">This is item-2</div>
          <div class="box">This is item-3</div>
          <div class="box">This is item-4</div>
          <div class="box">This is item-5</div>
          <div class="box">This is item-6</div>
          <div class="box">This is item-7</div>
          <div class="box">This is item-8</div>
          <div class="box">This is item-9</div>
          <div class="box">This is item-10</div>
      </div>
      </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
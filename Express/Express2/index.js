const express = require('express')
const path=require('path')
const app = express()
const port = 3000

const AkshayMiddleWare =(req,res,next)=>{
    console.log(req)
    next()  // if your program contains multiple middleware than this is used
}

// app.use(AkshayMiddleWare)


//1. used to serve static file
app.use(express.static(path.join(__dirname,'public')))


app.get('/hello/:name', (req, res) => {
    res.send("Hello World! "+ req.params.name)
    })

app.get('/', (req, res) => {
//   res.send('Hello World!')  // to send simple text
res.sendFile(path.join(__dirname,'index.html')) // to send file
// res.status(500)             // to send status
// res.json({"harry":38})        // To send json 
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
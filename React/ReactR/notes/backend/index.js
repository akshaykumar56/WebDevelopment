const connectToMongo = require('./db.js');
connectToMongo();

const express = require('express');
const app = express();
var cors = require('cors')
const port=5000

app.use(express.json())
app.use(cors())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/note',require('./routes/note'))

app.listen(port,()=>{
    console.log(`App listen at ${port}`)
})
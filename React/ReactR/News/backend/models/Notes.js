const mongoose= require('mongoose');
// const {Schema}=mongoose;
const NotesSchema = mongoose.Schema({
     user:{
        type:mongoose.Schema.Types.ObjectId,  //like foreign key
        ref:'user'  // reference to user schema
     },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const Notes = mongoose.model('notes',NotesSchema);  //--> 'notes' is the name of schema build in database 

module.exports = Notes;


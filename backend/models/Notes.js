
const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
   user:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'User'
      },
   title:{
      type:String,
      require:true
   },
   description:{
      type:String,
      require:true
   },
   tag:{
    type:String,
    default:"General"
   },
   date:{
    type:Date,
    default:Date.now
   },
});

module.exports = mongoose.model('notes', notesSchema);


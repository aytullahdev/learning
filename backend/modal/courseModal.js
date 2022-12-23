const mongoose = require('mongoose');

const courseSchema= mongoose.Schema({
    
   tittle:{
       type: String,
       required: [true, 'Please add a Tittle']
   },
   price:{
        type: Number,
        required: [true, 'Please add a Prices']
   },
   img:{
        type: String,
        required: [true, 'Please add a course image']
   }
   
},
{
   timestamps: true
})

module.exports = mongoose.model('Course',courseSchema);

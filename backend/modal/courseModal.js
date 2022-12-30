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
   },
   description:{
         type: String,
         required: [true, "Please add a course description"]
   },
   catagory:{
      type: String,
      required: [true, 'Please add a Catagory'],
      enum: ['development','designe', 'programming' , 'it & software']

   }
   
},
{
   timestamps: true
})

module.exports = mongoose.model('Course',courseSchema);

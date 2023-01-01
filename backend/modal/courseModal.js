const mongoose = require('mongoose');

const courseSchema= mongoose.Schema({
    
   tittle:{
       type: String,
       required: [true, 'Please add a Tittle']
   },
   price:{
        type: Number,
        required: [true, 'Please add a Prices'],
        min: [ 1000, 'Must be at least 1, got {VALUE}'],
   },
   img:{
        type: String,
        required: [true, 'Please add a course image']
   },
   description:{
         type: String,
         required: [true, "Please add a course description"]
   },
   duration:{
         type: String,
         required: [true, "Please add a course duration"]
   },
   catagory:{
      type: String,
      required: [true, 'Please add a Catagory'],
      enum: ['development','design', 'programming' , 'it_software']

   },
   instructor_name:{
      type: String,
      required: [true, "Please add instructor name"]
   },
   instructor_profession:{
      type: String,
      required: [true, "Please add instructor profession"]
      
   },
   instructor_qual:{
      type: String,
      required: [true, "Please add instructor qualification"],
   },
   instructor_img:{
      type: String,
      required: [true, "Please add instructor image"]
   },
   total_enroll:{
      type: Number,
      default: 0
   }

   
},
{
   timestamps: true
})

module.exports = mongoose.model('Course',courseSchema);

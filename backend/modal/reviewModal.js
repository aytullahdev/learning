const mongoose = require('mongoose');

const reviewSchema= mongoose.Schema({
   user:{
       type: mongoose.Schema.Types.ObjectId,
       required: [ true, 'Please add a user'],
       ref: 'User'
   },
   course:{
       type: mongoose.Schema.Types.ObjectId,
       required: [ true, 'Please add a course'],
       ref: 'Course'
   },
   text:{
       type: String,
       required: [true, 'Please add a Review']
   },
   rating:{
        type: Number,
        require: [true, "Please add a Rating"],
        min: [ 1, 'Must be at least 1, got {VALUE}'],
        max: [ 5, 'Must be below 5, got {VALUE}'],
   }
   
},
{
   timestamps: true
})

module.exports = mongoose.model('Review',reviewSchema);

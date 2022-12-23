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
   review:{
       type: String,
       required: [true, 'Please add a Review']
   },
   
},
{
   timestamps: true
})

module.exports = mongoose.model('Review',reviewSchema);

const mongoose = require('mongoose');

const enrolSchema= mongoose.Schema({
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
   isReviewed:{
        type: Boolean,
        default: false,
   }
   
},
{
   timestamps: true
})

module.exports = mongoose.model('Enrol',enrolSchema);

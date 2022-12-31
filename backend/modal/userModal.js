const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [ true, 'Please add a name']
    },
    email:{
        type: String,
        required: [true, 'Please add a email']
    },
    password:{
        type: String,
        required: [true, 'Please add a password']
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    },
    profession:{
        type: String,
        default: "N/A",
    },
    img:{
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User',userSchema);
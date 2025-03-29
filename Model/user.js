const mongoose = require('mongoose');

const {Schema} = mongoose;

const user_schema = new Schema({
    name:{type:String},
    emailid:{type:String},
    address:{type:String},
    password:{type:String},
    image:{type:String}
})

exports.user_schema = mongoose.model('profile_1s',user_schema);
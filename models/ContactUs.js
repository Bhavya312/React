const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  username:{
    type:String,
    required:[true, 'Please provide name'],
    trim:true,
  },
  email:{
    type:String,
    required:[true, 'Please provide email'],
    unique: true,
    trim:true,
  },
  phone_number:{
    type:String,
    required:[true, 'Please provide phone number'],
    trim:true,
  },
  message:{
    type:String,
    required:[true, 'Please provide message'],
    trim:true,
  }
});

module.exports = mongoose.model('Contact', ContactSchema)
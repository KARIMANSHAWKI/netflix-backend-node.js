const mongoose = require('mongoose');

mongoose.Schema = new UserSchema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    profilePic = {type: String, default: ''},
    IsAdmin = {type: Boolean, default: false}, 
}, {timestamps: true});


module.exports = mongoose.model('User', UserSchema);
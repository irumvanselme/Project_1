const mongoose = require('mongoose');
const Joi = require('joi')
const jwt  =  require('jsonwebtoken')
const config = require('config')
//Attributes of the Course object
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 255,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        maxlength: 1024,
        minlength: 3
    },
    gender:{
        type: String,
        required: true,
        maxlength: 100,
        minlength: 1
    }
});
userSchema.methods.generateAuthToken = function(){
    const token  =jwt.sign({_id:this._id,name:this.name,email:this.email,gender:this.gender}
        ,config.get('jwtPrivateKey'))
    return token
}
const User = mongoose.model('User', userSchema);

function validateUser(user){
    const schema = {
        name:Joi.string().max(255).min(3).required(),
        email: Joi.string().max(255).min(3).required().email(),
        password:Joi.string().max(255).min(3).required(),
        gender: Joi.string().max(255).min(1).required()
    }
    return Joi.validate(user,schema)
}
module.exports.User = User
module.exports.validate= validateUser
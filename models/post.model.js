const mongoose = require('mongoose');
const Joi = require('joi')
//Attributes of the Course object
var postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 3
    },
    senderId: {
        type: String,
        required: true,
        maxlength: 1024,
        minlength: 3
    },
    senderDate:{
        type: Date,
        required: true
    }
})
const Post = mongoose.model('Post', postSchema);
function validatePost(post){
    let Schema = {
        name: Joi.string().required(),
        senderId: Joi.string().required(),
        senderDate: Joi.date().required()
    }
    Joi.validate(post,Schema)
}
module.exports.Post = Post
module.exports.validatepost= validatePost
const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model('User')
router.get("/",(req,res)=>{
    User.find()
        .then((users)=>res.send(users))
        .catch(err=>res.send(err))
})
module.exports = router
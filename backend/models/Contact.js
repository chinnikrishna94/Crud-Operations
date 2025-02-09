const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true
    },
    phone:{
        type:Number,
        require: true
    },
    city:{
        type:String,
        require: true
    }
})

module.exports = mongoose.model("Contact",schema);
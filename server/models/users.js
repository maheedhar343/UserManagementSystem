const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email:String,
    age:Number
})

const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel;  //exporting the model so that it can be used in other files
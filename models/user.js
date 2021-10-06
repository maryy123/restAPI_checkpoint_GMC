const mongoose=require('mongoose')
const {Schema}=mongoose

const UserSchema= new Schema({
    name:{
        required:true,
        type:String
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:Number
    }
})

module.exports=User=mongoose.model('user',UserSchema)
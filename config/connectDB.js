const mongoose=require('mongoose')

const connectDB=async()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("database connected successfully")
    } 
    catch (error) {
        console.error(error)
    }
}

module.exports=connectDB
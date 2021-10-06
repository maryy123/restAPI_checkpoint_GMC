console.clear()
const express=require('express')
const connectDB = require('./config/connectDB')

const router=express.Router()

const app=express()
require('dotenv').config()

connectDB()

// middleware
app.use(express.json())
app.use('/api/user',require('./router/user'))

const PORT=process.env.PORT


app.listen(PORT,(err)=>{
    err ? console.error(err) : console.log(`server running on port: ${PORT}`)
})


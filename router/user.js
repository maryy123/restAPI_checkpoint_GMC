const express=require('express')
const User = require('../models/user')
const router=express.Router()

router.get('/',async(req,res)=>{
    try {
        const users=await User.find()
        res.send({msg:'List of users:',users})
    } 
    catch (error) {
        res.status.apply(400).send({msg:'failed to get users',error})
    }
})

router.post('/',async(req,res)=>{
    try {
        const newUser=new User({...req.body})
        await newUser.save()
        res.send({msg:'user added succ',newUser})
    } 
    catch (error) {
        res.status.apply(400).send({msg:'failed to add user',error})
    }
})

router.put('/:_id',async(req,res)=>{
    try {
        const {_id}=req.params
        await User.findByIdAndUpdate({_id},{$set:{...req.body}})
        res.send({msg:'user updated succ'})
    }
     catch (error) {
        res.status.apply(400).send({msg:'failed to update user',error})
    }
})

router.delete('/:_id',async(req,res)=>{
    try {
        const {_id}=req.params
        const removedUser=await User.findByIdAndRemove({_id})
        res.send({msg:'user deleted succ',removedUser})
    } 
    catch (error) {
        res.status.apply(400).send({msg:'failed to delete user',error})
    }
})

router.get('/:_id',async(req,res)=>{
    try {
        const {_id}=req.params
        const user=await User.findById({_id})
        res.send({msg:'user:',user})
    } catch (error) {
        res.status(400).send({msg:'failed to get user',error})
    }
})

module.exports=router


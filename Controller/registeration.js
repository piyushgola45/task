const express = require('express');
const registeration_Router = express.Router();
const jwt=require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user_schema = require('../Model/user.js').user_schema;

registeration_Router.post('/',async(req,res)=>{
    let a = new user_schema(req.body);
    a.password=await bcrypt.hash(req.body.password,10);
    await a.save();
    const token = jwt.sign({emailid:req.body.emailid},process.env.SECRET_KEY);
    res.json({messgae:"Success",token:token});
})


exports.registeration_Router=registeration_Router;
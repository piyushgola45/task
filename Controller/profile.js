const express = require('express');
const profile_Router = express.Router();
const user_schema = require('../Model/user.js').user_schema;
const jwt = require('jsonwebtoken');
let decoded;
const auth=(req,res,next)=>{
    try{
        const authheader=req.headers.authorization;
        token = authheader.split(" ")[1];
        console.log(token);
        decoded = jwt.verify(token,process.env.SECRET_KEY); 
        console.log(decoded);
        next();
    }
    catch(err){
        res.json("authentication failed");
    }
}
profile_Router.get('/',auth,async(req,res)=>{
    const r = await user_schema.find({emailid:decoded.emailid});
    console.log(r);
    res.json(r);
})
profile_Router.patch('/',auth,async(req,res)=>{
    // let name=req.body.name;
    const a = await user_schema.findOneAndUpdate(
        {emailid:req.body.emailid},
        {$set:{name:req.body.name}},
        {$set:{name:req.body.address}},
        {$set:{name:req.body.image}}
        // {$set:{name:req.body.name}}
    )
    res.json("Success");
})

exports.profile_Router=profile_Router;
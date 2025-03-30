const express = require('express');
const loginRouter = express.Router();
const user_schema = require('../Model/user.js').user_schema;
const bcrypt = require('bcrypt');
loginRouter.post('/',async(req,res)=>{
    const r = await user_schema.find({emailid:req.body.emailid});
    if(r.length==0){
        res.json("User not exist.Please Sign up");
        return;
    }
    else{
        const user = await user_schema.findOne({emailid:req.body.emailid});
        console.log(user);
        const isMatch = bcrypt.compareSync(req.body.password,user.password);
        if(isMatch){
            res.json("Login successfull");
            return;
        }
        else{
            res.json("Wrong credentials");
            return;
        }
    }
})
exports.loginRouter=loginRouter;
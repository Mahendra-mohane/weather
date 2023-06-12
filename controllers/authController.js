const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const User=require("../models/user")
const authService=require("../models/user");

exports.login=async(req,res,next)=>{

    try{
        const {email,password}=req.body;
        const user=await User.findOne({email})
        if(!user){
            return res.status(401).json({error:"Invalid credentials"})
        }

        const isPasswordValid=await bcrypt.compare(password,user.password)
        if(!isPasswordValid){

            return res.status(401).json({error:"invalid credentials"})
        }

        const token=authService.generateToken(user)
        res.json({token})
    }catch(err){
        next(err)
    }
}
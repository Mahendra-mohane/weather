const jwt=require("jsonwebtoken")
const User=require("../models/user")


exports.authenticateUser=async(req,res,next)=>{
    try{
        const token=req.headers.authorization;


        if(!token){
            return res.status(401).json({error:"unauthorized"})
        }

        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const user=await User.findById(decoded.userId)

        if(!user){
            return res.status(401).json({error:"unauthorized"})
        }
        req.user={userId:user._id}
        next();

    }catch(err){
        next(err)
    }
};
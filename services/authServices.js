const jwt=require("jsonwebtoken");
exports.generateToken=(user)=>{
    const payload={
        userId:user._id
    };
    return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"1h"});

};

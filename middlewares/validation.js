exports.validateCity=(req,res,next)=>{
    const{city}=req.query;

    if(!city || !/^[a-zA-Z\s]+$/.test(city)){
        return res.status(400).json({error:"invalid city format"});
    }
    next()
}
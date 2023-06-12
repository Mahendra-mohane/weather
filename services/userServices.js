const User=require("../models/user")
exports.getUserById=async(userId)=>{
    try{
        const user=await User.findById(userId)

        return user;

    }catch(err){
        throw new Error("Failed to get user")
    }
}


exports.createUser=async(email,password)=>{
    try{
        const user=new User({
            email,
            password
        });

        await user.save()
        return user;
    }catch(err){
        throw new Error("failed to creat user")
    }
};


exports.updateUser=async(userId,updatedFields)=>
{
    try{

        const user=await User.findByIdAndUpdate(userId,updateFields,{
            new:true,
        });
        return user;


}catch(err){
    throw new Error("Faild to update user")
}


};

exports.deleteUser=async(userId)=>{
    try{
        await User.findByIdAndRemove(userId);
    }catch(err){
        throw new Error("Failed to delete user ");
    }
}








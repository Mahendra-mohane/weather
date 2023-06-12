const express=require("express");
const userController=require("../controllers/userController")
const authentication=require("../middlewares/authentication");
const router=express.Router();



router.get("/preferences",authentication.authenticateUser,userController.getUserPreferences);

router.put("/preferences",authentication.authenticateUser,userController.updateUserPreferences)



module.exports=router;

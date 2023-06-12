const express=require("express")

const weatherController=require("../controllers/weatherController");
const validation=require("../middlewares/validation")
const rateLimiter=require("../middlewares/rateLimit")

const router=express.Router();

router.get("/",rateLimiter,validation.validateCity,weatherController.getCurrentWeather);

module.exports=router;
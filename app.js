const express=require("express")

require("dotenv").config()
const app=express()

app.use(express.json())

const authRouter=require("./routes/authRoutes")
const userRoutes=require("./routes/userRoutes")
const weatherRoutes=require("./routes/weatherRoutes")


app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/weather",weatherRoutes)


app.use((err,req,res,next)=>{
    console.error(err)
    res.status(500).json({error:"Internal error"})
})

const port=process.env.PORT || 4031;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)

})



const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res
    .send("hello world!") 
    .status(200)
})
app.get(("/about"),(req,res)=>{
    res.send("about")
})
    const PORT=5050;
app.listen(PORT,()=>{
    console.log(`server is running on 5050 http://localhost:${PORT}`)
})



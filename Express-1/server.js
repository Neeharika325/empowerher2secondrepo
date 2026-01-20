import express from "express";
const app=express()  //creating express application
app.get("/home",(req,res)=>{
    res.send(`<h3 style="color:red>this is my home page<h3>`)
})

app.get("/contact",(req,res)=>{
    res.json({message:"this is my contact page"})
})

app.get("/blog",(req,res)=>{
    res.send("this is my blog page")
})



const PORT=2000;
app.listen(PORT, ()=>{
    console.log('Server running')
})

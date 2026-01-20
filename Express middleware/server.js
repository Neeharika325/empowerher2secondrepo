import express from "express"
//import { readFileSync, write, writeFileSync } from "fs"

const app=express();
// app.use(express.json());

// function readData(){
//     const data=readFileSync("db.json","utf-8");
//     return JSON.parse(data)
// }


// function writeData(data){
//     writeFileSync("db.json",JSON.stringify(data,null,2));
//     }

// add user

// app.post("/users",(req,res)=>{
//     const data=readData();
//     data.users.push(req.body);//postman
//     writeData(data);
//     res.send("user added");
// })

// app.get("/users/:id",(req,res)=>{ //dynamic routing
//     const data=readData()
//     const user=data.users.find(u=>u.id==req.params.id) //:/id true
//     if(!user) return res.send("user not found")//false
//     res.send(user);
// })
// app.put("/users/:id",(req,res)=>{ //dynamic routing
//     const data=readData()
//     const user=data.users.find(u=>u.id==req.params.id) //:/id true
//     if(!user) return res.send("user not found")//false
//     user.name=req.body.name;
//     writeData(data)
//     res.send("user updated");
// })

// app.delete("/users/:id",(req,res)=>{
//     const data=readData();
//     data.users=data.users.filters(u=>u.id!=req.params.id)
//     writeData(data)
//     res.send("user deleted");
// })


const users=[
    {id:1,name:"ani",age:23,active:true},
    {id:2,name:"soni",age:24,active:false},
    {id:3,name:"niki",age:25,active:true},
    {id:4,name:"anil",age:26,active:false},

]
app.get("/users",(req,res)=>{
    let result=[...users]


//filtering

if(req.query.active){
    const isActive=req.active==="true";
    result=result.filter(user=>user.active==isActive)
}




})
app.listen(3000,()=>{
    console.log("server started")

})


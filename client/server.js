import express from "express";

const app= express()
app.get("/",(_req,res)=>{

    res.send('this is from backend')

});

const port = 4000;
app.listen(port, ()=>console.log('Node js server staated'));
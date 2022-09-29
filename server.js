const express = require('express');
var bodyParser = require("body-parser");
const app= express()


var dbconnection = require('./db');
var productsRoute = require('./routes/productsRoute')

app.use('/api/products' , productsRoute) //if request url is /api/products then check products route
app.use(bodyParser.json());



app.get("/",(_req,res)=>{

    res.send('this is from backend')

});

const port = 4000;
app.listen(port, ()=>console.log(`Node js server started in port ${port}`));
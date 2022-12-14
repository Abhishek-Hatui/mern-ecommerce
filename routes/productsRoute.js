const express = require('express');
const router = express.Router();
const Product = require('../models/productModels')

router.get("/getallproducts",(req,res)=>{
    Product.find({}, (err, docs)=>{   //empty {} means all products
        if(!err){
            return res.send(docs);
        }
        else{
            return res.status(400).json({message:'something went wrong'});
        }
    })
});

router.post("/getproductbyid",(req, res)=>{
    Product.find({_id : req.params.productid},(err, docs)=>{
        if(!err){
            res.send(docs[0]);
        }
        else{
            return res.status(400).json({message: 'something went wrong'});
        }
    })

});

module.exports = router
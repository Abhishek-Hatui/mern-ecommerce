const mongoose = require('mongoose')

var mongoDBURI = 'mongodb+srv://grp16:grp16@cluster0.8mbntg3.mongodb.net/ecommerce'
var mongoDBURILocal ='mongodb://localhost:27017/ecommerce'

mongoose.connect(mongoDBURILocal, {useUnifiedTopology:true,useNewUrlParser:true});

var dbConnect = mongoose.connection;

dbConnect.on('error',()=>{
    console.log('mongodb connection failed');
});

dbConnect.on('connected',()=>{
    console.log('mongodb connection successful');
});

module.exports = mongoose;
var express = require('express')
var app = express()

app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
      res.send(200);
    }
    else {
      next();
    }
  });

// app.get("/index",function(req,res){
//    res.send([1,2,3],[213,13,3,43,5,],[232,3,6,23,32,]);
// })

// app.get("/index",function(req,res){
//    res.send("zhang");
// })

app.get("/index",function(req,res){
   res.send({a:1});
})



app.listen(2000,function(){
    console.log("starting");
})
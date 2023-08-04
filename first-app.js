const express=require('express');
const app=express();

app.use('/add-product',(req,res,next)=>{
    console.log('In the middlewear');
    res.send('<h1>Hello World<h1/>');
   
})

app.use('/',(req,res,next)=>{
    console.log('another');
})

const express=require('express');
const app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    
    res.send('<form action="/product" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>');
//    next();
})

app.use('/product',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello World</h1>');
})

// let server=http.createServer(app);

app.listen(4001);

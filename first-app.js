// sirst-app
const express=require('express');
const app=express();
const adminRoute=require('./Routes/admin');
const shopRoute=require('./Routes/shop');


const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoute);

app.use(shopRoute);

// let server=http.createServer(app);
app.use((req,res,next)=>{
    res.status(404).send('<h1>error not found</h1>');
})

app.listen(4001);

// admin js
const express=require('express');
const router=express.Router();

router.get('/add-product',(req,res,next)=>{  
    res.send('<form action="product" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>');
})

router.post('/product',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
})

router.get('/login',(req,res,next)=>{
    res.send(`<form action="/open" onsubmit="localStorage.setItem('username',document.getElementById('user').value)" method="POST"><input type="username" id="user"><button type="submit">login</button></form>`);
})

router.post('/open',(req,res,next)=>{
    
    console.log(`<h1>Hello from open</h1>`)
    res.redirect('/');
});

module.exports=router;

// shop js
const express=require('express');
const fs=require('fs');

const router=express.Router();

router.get('/',(req,res,next)=>{
    fs.readFile('msgs.txt',(err,data)=>{        //read file
        if(err){
            data='NO chat exists'
        }
        res.send(` ${data}<form action="/" onsubmit="document.getElementById('userName').value=localStorage.getItem('username')" method="POST">
        <input type="hidden" id="userName" name="userName">
        <input type="text" id="message" name="message">
        <button type="submit">Send</button>   
    </form>`);
    })  
  
})

router.post('/',(req,res,next)=>{
    fs.appendFile('msgs.txt',` ${req.body.userName}:${req.body.message}`,(err)=>{      //write filr
        if(err){
            console.log(err);
            data=err;
        }

    });
    console.log(`${req.body.userName}:${req.body.message} hello`);
    // res.send(`<h3>${req.body.userName}:${req.body.message}</h3>`);
    res.redirect('/');

    
})

module.exports=router;



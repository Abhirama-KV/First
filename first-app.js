// first-app file
const express=require('express');
const app=express();
const adminRoute=require('./Routes/admin');
const shopRoute=require('./Routes/shop');


const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoute);

app.use('/admin',shopRoute);

// let server=http.createServer(app);
app.use((req,res,next)=>{
    res.status(404).send('<h1>error not found</h1>');
})

app.listen(4001);

// ADMIN FILE
const express=require('express');
const router=express.Router();

router.get('/add-product',(req,res,next)=>{  
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>');
})

router.post('/product',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports=router;

// SHOP FILE
const express=require('express');

const router=express.Router();

router.get('/',(req,res,next)=>{
    res.send('<h1>Hello World</h1>');
})

module.exports=router;

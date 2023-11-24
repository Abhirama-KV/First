const express = require('express')

const router = express.Router()

router.get('/add-product',(req,res,next)=>{
    console.log('addproduct')
    res.send('<html><form action="/product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form></html>')
    
})

router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.send('<h1>product</h1>')
     
})

module.exports = router

const fs=require('fs');
fs.writeFileSync('hello.txt','console.log(first node project)');

const product=(a,b)=> a*b;
console.log(product(8,5));

const Student={
    name:'Abhi',
    address:'Bangalore',
    details:function(){
        console.log(`name:${this.name},address:${this.address}`);
    }
}

Student.details();

// CREATING SERVER USING LOAD
const http=require('http');
let server=http.createServer((res,req)=>{
    console.log(req);
});

server.listen(3000);

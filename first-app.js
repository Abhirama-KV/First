
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

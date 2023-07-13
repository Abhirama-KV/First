const submit=document.getElementById('submit');
const inputName=document.getElementById('name');
const inputEmail=document.getElementById('email');
const inputPhone=document.getElementById('phone');
const ul=c=document.getElementById('items');

class Person{
    static count=0;
    constructor(name,email,phone){
        this.name=name;
        this.email=email;
        this.phone=phone;
        Person.count++;
    }
}

let j=new Person('abh','@123',9876);
console.log(j);

submit.addEventListener('click',display)

function display(e){
    e.preventDefault();

    const li=document.createElement('li');
    li.appendChild(document.createTextNode(`Name: ${inputName.value} Email: ${inputEmail.value} Phone: ${inputPhone.value}`));
    ul.appendChild(li);
    
    p=new Person(inputName.value,inputEmail.value,inputPhone.value);
    
    localStorage.setItem(`data${Person.count+1}`,JSON.stringify(p));
    

    inputEmail.value='';
    inputName.value='';
    inputPhone.value='';
}
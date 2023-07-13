const submit=document.getElementById('submit');
const inputName=document.getElementById('name');
const inputEmail=document.getElementById('email');
const inputPhone=document.getElementById('phone');
const ul=c=document.getElementById('items');
let del;
let edit;

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
    li.className=inputEmail.value;

    // add delete
    del=document.createElement('button');
    del.className='delete';
    del.textContent='delete';
    li.appendChild(del);

    // add edit
    edit=document.createElement('button');
    edit.className='edit';
    edit.textContent='edit';
    li.appendChild(edit);

    ul.appendChild(li);

    
    p=new Person(inputName.value,inputEmail.value,inputPhone.value);
    
    localStorage.setItem(`${inputEmail.value}`,JSON.stringify(p));
    

    inputEmail.value='';
    inputName.value='';
    inputPhone.value='';
}

ul.addEventListener('click',remove);

function remove(e){
    if(e.target.classList.contains('delete')){
        const li=e.target.parentElement;
        if(confirm('Are you sure?')){
            ul.removeChild(li);
            localStorage.removeItem(li.className)
        }
    }
}

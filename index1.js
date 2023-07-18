const amount=document.getElementById('amount');
const description=document.getElementById('description');
const category=document.getElementById('category');
category.value='';
const button=document.getElementById('myBtn');
const ul=document.getElementById('list');
var del;
var edit;

class Person{
  constructor(amount,description,category){
    this.amount=amount;
    this.description=description;
    this.category=category;
  }
}

button.addEventListener('click',submitFun)

function submitFun(e){
  e.preventDefault();
  let li=document.createElement('li');
  li.appendChild(document.createTextNode(`${amount.value}-${description.value}-${category.value}`));
  li.className=`${description.value}`;
  del=document.createElement('button');
  del.className='delete';
  edit=document.createElement('button');
  edit.className='edit';
  del.appendChild(document.createTextNode('delete expenses'))
  edit.appendChild(document.createTextNode('edit expenses'));
  li.appendChild(del);
  li.appendChild(edit);
  ul.appendChild(li);
  p=new Person(amount.value,description.value,category.value);
  localStorage.setItem(li.className,JSON.stringify(p));
  amount.value='';
  description.value='';
  category.value='';
}

ul.addEventListener('click',delFun);

function delFun(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
      let li=e.target.parentElement;
      localStorage.removeItem(li.className);
      ul.removeChild(li);
    }
  }else if(e.target.classList.contains('edit')){
    let li=e.target.parentElement;
    let obj=JSON.parse(localStorage.getItem(li.className));
    localStorage.removeItem(li.className); 
    ul.removeChild(li);
    amount.value=obj.amount;
    description.value=obj.description;
    category.value=obj.category;
  }
}


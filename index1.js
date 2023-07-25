// const amount=document.getElementById('amount');
// const description=document.getElementById('description');
// const category=document.getElementById('category');
// category.value='';
// const button=document.getElementById('myBtn');
// const ul=document.getElementById('list');
// var del;
// var edit;

// class Person{
//   constructor(amount,description,category){
//     this.amount=amount;
//     this.description=description;
//     this.category=category;
//   }
// }

// button.addEventListener('click',submitFun)

// function submitFun(e){
//   e.preventDefault();
//   let li=document.createElement('li');
//   li.appendChild(document.createTextNode(`${amount.value}-${description.value}-${category.value}`));
//   li.className=`${description.value}`;
//   del=document.createElement('button');
//   del.className='delete';
//   edit=document.createElement('button');
//   edit.className='edit';
//   del.appendChild(document.createTextNode('delete expenses'))
//   edit.appendChild(document.createTextNode('edit expenses'));
//   li.appendChild(del);
//   li.appendChild(edit);
//   ul.appendChild(li);
//   p=new Person(amount.value,description.value,category.value);
//   localStorage.setItem(li.className,JSON.stringify(p));
//   amount.value='';
//   description.value='';
//   category.value='';
// }

// ul.addEventListener('click',delFun);

// function delFun(e){
//   if(e.target.classList.contains('delete')){
//     if(confirm('Are you sure?')){
//       let li=e.target.parentElement;
//       localStorage.removeItem(li.className);
//       ul.removeChild(li);
//     }
//   }else if(e.target.classList.contains('edit')){
//     let li=e.target.parentElement;
//     let obj=JSON.parse(localStorage.getItem(li.className));
//     localStorage.removeItem(li.className); 
//     ul.removeChild(li);
//     amount.value=obj.amount;
//     description.value=obj.description;
//     category.value=obj.category;
//   }
// }


// const myName=document.getElementById('name');
// const email=document.getElementById('email');
// const phone=document.getElementById('phone');
// const submit=document.getElementById('btn');
// const ul=document.getElementById('list');
// submit.addEventListener('click',add);

// class Detail{
//   constructor(myName,email,phone){
//     this.myName=myName;
//     this.email=email;
//     this.phone=phone;
  }
}

function add(e){
  e.preventDefault();

  let obj=new Detail(myName.value,email.value,phone.value);
  console.log(obj);
  axios.post('https://crudcrud.com/api/2873c2e1e54d40979e58049755018069/apiPostman',obj).then((res)=>console.log(res)).catch((err)=>console.log(err));

  let list=document.createElement('li');
  list.className=email.value;
  list.appendChild(document.createTextNode(`${name.value}-${email.value}-${phone.value}`));
  let del=document.createElement('button');
  del.appendChild(document.createTextNode('delete'));
  del.className='delete';
  let edit=document.createElement('button');
  edit.appendChild(document.createTextNode('edit'));
  edit.className='edit';
  list.appendChild(edit);
  list.appendChild(del);
  ul.appendChild(list);
  name.value='';
  email.value='';
  phone.value='';
}

ul.addEventListener('click',remove);

function remove(e){
  if(e.target.classList.contains('delete')){
    const list=e.target.parentElement;
    if(confirm('Are u sure?')){
      ul.removeChild(list);
    }
  }
}





const price=document.getElementById('price');
const product=document.getElementById('product');
const category=document.getElementById('category');
const submit=document.getElementById('submit');
const list_electronic=document.getElementById('list-electronic');
const list_skincare=document.getElementById('list-skincare');
const list_food=document.getElementById('list-food');
let remove;

// const electronic=document.getElementById('electronic');
// const skincare=document.getElementById('skincare');
// const food=document.getElementById('food');

class Details{
    constructor(price,product,category){
        this.price=price;
        this.product=product;
        this.category=category;
    }
}

function showOutput(obj){
    const list=document.createElement('li');
    list.appendChild(document.createTextNode(`${obj.price}-${obj.product}-${obj.category}`));
    remove=document.createElement('button');
    remove.className='delete';
    remove.appendChild(document.createTextNode('Delete Item'));
    list.appendChild(remove);
    list.className=obj.product;
    console.log(obj.category);
    if(obj.category=='electronic'){
        list_electronic.appendChild(list);
    }else if(obj.category=='skincare'){
        list_skincare.appendChild(list);
    }else if(obj.category=='food'){
        list_food.appendChild(list);
    }
}

submit.addEventListener('click',add);

function add(e){
    e.preventDefault();
    let obj=new Details(price.value,product.value,category.value);
    showOutput(obj);
    axios.post('https://crudcrud.com/api/e2ced811b7504ebd80871c1d42bf5b4f/sellingItems',obj);
}

list_electronic.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        const li=e.target.parentElement;
        removeServer(li.className);
        list_electronic.removeChild(li);
    }
})

list_food.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        const li=e.target.parentElement;
        removeServer(li.className);
        list_food.removeChild(li);
    }
})

list_skincare.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        const li=e.target.parentElement;
        removeServer(li.className);
        list_skincare.removeChild(li);
    }
})

window.addEventListener('DOMContentLoaded',(e)=>{
    axios.get('https://crudcrud.com/api/e2ced811b7504ebd80871c1d42bf5b4f/sellingItems')
    .then((response)=>{
        for(let i=0;i<response.data.length;i++){
            showOutput(response.data[i]);
        }
    })
})

function removeServer(productName){
    let id;
    axios.get('https://crudcrud.com/api/e2ced811b7504ebd80871c1d42bf5b4f/sellingItems').then((response)=>{
        for(let i=0;i<response.data.length;i++){
            if(response.data[i].product==productName){
                id=response.data[i]._id;
                break;
            }
        }
        axios.delete('https://crudcrud.com/api/e2ced811b7504ebd80871c1d42bf5b4f/sellingItems/'+id).then((res)=>console.log(res))
        .catch(err=>console.log(err));
    }).catch(err=>console.log(err));
}




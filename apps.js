const submitBtn=document.getElementById('submitBtn');
submitBtn.addEventListener('click',addEffect);
const ul=document.getElementById('items'); 
const btn=document.getElementsByClassName('btn-sm');


function addEffect(e){
    e.preventDefault();
    let input=document.getElementById('item').value;
    const li=document.createElement('li');
    console.log(input);
    li.appendChild(document.createTextNode(input));
    li.className='list-group-item';
    ul.appendChild(li);

    const newBtn=document.createElement('button');
    newBtn.className='btn btn-danger btn-sm float-right delete';
    newBtn.appendChild(document.createTextNode('X'));
    li.appendChild(newBtn);

    
}


ul.addEventListener('click',removeItems)

function removeItems(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            const li=e.target.parentElement;
            ul.removeChild(li);
        }
    }
}

const filter=document.getElementById('filter');
filter.addEventListener('keyup',match);

function match(e){
    let text=e.target.value.toLowerCase();
    console.log(text);
    let items=ul.getElementsByTagName('li');
    // console.log(items);
    Array.from(items).forEach(function(item){
        
        if(item.firstChild.textContent.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    })
}

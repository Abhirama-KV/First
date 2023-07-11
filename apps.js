const items=document.getElementsByClassName('list-group-item');
console.log(items)
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}

const li3=document.getElementsByClassName('list-group-item');
li3[2].style.backgroundColor='green';

const l5=document.getElementsByClassName('diff-class')[0];
l5.style.color='white';
const list=document.getElementsByTagName('li');
list[4].style.background='grey';





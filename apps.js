const h2=document.querySelector('.title')

h2.parentElement.style.color='blue'

const header=document.querySelector('.container')
console.log(header.childNodes[0])
header.children[0].style.color='red'
console.log(header.firstElementChild)
console.log(header.nextSibling)
console.log(header.nextElementSibling)

const div1=document.createElement('div');
const text=document.createTextNode('Hello World');
div1.appendChild(text);
const main=document.querySelector('#main')
main.appendChild(div1);
div1.setAttribute('title','hello')
div1.className='div1'
div1.id='divId'
console.log(div1)


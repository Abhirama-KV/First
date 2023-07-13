const myForm=document.getElementById('submit');
const nameInput=document.getElementById('name');
const emailInput=document.getElementById('email');


myForm.addEventListener('click', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');
    const userList=document.getElementById('users');
    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);
    
}
localStorage.setItem('name',nameInput.value);
    console.log(localStorage.getItem('name'))
    localStorage.setItem('email',emailInput.value);

  }

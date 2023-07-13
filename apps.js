let details={
    'name':'Abhi',
    'age':78
}
let obj_serialze=JSON.stringify(details);
localStorage.setItem('details',obj_serialze);

let obj_deserialize=JSON.parse(localStorage.getItem('details'));
console.log(obj_deserialize);

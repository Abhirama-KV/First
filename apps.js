// let posts=[
  {title:'post one'},
  {title:'post two'}
]

function createPost(post){
  return new Promise((resolve,request)=>{
    posts.push(post);
    updateLastUserActivity();
    resolve();
  })
}

function updateLastUserActivity(){
  return new Promise((resolve,request)=>{
    let newDate=new Date().getTime();
    resolve(newDate);
  })
}
Promise.all([createPost({title:'post three'},{title:'post four'}),updateLastUserActivity()]).then(([value1,value2])=>{
  console.log(value2);
})

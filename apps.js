console.log('Person1 ticket');
console.log('person2 ticket');

// promiseWifeBringsTicket=new Promise((resolve,request)=>{
//   setTimeout(()=>{
//     console.log('Bought ticket');
//     resolve('ticket');
//   },3000)
// })

// console.log('person4 ticket');
// console.log('person5 ticket');

// let getPopcorn=promiseWifeBringsTicket.then((t)=>{
//   console.log('wife: I bought ticket');
//   console.log('husband: lets go in');
//   console.log('wife: no I am hungry');
//   return new Promise((resolve,request)=>resolve(`${t} popcorn`));
// })

// let getButter=getPopcorn.then((t)=>{
//   console.log('husband: I got popcorn');
//   console.log('husband: lets go in');
//   console.log('wife: no I need butter');
//   return new Promise((resolve,request)=>resolve(`${t} butter`))
// })

// let softDrink=getButter.then((t)=>{
//     console.log('husband: while I bring butter will u buy soft drink?');
//     console.log('OK');
//   return new Promise((resolve,reject)=>resolve(`${t} softdrink`))
// });

// softDrink.then((t)=>console.log(t));

// ASYNC AWAIT
let movie=async ()=> {

  const promiseWifeBringsTicket=new Promise((resolve,request)=>{
  setTimeout(()=>{
    resolve('ticket');
  },3000)
})

  const getPopcorn=new Promise((resolve,request)=>resolve(`poppcorn`))

  const getbutter=new Promise((resolve,request)=>resolve('butter'));

  const getSoftDrink=new Promise((resolve,request)=>resolve('softdrink'));

  const getCandy=new Promise((resolve,rejecct)=>resolve('candy'));
    // let ticket=await promiseWifeBringsTicket;

    // console.log(`wife: I bought ${ticket}`);
    // console.log('husband: lets go in');
    // console.log('wife: no I am hungry');

    // let popcorn=await getPopcorn;
    
    // console.log(`husband: I got ${popcorn}`);
    // console.log('husband: lets go in');
    // console.log('wife: no I need butter');

  // let butter=await getbutter; 

  //   console.log(`husband: I got ${butter}`);
  // console.log('husband: lets go in');
  // console.log('wife: I am excited');

  // let softDrink=await getSoftDrink;

  // console.log(`husband: while I bring butter will u buy ${softDrink}?`);
  //     console.log('OK');

  let [popcorn,butter,softDrink,candy]=await Promise.all([getPopcorn,getCandy,getSoftDrink,getSoftDrink]);

  console.log(`got ${popcorn} ${butter} ${candy} ${softDrink}`);
    return ;
};

movie().then((m)=>console.log('person 3 bought ticket'))

console.log('person4 ticket');
console.log('person5 ticket');

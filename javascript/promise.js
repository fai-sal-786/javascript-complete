// const promiseOne  =  new Promise(function(resolve, reject) {
//     //Do AN Async task
//     // DB CALLS CRYPTOGRAPHY, NETWORK
//     setTimeout(function(){
//       console.log('ASNC TASK IS COMPLETED');
//       resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log('Promise consumed');

// })
//<----------------------------------------------------------------------------->

// new Promise(function(resolve, reject){
//    setTimeout(function(){
//     console.log("ASYNC TASK 2");
//     resolve()
//    }, 1000)
// }).then(function(){
//   console.log("ASYNC TO RESOLVE");
// })

// const promiseThree = new Promise(function(resolve, reject){
//    setTimeout(function(){
//     resolve({username: 'chai', email: "chai@example.com"        
//     })
//    },1000)
// })

// promiseThree.then(function(user){
//    console.log(user);
// })
//<-------------------------------------------------------------->
// const promiseFour = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     let error = false;
//     if(!error){
//        resolve({username: "faisal", password: "123"})
//     }else{
//         reject('Error: something went wrong');
//     }
//   },1000)
// })

// promiseFour.then((user)=>{
//   console.log('user');
//   return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((ERROR)=>{
//     console.log(ERROR);
// }).finally(()=> console.log("The promise is either resolved or rejected"));

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//            resolve({username: "javascript", password: "123"})
//         }else{
//             reject('Error: JS went wrong');
//         }
//       },1000)
// });
//  //OPTION  A:
// async function consumePromiseFive(){
//   const response = await promiseFive
//   console.log(response);
// }
//  // optionB:

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     } catch(error){
//       console.log(error);
//     }
// }
//     consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         //console.log(response);
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E: ", error);
//     }
   
// }
// getAllUsers()
 
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// }).catch((error)=> console.log(error))



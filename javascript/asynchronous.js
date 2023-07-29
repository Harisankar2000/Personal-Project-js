// console.log('login')
// setTimeout( ()=>{
//     console.log('inside set timeout')

// },2000)
// console.log('logout')

//ASYNC AND AWAIT
//An async function is always return a promise.
// const isAdult=(age)=>{
//     return new Promise((resolve,reject)=>{
//         if(age > 18){
//             resolve("he is eligible to vote") 
//         }else{
//             reject("he is not eligible to vote") 
//         }
        
//     })
// }

// const foo=async ()=>{
//     try {
//     const res= await isAdult(5)
//     console.log("result",res)
//     } catch (error) {
//         console.log(error)   
//     }
// }
// foo();

// const promise= new Promise((resolve,reject)=>{
//     console.log('inside promise')
//     setTimeout(()=>{
//         resolve('promise defined')
//     },1000)
// })
// const foo=async ()=>{
//     console.log('async await defined')
//     const res= await promise;
//     console.log(res)
// }
// foo();

//Real world uses

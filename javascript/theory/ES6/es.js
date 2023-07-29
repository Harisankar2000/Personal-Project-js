 //VAR is a function scoped
//  function register(){
//     var username='harish'
//     var password= 'secret'
     
//  }
//  console.log(username)

 //problem 2 with var: its giving output after declaring outside of function. it should be blocked in that function
//  var age=18;
//  if(age>=18){
//     var voter="eligible"
//  }
//  console.log(voter)

 //problem:3
 //var is over-rite the second variable name, if we used let or const then its giving ,
 //thhis value is already defined.So tjhis is bad practice
// var username='hari'
// var username= 'shankar'
// console.log(username)

//LET AND CONST WHICH IS BETTER?
// const product= 'laptop'
// product= 'mobile'
// console.log(product) //its giving error,if we use const then his value never re asigned or changed.
// let product= 'laptop'
// product= 'mobile'
// console.log(product) //it will givw output.let support re assgined value.
//So const is Best

//Hoisting
// console.log(age)
// age=22;
//this is ot giving error its giving undefined.but is not a good practice to console before declaring any values
// let age= 22;
// console.log(age) //this is good

//Template Literals
// const fname= 'hari'
// const lnmae= 'shankar'
// //console.log(fname + '' + lnmae) //concatination
// console.log(`${fname} ${lnmae}`) //string literal

//Enhanced object literals




//object destructuring
// const user = {
//     fname:'harisankar',
//     age:22
// }
// const {fname ,age}= user; //destructuring
//console.log(fullname)
//console.log(user)

//Array destructuring
//const data= ["hari",22,'backened developer']
//console.log(data[2])
// const [name,age,profession]=data; //destructuring
// console.log(age)
// console.log(name)

//DEFAULT PARAMETERS
//old method
// const register= (name,pass,profile)=>{
//     const img= profile || "img.png"
//     console.log(name,pass,img)

// }
// register('hari','secret')
//ES6 method
// const register= (name,pass,profile='photos.jpg')=>{
//     console.log(name,pass,profile)
// }
// register('hari','secret')

//SPREAD... OPERATOR
// const myDetails= ['harish',22,'developer']
// newDEtails= [...myDetails,'sahoo']
// console.log(newDEtails)

// const user= {
//     name:'harish',
//     age:22,
//     //designation:'backend'
// }
// const newUser= {...user,designation:'backend',age:23,}
// console.log(newUser)

//REST... OPERATOR
// const addNum= (...items)=>{
//     console.log(items)
// }
// addNum(2,4,5,7,4)
//For...Of loop
// const person= {
//     name:'hari',
//     age:22,
//     city:'nayagarh'
// }
// for (const details of Object.entries(person) ){ //Important Person is not iterable so we have used object.entries() method
//     console.log(details)
// }
//2nd method
// for (const [key,value] of Object.entries(person)){ ///destructuring
//     console.log(`${key} ${value}` )

// }
//PROMISES
//Old method
// const login=(cb)=>{  //callback
//     setTimeout(()=>{
//         console.log('login')
//         cb()
//     },0)

// }
// login( ()=>{
//     console.log('redirected....')
// })
//PROMISE METHOD(UPDATED)
// const login=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('login')
//             resolve()
//         },0)
// })
// }
// login().then( ()=>{
//     console.log('redirected...')
// }
// ).catch(error=>{
//     console.log(error)
// })
//MAP METHOD
// const website= new Map()
// website.set("dev","www.dev.com")
// website.set("product","www.product.com")
// console.log(website.get('dev'))

//ES6 CLASSES
// class Person {
//     name;
//     constructor(name){
//         this.name=name
//     }
//     greet(){
//         console.log('good evening')

//     }

// }
// class goodPerson extends Person{
//     attitude='good' //imp
//     greet(){
//         console.log('good night')
//     }

// }
// const hari= new goodPerson('harish')
// console.log(hari)

//ES6 MODULES
const login=()=>{
    console.log("login successful");
}
export default login;
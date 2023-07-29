//ARRAY DESTRUCTURING

// const studentName=()=>{
//     return ["hari","raj","ankita"]
// }
// let [x,y,z]= studentName()
// console.log(x,y,z) 
//Before ES6
const student= ["hari","raj","ankita"]
const age = [23,24,25]
// const X= student[0]
// console.log(X)
//After ES6
//const [X,Y,Z] = student   //destructure
// console.log(X);
// console.log(Z);
//const newStudent = [...student,...age]
//OR
// const newStudent1= student.concat(age)
// console.log(newStudent)
// console.log(newStudent1)
//Next Example
//const myLang = ["php","javascript","java","c++"]
//const [x,y,z] = myLang
//const [x,,,l] = myLang
// const [...rest]= myLang
// console.log(rest)

//OBJECT DESTRUCTURING
const name1 ={
    id:25,
    name:"hari",
    age: 23,
    address:{
        city:"mumbai",
        state:"odisha"
    }
}
//Before ES6
const id =name1.id
console.log(id)
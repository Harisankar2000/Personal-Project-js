// const arr=["hi","hello",'okay']
// console.log(arr)
// const car= new Array('maruti','tata','bmw')
// console.log(car.length)
// console.log(car.sort())
//console.log(car[1])
// car.shift()
// console.log(car)
// for(let i=0;i<5;i++){
//     console.log("hii")

// }
// const actors =[
//     {name:"ayush", payment:1000},
//     {name:"kartik", payment:1500},
//     {name:"rakshit", payment:2000},
//     {name:"salman", payment:2500},
// ]
//for..each loop
// actors.forEach((actor)=>{
//     actor.payment -= 500

// })
//for....loop
// for(let i=0 ;i<actors.length;i++){
//     //actors[i].payment -=  500
//     actors[i].payment= actors[i].payment- 500
// }
//for...of...loop
// for( let data of actors ){
//     data.payment -= 500

// }

// console.log(actors,'hii')

//#Filter...Array
// const students = [
//     { name: 'student1', mark: 45 },
//     { name: 'student2', mark: 25 },
//     { name: 'student3', mark: 55 },
//     { name: 'student4', mark: 27 },
// ]
// const failedStudents = students.filter((student) => {
//     if (student.mark < 30) {
//         return true
//     } 
//     return false
    
// })
// console.log(failedStudents)

//#Map...Array
// const users= [
//     {fname:'Harisankar',lname:'Sahoo'},
//     {fname:'Rajeeb',lname:'Sahoo'},
//     {fname:'Rakshit',lname:'Sahoo'},
//     {fname:'Hchandan',lname:'Pradhan'},
// ]
// const usersFname= users.map( (data)=>{
//     return{
//         fullname:`${data.fname} ${data.lname}`
//     }
// })
// console.log(usersFname)
//#Reduce  Method
// const movies= [
//     {name:"Bhediya",Budget:50},
//     {name:"Drishyam",Budget:30},
//     {name:"BBrahmastra",Budget:150},
// ]
// let total=0
// const totalBudget= movies.forEach( (movie)=>{
//     total += movie.Budget

// }
// )
// console.log(total)
// const totalBudget= movies.reduce((acc,total)=>{
//     acc +=total.Budget
//     return acc
// },0)
// console.log(totalBudget)
//#include()
// const admin = [4,6,9]
// const users= {
//     name:"hi",
//     id:3
// }
// console.log(admin.includes(users.id))
//# Find method
// const users= [
//     { name:'abc',id:1},
//     { name:'lmn',id:2},
//     { name:'def',id:2},
//     { name:'abc',id:4}
// ]
// const userDetails= users.find( (user)=>{
//     if(user.id === 2){
//         return true
//     }
//     return false

// }
// )
// console.log(userDetails)
//#Slice method(remove next element)
const names = ['hari','sankar','rajeeb','kumar']
//sankar and rajeeb will removed next...
names.splice(1,2)
console.log(names)

// const person= require('./person')
// console.log(person.name.toUpperCase())
const person={
    name:"harisankar",
    age:23,
    person1:{
        name:"raju",
        age:[40,41,42,43]
    }
}
let x;
for(let i in person.person1){
    x+= person.person1[i].name
    for(let j in person.person1[i].age){
        x+= person.person1[i].age[j]
        console.log(x.person1[i].age[j])
    }
}
// console.log(person["person1"]["age"])
// console.log(person.person1.age)
// console.log(person.person1["age"])

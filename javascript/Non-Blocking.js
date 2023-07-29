const fs= require('fs')
let text= fs.readFile('input.txt','utf-8',(err,data)=>{
    console.log(data,"hello")
})
console.log("hii")
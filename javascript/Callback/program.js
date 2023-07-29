// In JavaScript, a callback is a function that is passed as an argument to another function and is executed by that function when a certain event or condition occurs.

const square = (num,callback)=>{
    let result = num*num;
    callback(result)

}

const displayResult = (result)=>{
    console.log(result,"this is the result")

}
square(9,displayResult)

// In this example, the square function takes two arguments: a number and a callback function. The square function calculates the square of the number and passes the result to the callback function.

// The displayResult function is the callback function that is passed as the second argument to the square function. When the square function is executed, it passes the result to the displayResult function, which then logs the result to the console.
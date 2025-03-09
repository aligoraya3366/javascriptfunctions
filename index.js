// username, profession, age these are parameters
function introduceMe (username, profession, age){
    console.log(`Hi`)
    console.log(`My name is ${username}`)
    console.log(`I am ${profession}`)
    console.log(`I am ${age} old`)
}
// "ali", "webdeveloper", 28 these are arguments
introduceMe("ali", "webdeveloper", 28)
introduceMe("talha", "angulardeveloper", 25)
introduceMe("hussain", "MERNSTACKdeveloper",26 )
introduceMe()

// Concept of return
function add(a, b) {
    return a + b; // The function returns the sum of a and b
}

let sum = add(5, 3); // sum will be 8

console.log(sum); // Outputs: 8
 
function multiply (a,b){
    return a*b
}
let product = multiply (5,6);
console.log(product);

function divide (x,y){
    return (x/y)
}
let division = divide (25,5)
console.log(division);
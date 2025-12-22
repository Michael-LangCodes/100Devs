//Improved Hello
// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}
// TODO: ask user for first and last name
let firstName = prompt("Enter First Name:");
let lastName = prompt("Enter Last Name:");
console.log(firstName)
console.log(lastName)
// TODO: call sayHello() and show its result
console.log(sayHello(firstName,lastName));

//Number Squaring
// Square the given number x
function square1(x) {
  return x*x;
}

// Square the given number x
const square2 = x =>{return x*x} // TODO: complete the function code

for(let i = 0; i<=10; i++){
    console.log(square1(i));
}

//Minimum of two Numbers
// TODO: write the min() function
function min(num1, num2){
    if (num1>num2){
        return num2
    } else if (num1<num2) {
        return num1
    } else if (num1 === num2){
        return num1
    } else{
        return "invalid input"
    }
}

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1

//Calculator 
// TODO: complete program
function calculate(num1, operator, num2){
    switch(operator){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default: 
            return "Invalid"
    }
}

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity

//Circumference and Area of a Circle
let radius = prompt("Enter Radius of Circle");

function areaCalc(radius){
    return Math.PI*radius**2
}

function circumferenceCalc(radius){
    return 2*Math.PI*radius
}

console.log(areaCalc(radius))
console.log(circumferenceCalc(radius))
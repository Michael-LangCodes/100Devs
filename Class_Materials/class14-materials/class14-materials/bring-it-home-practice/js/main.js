// *Variables*
// Create a variable and console log the value
const variable = 10
console.log(variable)
// Create a variable, add 10 to it, and alert the value
let newVariable = 10
newVariable = newVariable+10
alert(newVariable)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNumbers(num1, num2, num3, num4){
    alert(num1-num2-num3-num4)
}
subtractFourNumbers(10,2,4,6)
// Create a function that divides one number by another and returns the remainder
function divideRemainder(num1, num2){
    return (num1%num2)
}
console.log(divideRemainder(3,2))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function sumTwoNumbersGreaterThan50Check(num1, num2){
    const checkNum = num1 + num2;
    if (checkNum > 50){
        alert("Jumanji")
    }
}
sumTwoNumbersGreaterThan50Check(50,1)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNumber(num1, num2, num3){
    const checkNum = num1*num2*num3;
    const checkDiv = checkNum%3;
    if (checkDiv === 0){
        alert("ZEBRA")
    }
}

multiplyThreeNumber(2,1,1)
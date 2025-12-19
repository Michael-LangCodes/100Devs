// *Variables*
// Create a variable and console log the value
let value = 15
console.log(value)
// Create a variable, add 10 to it, and alert the value
let new_value = 10
new_value +=10
alert(new_value)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNumbersAlert(n1,n2,n3,n4){
    alert(n1-n2-n3-n4)
}
subtractFourNumbersAlert(6,3,2,1)
// Create a function that divides one number by another and returns the remainder
function divideReturnRemainder(n1,n2){
    return(n1%n2)
}
console.log(divideReturnRemainder(3,2))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function sumTwoNumbersJumanjiCheck(n1,n2){
    const summation = n1 + n2
    if (summation > 50){
        alert('Jumanji')
    }
}
sumTwoNumbersJumanjiCheck(50,1)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeModulusByThree(n1,n2,n3){
    const product = n1*n2*n3
    const remain = product%3
    if (remain == 0){
        alert("ZEBRA")
    }
}
multiplyThreeModulusByThree(3,3,3)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopFunction(word,num){
    let i = 0
    while(i<num){
        console.log(word)
        i++
    }
}
loopFunction('this',5)
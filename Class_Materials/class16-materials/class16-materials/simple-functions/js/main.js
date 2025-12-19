//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtractTwoNumbers(num1,num2){
    alert(num1-num2)
}
subtractTwoNumbers(5,3)
//create a function that divides three numbers and console logs the quotient
function divideThreeNumbers(num1,num2,num3){
    console.log(num1/num2/num3)
}
divideThreeNumbers(6,3,2)
//create a function that multiplys three numbers and returns the product
function multiplyThreeNumbers(num1,num2,num3){
    console.log(num1*num2*num3)
}
multiplyThreeNumbers(4,3,2)
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function sumTwoModulus(num1,num2,num3){
    return ((num1+num2)%num3)
}
console.log(sumTwoModulus(2,2,3))
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function fourNumbers(num1,num2,num3,num4){
    const multiple = num1*num2
    if (multiple>100){
        console.log(multiple+num3+num4)
    }else if(multiple<100){
        console.log(multiple-(num3-num4))
    }else{
        alert((num1*num2*num3)%num4)
    }
}
fourNumbers(2,20,5,10)
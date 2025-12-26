// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let newt = true;
alert(newt);

// Declare a variable, reassign it to your favorite color, and console log the value
let color;
color = 'blue';
console.log(color);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function fourNumbersSum(num1, num2 , num3, num4){
    return ((num1+num2+num3)/num4)
}
console.log(fourNumbersSum(1, 2, 3, 2));
// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function twoNumbersPower(num1, num2){
    console.log(num1**num2);
}
twoNumbersPower(2,3);
// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function boolString(bool, input){
    if (bool){
        alert(input);
    }else{
        console.log(input);
    }
}
boolString(true, 'dog');
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function fizzBuzz(number){
    for(let i = 1; i<= number; i++){
        let div3 = i%3;
        let div5 = i%5;
        let output_val = i;
        if (div3 === 0 && div5 === 0){
            output_val = 'fizzbuzz';
        }else if (div3 === 0){
            output_val = 'fizz';
        }else if (div5 === 0){
            output_val = 'buzz';
        }
        console.log(output_val);
    }
}
fizzBuzz(15);
//Define a function
function addNums(num1 = 1, num2 = 1){
    return num1+num2
}

//Call the function
console.log(addNums(5,4));

//Default Call
console.log(addNums());

//Pointer expression
const subNums = (num1 = 1, num2 = 1) => num1 - num2;

console.log(subNums(5,7));
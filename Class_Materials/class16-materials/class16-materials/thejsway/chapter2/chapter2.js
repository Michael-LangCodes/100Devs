//Improved Hello
let names = prompt("Enter First and Last Name: ");
console.log(names);

//Final Value Prediction
let a = 2; //2
a -= 1; //1
a++; //2
let b = 8; //8
b += 2; //10
const c = a + b * b; //102
const d = a * b + b; //30
const e = a * (b + b); //40
const f = a * b / a; //10
const g = b / a * a; //10
console.log(a, b, c, d, e, f, g); //2, 10, 102, 30, 40, 10, 10

//VAT Calc
let price = prompt('What is the price?');
price = 1.206*price;
console.log(price)

//Temp Conversion
let temp = prompt('Input Temperature:');
temp = temp*(9/5) +32;
console.log(temp);

//Variable Swap
let number1 = 5;
let number2 = 3;

number1 = number2;
number2 = 5;

console.log(number1); // Should show 3
console.log(number2); // Should show 5

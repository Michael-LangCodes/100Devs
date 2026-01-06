// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food;
food = 'hamburger';
alert(food);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let second = 'yes';
alert(second[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divideTwoMultiplyLast(n1, n2, n3){
    alert((n1/n2)*n3);
}
divideTwoMultiplyLast(3,2,6);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(num){
    console.log(Math.cbrt(num).toFixed(4));
}
cubeRoot(9);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function monthTime(month){
    let monthLowerCase = month.toLowerCase()
    if(monthLowerCase === 'june' || monthLowerCase === 'july' || monthLowerCase === 'august'){
        alert('YAY');
    }else{
        alert('Booo')
    }
}
monthTime('June');

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function numExceptFive(num){
    for(let i = 1; i <= num; i++){
        if(i%5 !== 0){
            console.log(i)
        }
    }
}

numExceptFive(18);
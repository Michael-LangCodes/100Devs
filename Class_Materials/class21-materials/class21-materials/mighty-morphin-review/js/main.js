// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday;
favHoliday = 'CHRISTMAS';
console.log(favHoliday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = 'Alien Rangers';
alert(str.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subtractFromHundred(n1,n2,n3,n4,n5){
    alert(Math.abs(100-n1-n2-n3-n4-n5));
}
subtractFromHundred(1,2,3,4,5);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowestAndHighest(n1,n2,n3){
    console.log("Highest" + Math.max(n1,n2,n3));
    console.log("Lowest" + Math.min(n1,n2,n3));
}
lowestAndHighest(1,2,3);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function coinFlip(){
    let val = Math.round(Math.random());
    if (val === 1){
        console.log('Heads');
    }else if (val === 0){
        console.log('Tails');
    }else{
        console.log(val);
    }
}
coinFlip();
console.log('BREAK');

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipCoinNTimes(n){
    for (let i = 1; i<=n; i++){
        coinFlip();
    }
}
flipCoinNTimes(15);
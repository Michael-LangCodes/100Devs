// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function arrayCheck(input){
    if (input[0] < input[input.length-1]){
        alert("Hi");
    }else if (input[0] < input[input.length-1]){
        alert("Hi");
    }else if (input[0] === input[input.length-1]){
        alert('We Close In An Hour');
    }
}
arrayInput = [1,23,4,56,7];
arrayCheck(arrayInput);
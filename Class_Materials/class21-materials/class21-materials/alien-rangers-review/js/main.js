//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['simpsons', 'family guy', 'medical'];
tvShows.forEach(show => console.log(show));

//Create and array of numbers
let numArr = [1,4,5,7,8,12,4,5]
//Return a new array of numbers that includes every even number from the previous Arrays
let onlyEven = arr => arr.filter(num => num%2 === 0 )
console.log(onlyEven(numArr));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumSecondLowHigh(arr){
    let sorted = arr.sort((a,b)=> a-b);
    alert(sorted[1] + sorted[sorted.length-2]);
}

sumSecondLowHigh(numArr);
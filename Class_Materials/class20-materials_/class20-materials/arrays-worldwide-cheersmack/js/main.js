//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
function arrayToNum(num){
    let output = [];
    for(let i = 1; i<=num;i++){
        output.push(i);
    }
    console.log(output);
}
arrayToNum(5);
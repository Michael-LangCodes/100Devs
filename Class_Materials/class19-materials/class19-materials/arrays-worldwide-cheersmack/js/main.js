//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
function arrayToNum(num){
    let list = [];
    for(let i = 0; i < num; i++){
        list[i] = i+1;
    }
    console.log(list)
}
arrayToNum(15);
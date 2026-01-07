//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function newArray(arr){
    let evens = [];
    arr.forEach(n=> {
        if (n%2===0){
            evens.push(n);
        }
    })
    return evens
}

console.log(newArray([1,2,4,6,4,5,7,5,74,7,10]));
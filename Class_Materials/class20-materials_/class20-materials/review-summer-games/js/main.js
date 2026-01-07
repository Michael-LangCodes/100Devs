//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multiplyArray(arr){
    let total = 1;
    arr.forEach(x => total *= x)
    alert(total);
}

arrayInput = [1,2,3,4,5,6];
multiplyArray(arrayInput);
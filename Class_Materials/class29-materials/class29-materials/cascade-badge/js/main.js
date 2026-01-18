//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
function reverseArray(arr){
    // let revArr  = [];
    // arr.forEach(element => {
    //    revArr.unshift(element) 
    // });
    console.log(arr.reverse())
}
testArray = ['This', 'is', 'the', 'test']
reverseArray(testArray);

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function compareSquareToCube(a,b){
    const aTotal = a.reduce((accumulator,currentValue) => accumulator + currentValue**2, 0 
    )
    const bTotal = b.reduce((accumulator,currentValue) => accumulator + currentValue**3, 0 
    )
    if(aTotal>bTotal){
        return true;
    }else {
        return false;
    }
}
array1 = [1,2,3,4,5,6];
array2 = [7,8,9];
console.log(compareSquareToCube(array1,array2));

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function arrayIndexMultiple(arr){
    const newArr = arr.filter((num,i) => num % i === 0)
    return newArr
}
test1 = [22, -6, 32, 82, 9, 25]
test2 = [68, -1, 1, -7, 10, 10]
console.log(arrayIndexMultiple(test1));
console.log(arrayIndexMultiple(test2));

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function sumArray(arr){
    const sum = arr.reduce((accumulator,currentValue) => accumulator + Number(currentValue)
    )
    return sum;
}

test3 = [22, '6', '7', 4];
console.log(sumArray(test3));
//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numbers = [1,4,6,3,6,2,4];
console.log(numbers.reduce((total, x) => total+=x, 0));
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function numsSquared(arr){
    return arr.map((x,i)=> x**2);
}
console.log(numsSquared(numbers));

//Create a function that takes string
//Print the reverse of that string to the console
function revString(str){
    let revStr ='';
    for (let i = str.length-1; i>=0; i--){
        revStr += str[i];
    }
    return revStr
}
example = 'this a trial';
console.log(revString(example));
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindromeCheck(str){
    revStr = revString(str);
    if(revStr === str){
        console.log('This is a palindrome')
    }else{
        console.log('Not a palindrome');
    }
}
let pal = 'thissiht';
palindromeCheck(pal);
palindromeCheck(example)
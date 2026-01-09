//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1, 2, 4, 5];
let sum = 0;
arr.forEach(x=> sum += x);
alert(sum);

let newsum = arr.reduce((acc, c) => acc+c, 0)
alert(newsum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function newArr(Arr){
    let output = Arr.map(x=>x^2);
    return output;
}
let value = newArr(arr);
console.log(value);

//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(inputStr){
    /*let newStr = '';
    for(let i = 0; i < inputStr.length; i++){
        newStr+=(inputStr[i]);
    }*/
    let newString = "";
    for (let i = inputStr.length - 1; i >= 0; i--) {
        newString += inputStr[i];
    }
    return(newString);
}

console.log(reverseString('thisarap'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function checkPalindrome(word){
    let rev = reverseString(word);
    if (rev === word){
        console.log('Is a Palindrome')
    }else {
        console.log('not a palindrome')
    }
}

checkPalindrome('thissiht');
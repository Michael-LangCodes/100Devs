//Carousel
let numTurns = prompt("Enter # of Turns:");
for (let i = 1; i<=numTurns; i++){
    console.log(i)
}

//Parity
let numInput = Number(prompt("Number to Start"));
for (let i = numInput; i <= numInput+10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}

//Input Validation
let numCheck = prompt("Enter a Number:");
while(numCheck > 50){
    numCheck = prompt("Enter a Number:");
}
console.log("This is the Number: " + numCheck)

//Multiplication Table
let multiplicationNumber = prompt("Enter a Multiplication Number");
if (multiplicationNumber>2 || multiplicationNumber<9){
    for (i=1; i<13; i++){
        mathOutput = i*multiplicationNumber;
        console.log(`${multiplicationNumber}*${i} = ${mathOutput}`)
    }
}

//Neither yes nor no
let userInput = "default";
while(userInput != 'yes' && userInput != 'no'){
    console.log(userInput)
    userInput = prompt('Enter Text Here:').toLowerCase();
}

//FizzBuzz
for (i=1; i<=100; i++){
    let analyzeValue3 = i%3;
    let analyzeValue5 = i%5;
    let outputValue = i;
    if(analyzeValue3 === 0 && analyzeValue5 === 0){
        outputValue = "FizzBuzz"
    }else if (analyzeValue3 === 0){
        outputValue = "Fizz"
    }else if (analyzeValue5 === 0){
        outputValue = "Buzz"
    }
    console.log(outputValue)
}
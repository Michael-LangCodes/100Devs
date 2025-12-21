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
while(numCheck < 100){
    numCheck = prompt("Enter a Number:");
}
console.log("This is the Number: " + numCheck)
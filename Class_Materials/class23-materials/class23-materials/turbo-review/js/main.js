// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentce = 'This is the sentance that I am typing?';
if (sentce.endsWith('?')){
    alert('This is a question');
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let multwords = 'this is the jr. dev of the group';
console.log(multwords.replaceAll('jr. dev', 'software engineer'))
console.log(multwords)
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let rand = Math.random();
    let output
    if(rand <0.33){
        output = 'rock';
    }else if(rand<0.66){
        output = 'paper';
    }else{
        output = 'scissors';
    }
    return output
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function gamePlay(input){
    let bot = rockPaperScissors();
    if (bot === 'rock' && input === 'scissors' || bot === 'scissors' && input === 'paper' || bot === 'paper' && input === 'rock'){
        console.log('You Lose');
    }else if (input === 'rock' && bot === 'scissors' || input === 'scissors' && bot === 'paper' || input === 'paper' && bot === 'rock'){
        console.log('You Win')
    }else if (bot === input){
        console.log('Tie');
        gamePlay(input);
    }else {
        console.log('Invalid Inputs');
    }
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function multiplePlays(arr){
    for(let i = 0; i <= arr.length-1; i++){
        gamePlay(arr[i]);
    }
}
let choices = ['rock', 'scissors', 'paper']
multiplePlays(choices);
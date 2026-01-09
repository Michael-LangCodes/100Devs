// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = '     water        ';
console.log(favDrink);
favDrink = favDrink.trim();

console.log(favDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multipleWords = 'lets apple some food';
//let wordsArr = multipleWords.split(' ');
//wordsArr.forEach(x => x === 'apple' ? console.log('Contains Apple'): console.log('No Apples'))

if (multipleWords.search('apple') === -1){
    console.log('No Apple');
}else{
    console.log('Contains Apple');
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let output 
    const val = Math.random()
    if (val < 0.33){
        output = 'rock';
    }else if (val < 0.66){
        output = 'paper';
    }else if (val < 1){
        output = 'scissors'
    }else{
        console.log('Not Valid')
    }
    return output;
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function gamePlay(decision){
    let bot = rockPaperScissors();
    if (bot === 'rock' && decision === 'scissors' ||bot === 'paper' && decision === 'rock'||bot === 'scissors' && decision === 'paper'){
        console.log('Bot Won')
    }else if(decision === 'rock' && bot === 'scissors' ||decision === 'paper' && bot === 'rock'||decision === 'scissors' && bot === 'paper') {
        console.log('You Won!!')
    }else if (decision === 'rock' && bot === 'rock' ||decision === 'paper' && bot === 'paper'||decision === 'scissors' && bot === 'scissors'){
        console.log('Tie. RePlay Starting')
        gamePlay(decision)
    }else{
        console.log('Input Invalid')
    }
}

gamePlay('scissors');
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function multipleGames(Arr){
    Arr.forEach(x => gamePlay(x));
}
console.log('Playing Multiple Games Now')
choices = ['scissors', 'rock', 'paper', 'paper'];
multipleGames(choices);
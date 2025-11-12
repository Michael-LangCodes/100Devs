//Conditionals

// if else else if 

const x = 6;
const y = 11;

if(x === 10){
    console.log('X is 10')
}else if(x>10) {
    console.log('x is greater than 10')
} else {
    console.log('X is not 10')
}

// || means OR in JS
if(x > 5 || y > 10){
    console.log('X is more than 5 or y is more than 10')
}

// && means AND in JS
if(x > 5 && y > 10){
    console.log('X is more than 5 and y is more than 10')
}


// ? is the THEN operator
const color = x > 10 ? 'red': 'blue';

console.log(color);

const color_2 = 'green'

switch(color_2){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}
//Following Day
let input_day = prompt('Enter day:').toLowerCase();
if (input_day === 'sunday'){
    console.log('Monday');
}else if(input_day === 'monday'){
    console.log('Tuesday');
}else if(input_day === 'Tuesday'){
    console.log('Wednesday');
}else if(input_day === 'wednesday'){
    console.log('Thursday');
}else if(input_day === 'thursday'){
    console.log('Friday');
}else if(input_day === 'friday'){
    console.log('Saturday');
}else if(input_day === 'saturday'){
    console.log('Sunday');
}else{
    console.log('incorrect input')
}

//Number Comparison
let num1 = Number(prompt("Enter First Number:"));
console.log(num1);
let num2 = Number(prompt("Enter Second Number:"));
console.log(num2);
if (num1 === num2){
    console.log('Numbers are the same')
}else if (num1 > num2){
    console.log('First number is larger than the second number')
}else if (num1 < num2){
    console.log('First number is smaller than the second number')
}else{
    console.log('incorrect inputs')
}

//Final Value Prediction
let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);
//1, 2, 4   => 0, 2, 10
//4, 3, 2   => 4, 3, 2
//2, 4, 0   => 3, 4, 0

//Number of days in a month
let month = Number(prompt('Enter Month Number:'));
if(month == 2){
    console.log("28 Days");
} else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
    console.log("31 Days")
} else if (month === 4 || month === 6 || month === 9 || month === 11){
    console.log("30 Days")
} else {
    console.log('incorrect input')
}

//Following Second
let hour = Number(prompt("Enter hour:"));
let minute = Number(prompt("Enter miunte:"));
let second = Number(prompt("Enter second:"));

if (second != 59){
    second +=1;
    console.log(`${hour}h${minute}m${second}s`);
}else if(minute != 59){
    second = 0;
    minute +=1;
    console.log(`${hour}h${minute}m${second}s`);
}else if(hour != 23){
    second = 0;
    minute = 0;
    hour +=1;
    console.log(`${hour}h${minute}m${second}s`);
}else if(hour === 23){
   second = 0;
    minute = 0;
    hour = 0;
    console.log(`${hour}h${minute}m${second}s (midnight)`); 
}else{
    console.log('incorrect input')
}
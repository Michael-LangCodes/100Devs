//Create a stopwatch object that has four properties and three methods
let stopwatch = {};

stopwatch.currentTime = 12;
stopwatch.brand = 'nike'
stopwatch.color = 'black'
stopwatch.shape = 'round';

stopwatch.tellTime = function(time){
    console.log(stopwatch.currentTime)
}

stopwatch.start = function(){
    console.log('Starting');
}
stopwatch.end = function(){
    console.log('Ending');
}
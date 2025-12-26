//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ['movie1', 'movie2', 'movie3'];
for(let i = 0; i < movies.length;i++){
    document.querySelector('h2').innerText += movies[i];
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [10, 20, 30];
console.log(nums);
nums.forEach((item,i) => {
    nums[i] = item +3;
})
console.log(nums);
//Find the average of all the numbers from question two
let total = 0;
for(let i = 0; i < nums.length; i++){
    total += nums[i];
}
let average = total/(nums.length);
console.log(average);
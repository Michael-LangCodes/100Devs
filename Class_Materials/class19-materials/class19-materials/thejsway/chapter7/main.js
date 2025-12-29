//Musketeers
let musketeers = ['Athos', 'Porthos', 'Aramis'];
for(let i = 0; i<musketeers.length;i++){
    console.log(musketeers[i]);
}
musketeers.unshift("D'Artagnan");
musketeers.forEach(movie =>
    console.log(movie)
);
musketeers.pop();
for (const musky of musketeers){
    console.log(musky);
}

//Summation
const values = [3, 11, 7, 2, 9, 10];
total = 0;
for (let i = 0; i < values.length; i++){
    total += values[i];
}
console.log(total);

//Array Max
const values2 = [3, 11, 7, 2, 9, 10];
let max = 0;
for(let i = 0; i< values2.length; i++){
    if (values2[i]>max){
        max = values2[i];
    }
    console.log(max);
}

//List of Words
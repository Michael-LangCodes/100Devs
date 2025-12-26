// Translate border-left-width to borderleftwidth
function camelize(str){
    let split = str.split('-');
    //console.log(split);
    for(let i=0; i <split.length; i++){
        if(i!==0){
            split[i] = split[i][0].toUpperCase() + split[i].slice(1);
        }
    }
    //console.log(split);
    let output = split.join('');
    console.log(`Camelized Output: ${output}`);
}
camelize("list-style-image");

//Filter Range
function filterRange(arr, a, b){
    let filt = arr.filter(item => (a <= item && item <=b));
    return filt
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)
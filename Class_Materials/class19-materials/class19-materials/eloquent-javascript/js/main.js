//Sum of a Range
function range(start, end){
    let output_array = [];
    if(start > end){
        for(let i = start;i<=end;i++){
            output_array.push(i);
        }
    }else if(start < end){
        for(let i = start; i >= end; i--){
            output_array.push(i);
        }
    }
    return output_array;
}

function sumRange(array){
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        sum += array[i]
    }
}
console.log(range(1,10));
console.log(sumRange(range(1,10)));
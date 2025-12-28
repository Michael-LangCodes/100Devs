//Sum of a Range
function range(start, end, inc=1){
    let output_array = [];
    if(start < end){
        for(let i = start;i<=end;i+=inc){
            output_array.push(i);
        }
    }else if(start > end){
        for(let i = start; i >= end; i-=inc){
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
    return sum;
}
console.log(range(1,12));
console.log(sumRange(range(1,12)));

//Reversal of Array
function reverseArray(input){
    let reverse_array = [];
    for(let i = 0; i<input.length; i++){
        reverse_array.unshift(input[i])
    }
    return reverse_array;
}

function reverseArrayInPlace(array){
    return array.reverse();
}

array = ['A','B','C']
console.log(reverseArray(array));
console.log(array);
console.log(reverseArrayInPlace(array));
console.log(array);

// Lists and Arrays
function arrayToList(array){
    output = {};
    for(let i = 0; i <array.length; i++){
        if(i<array.length-1){
            output.push({value:array[i], rest:{} })
        }else if(i === array.length-1){
            output.push({value:array[i], rest:null })
        }
    }
    return output;
}

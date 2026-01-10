//Hello Object
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Peter';
delete user.name;

console.log(user);

//Check for empty
function isEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true
}
sample = {};
console.log(isEmpty(sample));

//Sum Objects
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let total =0;
for(keys in salaries){
    total += salaries[keys];
}
console.log(total);

//Multiply Numeric by 2
function multiplyNumeric(input){
    for(key in input){
        if (typeof(input[key])==='number'){
            input[key] *= 2;
        }
    }
    console.log(input);
}

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

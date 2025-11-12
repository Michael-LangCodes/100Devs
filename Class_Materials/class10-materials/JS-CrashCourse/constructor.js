//Constructor Function

function Person(firstName,lastName,DOB) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.DOB = new Date(DOB);
}

Person.prototype.getBirthYear = function() {
    return this.DOB.getFullYear();
}

Person.prototype.getFullName = function() {
    return '${this.firstName} ${this.LastName}';
}

//Instatiate the Object
const person1 = new Person('John', 'Doe', '4-3-1980')
const person2 = new Person('Mary', 'Smih', '3-6-1978')



console.log(person1)
console.log(person2.DOB)
console.log(person2.DOB.getFullYear())
console.log(person1.getBirthYear())
console.log(person1.getFullName())
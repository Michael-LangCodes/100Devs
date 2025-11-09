const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music','movies','sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

const { firstName, lastName, address: {city}} = person;

console.log(city);

alert(person)
console.log(person)
console.log(person.firstName,person.lastName);
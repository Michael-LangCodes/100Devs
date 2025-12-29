// Character Generation
// TODO: create the character object here
const aurora = {
    name: 'Aurora',
    health: 150,
    strength: 25,
    xp: 50,

    describe() {
    return `${this.name} has ${this.health} health points, ${this
      .strength} as strength, and has ${this.xp} xp points.`;
  }
};
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

//Modeling a Dog
// TODO: create the dog object here
const dog = {
    name: 'Rocky',
    species: 'little dog',
    size: '25 lbs',
    bark(){
        return `roof roof roof`
    }
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

//Modeling a Circle
const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
    radius: r,
    circumference(){
        return 2*Math.PI*r
    },
    area(){
        return Math.PI*r**2
    }
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

//Modeling a Bank
const account = {
    name: "Alex",
    balance: 0,
    credit(value){
        return this.balance += value
    },
    describe(){
        return `owner: ${this.name}, balance ${this.balance}`
    }
};

console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());
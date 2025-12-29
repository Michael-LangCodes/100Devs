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
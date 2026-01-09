//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function streetFighter(fighterHealth, fighterDamage, fighterAttack){
    this.health = fighterHealth;
    this.damage = fighterDamage;
    this.attack = fighterAttack;
    this.other = fighterOther;
    this.yell = function(){
        alert('YELLLL')
    };
    this.moveLeft = function(){
        alert('Moving Left')
    };
    this.moveRight = function(){
        alert('Moving Right')
    };
}
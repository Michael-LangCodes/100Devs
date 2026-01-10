//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function Skater(trick,jump,speed,emote){
    this.trick = trick;
    this.jump = jump;
    this.speed = speed;
    this.emote = emote;
    this.useEmote = function(){
        console.log(`This is my ${this.emote}`);
    };
    this.useTrick = function(){
        console.log(`Using the ${this.trick}`);
    };
    this.taunt = function(){
        console.log("I'm doing this");
    }
}

let tonyHawk = new Skater('kickflip',4,8,'swag');

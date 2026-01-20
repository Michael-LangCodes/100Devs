//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine{
    constructor(color,size,shape,temp){
        this.color = color,
        this.size = size,
        this.shape = shape,
        this.temp = temp
    }
    displayTemp(){
        console.log(`This is the temp: ${this.temp}`);
    }
    makeCoffee(){
        console.log('Making coffee');
    }
    cleanMachine(){
        console.log('Cleanniiiinnnnggg')
    }
}

let keurig = new EspressoMachine('black','small','rectangular','cold');
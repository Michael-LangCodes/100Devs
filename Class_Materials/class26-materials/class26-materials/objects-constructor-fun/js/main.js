//Create a constructor with 4 properties and 3 methods
function CarConstructor(model,color,doors,wheels){
    this.model = model 
    this.color = color 
    this.doors = doors 
    this.wheels = wheels 
    this.honk = function(){
        console.log('Honking')
    }
    this.drive = function(){
        console.log('Driving')
    }
    this.steer = function(){
        console.log('steering')
    }
}

let redRocket = new CarConstructor('cruze', 'red', '4', '26in')
//Create an a class and extend it - Can be anything you would like it to be! 

class Vehicle{
    constructor(color,model,brand){
        this._color = color
        this._model = model
        this._brand = brand
    }
    get color(){
        return this._color
    }
    get model(){
        return this._model
    }
    get brand(){
        return this._brand
    }
    description(){
        console.log(`It is a ${this._color} ${this._brand} ${this._model}`)
    }
}

class Truck extends Vehicle{
    constructor(color,model,brand,drive){
        super(color,model,brand)
        // super(model)
        // super(brand)
        this._drive = drive
    }
    description(){
        super.description()
        console.log(`It also has ${this._drive} wheel drive`)
    }
}

let tacoma = new Truck('red','tacoma','toyota','4')
tacoma.description()
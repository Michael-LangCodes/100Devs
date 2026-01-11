//Create a pizza object that has four properties and three methods
let pizza ={};
pizza.toppings = ['pepperoni', 'onions'];
pizza.cheese = 'colby-jack';
pizza.crust = 'thin';
pizza.temp = '400F';
pizza.cook = function(){
    console.log(`Cook the pizza at ${pizza.temp}.`);
}
pizza.burnMouth = function(){
    console.log('AHHHH')
}
pizza.frisbee = function(){
    console.log('Throwing');
}

function MakePizza(toppings,cheese,crust,temp){
    this.toppings = toppings;
    this.cheese = cheese;
    this.crust = crust;
    this.temp = temp;
    this.cook = function(){
    console.log(`Cook the pizza at ${pizza.temp}.`);
    };
    this.burn = function(){
    console.log('AHHHH');
    };
    this.frisbee = function(){
        console.log('Throwing');
    };
}
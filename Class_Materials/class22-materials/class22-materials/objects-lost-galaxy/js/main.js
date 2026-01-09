//Create a mouse object that has four properties and three methods
let mice = {
    color: 'white',
    size: 'small',
    noise: 'squeak',
    food: 'carrot',
    talk(){
        alert(noise);
    },
    askForFood(){
        alert(`Can I have ${this.food}`);
    },
    tellColor(){
        alert(`I am a ${this.color} mouse`);
    }
}

let mouse ={};
mouse.brand = 'Logi';
mouse.color = 'black';
mouse.model = 'basic';
mouse.wireless = true;

mouse.leftClick = function(){
    console.log('Left Click')
}
mouse.rightClick = function(){
    console.log('Right Click')
}
mouse.scroll = function(){
    console.log('Scrollllinnnggg')
}
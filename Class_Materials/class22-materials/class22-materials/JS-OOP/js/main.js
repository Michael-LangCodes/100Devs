//Factory Function
function makeCircle(radius){
    return{
        radius,
        draw: function() {
        console.log('draw');
        }
    };
}

//Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const another = new Circle(1);

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};

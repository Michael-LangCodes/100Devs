//Write your pseduo code first! 

//Get the input temperature
document.querySelector('#convert').addEventListener('click', run)
let in_temp = document.querySelector('#celsiusTemp').value
//Convert
function run(){
    let in_temp = document.querySelector('#celsiusTemp').value
    let output_temp = (9/5)*in_temp + 32
    document.querySelector('#placeToDisplay').innerText = output_temp
}
//Output value

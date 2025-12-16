//Write your pseduo code first! 

document.querySelector('#convert').addEventListener('click', convert)

function convert(){
    //take the Input Code
    const inputTemp = document.querySelector('#inputTemp').value
    //convert to celsius
    const outTemp = inputTemp*(9/5) + 32
    //output the code
    document.querySelector('#placeToDisplay').innerText = `${outTemp}`
}

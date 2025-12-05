let total = 0 

document.querySelector('#pumpkin').addEventListener('click', pumpkin)
document.querySelector('#dominosPizza').addEventListener('click', domino)


function pumpkin(){
    total = 0
    document.querySelector('#placeToPutResult').innerText = total
}

function domino(){
    total = total +3
    document.querySelector('#placeToPutResult').innerText = total
}
let total = 0 

document.querySelector('#pumpkin').addEventListener('click', pumpkin)
document.querySelector('#dominosPizza').addEventListener('click', domino)
document.querySelector('#zebra').addEventListener('click', zebra)
document.querySelector('#cantThinkOfAnything').addEventListener('click', cant)

function pumpkin(){
    total = 0
    document.querySelector('#placeToPutResult').innerText = total
    document.querySelector('body').style.backgroundColor = 'blue'
}

function domino(){
    total = total +3
    document.querySelector('#placeToPutResult').innerText = total
}

function zebra(){
    total = total +9
    document.querySelector('#placeToPutResult').innerText = total
}

function cant(){
    total = total -2
    document.querySelector('#placeToPutResult').innerText = total
}
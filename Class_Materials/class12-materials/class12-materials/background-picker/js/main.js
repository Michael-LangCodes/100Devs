document.querySelector('#purple').addEventListener('click',purple)
document.querySelector('#green').addEventListener('click',green)
document.querySelector('#blue').addEventListener('click',blue)
document.querySelector('#orange').addEventListener('click',orange)

function purple(){
    document.querySelector('body').style.backgroundColor = 'purple'
}

function green(){
    document.querySelector('body').style.backgroundColor = 'green'
}

function blue(){
    document.querySelector('body').style.backgroundColor = 'blue'
}

function orange(){
    document.querySelector('body').style.backgroundColor = 'orange'
}
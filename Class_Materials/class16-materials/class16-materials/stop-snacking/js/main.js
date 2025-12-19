//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click', stop)

function stop(){
    const numOfSnacks = Number(document.querySelector('input').value)
    document.querySelector('#stops').innerText = ''
    let i = 0
    while(i<numOfSnacks){
        document.querySelector('#stops').innerText += ' stop'
        i++
    }
}
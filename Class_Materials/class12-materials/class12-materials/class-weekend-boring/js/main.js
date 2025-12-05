document.querySelector('#check').addEventListener('click',day)

function day(){
    const day= document.querySelector('#day').value.toLowerCase()
    if (day === 'saturday' || day === 'sunday'){
        document.querySelector('#placeToSee').innerHTML = 'Weekend'
    } else if(day === 'tuesday' || day === 'thursday'){
        document.querySelector('#placeToSee').innerHTML = 'Class Day'
    }else {
        document.querySelector('#placeToSee').innerHTML = 'TUff'
    }
}
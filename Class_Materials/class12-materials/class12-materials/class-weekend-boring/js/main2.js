document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  if (day === 'Thursday' || day === 'Tuesday'){
    text = "Today is Class Day"
    document.querySelector('#placeToSee').innerHTML = text
  }else if (day === 'Saturday' || day === 'Sunday'){
    text = "Today is Weekend"
    document.querySelector('#placeToSee').innerHTML = text
  }else{
    text = "Boring"
    document.querySelector('#placeToSee').innerHTML = text
  }
}

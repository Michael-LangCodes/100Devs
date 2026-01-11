//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://api.genderize.io?name='+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.gender)
        document.querySelector('h3').innerText = data.gender
        document.querySelector('h2').innerText = choice
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
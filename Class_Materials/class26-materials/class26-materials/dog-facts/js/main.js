//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  //const choice = document.querySelector('input').value
  const url = 'https://dogapi.dog/api/v2/facts'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data[0])
        document.querySelector('h3').innerText = data.data[0].attributes.body
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
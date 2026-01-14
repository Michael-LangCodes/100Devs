//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  console.log(choice)
  const key = 'vjv39gOJOpdk2nMDuXOtYHuQCR1tNqwLLePOgM3m'
  const url = `https://api.nasa.gov/planetary/apod?api_key=vjv39gOJOpdk2nMDuXOtYHuQCR1tNqwLLePOgM3m&date=${choice}`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        document.querySelector('img').src = data.url;
        document.querySelector('h3').innerText = data.explanation;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


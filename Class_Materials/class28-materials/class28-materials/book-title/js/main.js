//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const ISBN = document.querySelector('input').value
  console.log(ISBN)
  const url = `https://openlibrary.org/isbn/${ISBN}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.title)
        document.querySelector('h2').innerText = data.title;
        //document.querySelector('img').src = data.
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


//Fetch Book Title From Open
document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('h2').innerText = localStorage.getItem('books');

function getFetch(){
  const ISBN = document.querySelector('input').value
  console.log(ISBN)
  const url = `https://openlibrary.org/isbn/${ISBN}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.title)
        //put storage into local storage
        let books = localStorage.getItem('books') + '  ; ' + data.title;
        localStorage.setItem('books',books);
        //document.querySelector('img').src = data.
        document.querySelector('h2').innerText = localStorage.getItem('books');
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


//Example fetch using pokemonapi.co
let deckId = ''

document.querySelector('button').addEventListener('click', drawTwo)

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res=>res.json())
  .then(data =>{
    deckId = data.deck_id;
    console.log(deckId);
  })
  .catch(err => {
          console.log(`error ${err}`)
      });

function drawTwo(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;
  fetch(url)
    .then(res => res.json())
    .then(data=>{
      console.log(data.cards[0].value, data.cards[0].suit);
      document.querySelector('#player1').src = data.cards[0].image;
      document.querySelector('#player2').src = data.cards[1].image;
    })
}


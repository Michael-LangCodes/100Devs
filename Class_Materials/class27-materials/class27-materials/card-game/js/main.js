//Example fetch using pokemonapi.co
if (!localStorage.getItem('storedDeckID')){
  let deckId = '';
  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res=>res.json())
  .then(data =>{
    deckId = data.deck_id;
    console.log(deckId);
    localStorage.setItem('storedDeckID',deckId);
  })
  .catch(err => {
          console.log(`error ${err}`)
      });
}

let deckId = localStorage.getItem('storedDeckID')
console.log(deckId)

document.querySelector('button').addEventListener('click', drawTwo)

function reshuffle(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`;
  fetch(url)
}

function drawTwo(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;
  fetch(url)
    .then(res => res.json())
    .then(data=>{
      console.log(data)
      document.querySelector('#player1card1').src = data.cards[0].image;
      document.querySelector('#player2card1').src = data.cards[1].image;

      let player1Val = convertToNum(data.cards[0].value);
      let player2Val = convertToNum(data.cards[1].value);

      if(player1Val > player2Val){
        document.querySelector('h3').innerText = 'Player 1 Wins';
      }else if(player1Val < player2Val){
        document.querySelector('h3').innerText = 'Player 2 Wins';
      }else{
        document.querySelector('h3').innerText = 'Time For War!!!';
        console.log('Starting War!!!');
        startWar();
      }
    })
}

function startWar(){
  let player1Pile = [];
  let player2Pile = [];
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;
  for(let i = 0; i < 3; i++){
    fetch(url)
    .then(res => res.json())
    .then(data=>{
      player1Pile.push(data.cards[0])
      player2Pile.push(data.cards[1])
      document.querySelector(`#player1card${i+1}`).src = data.cards[0].image
      document.querySelector(`#player2card${i+1}`).src = data.cards[1].image
      //document.querySelector('#player1').src = data.cards[0].image;
      //document.querySelector('#player2').src = data.cards[1].image;
  })
  }
  console.log(`This is Player 1 In War ${player1Pile}`);


  let player1WarVal = convertToNum(player1Pile[player1Pile.length-1]).value;
  let player2WarVal = convertToNum(player2Pile[player2Pile.length-1]).value;
  if(player1WarVal > player2WarVal){
        document.querySelector('h3').innerText = 'Player 1 Wins';
      }else if(player1WarVal < player2WarVal){
        document.querySelector('h3').innerText = 'Player 2 Wins';
      }else{
        document.querySelector('h3').innerText = 'Time For War Again!!!';
      }
}

function convertToNum(val){
  if(val === 'ACE'){
    return 14;
  }else if(val === 'KING'){
    return 13;
  }else if(val === 'QUEEN'){
    return 12;
  }else if(val === 'JACK'){
    return 11;
  }else{
    return Number(val);
  }
}
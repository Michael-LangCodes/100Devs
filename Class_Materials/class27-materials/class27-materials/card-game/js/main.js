//Create variable for the deck of cards ID into local storage
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

async function drawTwo(){
  resetTwoCards();
  //document.querySelector('h3').innerText = ''
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;
  await fetch(url)
    .then(res => res.json())
    .then(data=>{
      if(data.success === false){
        endOfDeck();
        drawTwo();
      }else{
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
    }
    })
}


async function startWar(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;
  let player1Pile = [];
  let player2Pile = [];
  for(let i = 0; i < 3; i++){
    await fetch(url)
    .then(res => res.json())
    .then(data=>{
      if(data.success === false){
        endOfDeck(); //Re-sets the deck
      }
      player1Pile.push(data.cards[0])
      player2Pile.push(data.cards[1])
      document.querySelector(`#player1card${i+1}`).src = data.cards[0].image;
      document.querySelector(`#player2card${i+1}`).src = data.cards[1].image;
      console.log('Test if card value of 1 can be read:'+data.cards[0].value);
      console.log('Test if card value of 2 can be read:'+data.cards[1].value);
      console.log('Test if pile of 1 can be read:'+player1Pile);
      console.log('Test if pile of 2 can be read:'+player2Pile);
      document.querySelector(`#player1card${i+1}`).style.display = 'inline';
      document.querySelector(`#player2card${i+1}`).style.display = 'inline';
      //document.querySelector('#player1').src = data.cards[0].image;
      //document.querySelector('#player2').src = data.cards[1].image;
  })
  }
  console.log(player1Pile);
  //console.log(`This is Player 1 In War ${player1Pile}`);


  let player1WarVal = convertToNum(player1Pile[2].value);
  console.log(`Player 1 val: ${player1WarVal}`)
  let player2WarVal = convertToNum(player2Pile[2].value);
  console.log(`Player 2 val: ${player2WarVal}`)
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

function resetTwoCards(){
  for(let i = 1; i < 3; i++){
    document.querySelector(`#player1card${i+1}`).style.display = 'none';
    document.querySelector(`#player2card${i+1}`).style.display = 'none';
  }
}

function endOfDeck(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`;
  fetch(url)
  console.log('Re-shuffle Deck!!');
}
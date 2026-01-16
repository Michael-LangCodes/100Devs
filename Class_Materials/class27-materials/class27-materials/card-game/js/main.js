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

let deckId = localStorage.getItem('storedDeckID');

document.querySelector('#Deal').addEventListener('click', drawTwo);
document.querySelector('#War').addEventListener('click', startWar);

async function drawTwo(){
  resetTwoCards();
  const cards = await safeDraw(2);
      document.querySelector('#player1card1').src = cards[0].image;
      document.querySelector('#player2card1').src = cards[1].image;

      let player1Val = convertToNum(cards[0].value);
      let player2Val = convertToNum(cards[1].value);

      if(player1Val > player2Val){
        document.querySelector('h3').innerText = 'Player 1 Wins';
      }else if(player1Val < player2Val){
        document.querySelector('h3').innerText = 'Player 2 Wins';
      }else{
        document.querySelector('h3').innerText = 'Time For War!!!';
        document.querySelector(`#War`).style.display = 'inline';
      }
    }


async function startWar(){
  resetWarButton();
  const cards = await safeDraw(6);
  let player1Pile = [];
  let player2Pile = [];
  let p1Index = 1;
  let p2Index = 1;
  cards.forEach((card, index) => {
    if (index % 2 === 0) {
      player1Pile.push(card);
      document.querySelector(`#player1card${p1Index}`).src = cards[index].image;
      document.querySelector(`#player1card${p1Index}`).style.display = 'inline';
      p1Index++;
    } else {
      player2Pile.push(card);
      document.querySelector(`#player2card${p2Index}`).src = cards[index].image;
      document.querySelector(`#player2card${p2Index}`).style.display = 'inline';
      p2Index++;
    }
  });

  console.log(player1Pile);

  let player1WarVal = convertToNum(player1Pile[2].value);
  let player2WarVal = convertToNum(player2Pile[2].value);
  if(player1WarVal > player2WarVal){
        document.querySelector('h3').innerText = 'Player 1 Wins';
      }else if(player1WarVal < player2WarVal){
        document.querySelector('h3').innerText = 'Player 2 Wins';
      }else{
        document.querySelector('h3').innerText = 'Time For War Again!!!';
        document.querySelector(`#War`).style.display = 'inline';
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

function resetWarButton(){
  document.querySelector(`#War`).style.display = 'none';
}

async function endOfDeck(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`;
  await fetch(url)
}

async function safeDraw(count){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`;
  let res = await fetch(url);
  let data = await res.json();
    if (!data.success || data.remaining < 0){
      await endOfDeck();
      await fetch(url);
      res = await fetch(url);
      data = await res.json();
  }
  return data.cards;
}
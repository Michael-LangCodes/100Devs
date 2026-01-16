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
  const cards = await safeDraw(2);
  //const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;
  //await fetch(url)
  //  .then(res => res.json())
  //  .then(data=>{
  //    if(data.success === false){
  //      endOfDeck();
  //      drawTwo();
  //    }else{
      console.log(cards)
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
        console.log('Starting War!!!');
        startWar();
      }
    }
    //})
//}


  //for(let i = 0; i < 3; i++){
    //await fetch(url)
    //.then(res => res.json())
    //.then(data=>{
    //  if(data.success === false){
    //    endOfDeck(); //Re-sets the deck
    //  }
    //  player1Pile.push(cards[i])
    //  player2Pile.push(cards[i])
    //  document.querySelector(`#player1card${i+1}`).src = cards[i].image;
    //  document.querySelector(`#player2card${i+1}`).src = cards[i].image;
     // console.log('Test if card value of 1 can be read:'+cards[i].value);
     // console.log('Test if card value of 2 can be read:'+cards[i].value);
    //  console.log('Test if pile of 1 can be read:'+player1Pile);
    //  console.log('Test if pile of 2 can be read:'+player2Pile);
    //  document.querySelector(`#player1card${i+1}`).style.display = 'inline';
    //  document.querySelector(`#player2card${i+1}`).style.display = 'inline';
      //document.querySelector('#player1').src = data.cards[0].image;
      //document.querySelector('#player2').src = data.cards[1].image;
  //}
  //}

async function startWar(){
  const cards = await safeDraw(6);
  //const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;
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

async function endOfDeck(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`;
  await fetch(url)
  console.log('Re-shuffle Deck!!');
}

async function safeDraw(count){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`;
  let res = await fetch(url);
  let data = await res.json();
    if (!data.success || data.remaining < 0){
      console.log('Not Safe - Shuffling Deck')
      await endOfDeck();
      console.log('Deck Shuffled');
      await fetch(url);
      res = await fetch(url);
      data = await res.json();
      console.log('New Fetch Called')
  }
  console.log('returning cards')
  console.log(`This is the data: ${data.cards}`)
  return data.cards;
}
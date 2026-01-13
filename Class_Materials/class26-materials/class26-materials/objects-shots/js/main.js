//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dataLoop(data){
    for(let i = 0; i<data.length;i++){
            console.log(data[i]);
            document.querySelector('h2').innerText = data[i].strDrink;
            document.querySelector('img').src = data[i].strDrinkThumb;
            document.querySelector('h3').innerText = data[i].strInstructions;
            await delay(1000);
        }
}

function getDrink(){
    let drink = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks[0])
        dataLoop(data.drinks);
    })
    .catch(err =>{
        console.log(`error ${err}`)
    });
}

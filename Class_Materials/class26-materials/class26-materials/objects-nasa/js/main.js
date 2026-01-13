//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

document.querySelector('button').addEventListener('click',getImage);

function getImage(){
    let date = document.querySelector('input').value;
    console.log(date);
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.url)
        document.querySelector('h2').innerText = `Date: ${data.date}`;
        document.querySelector('img').src = data.url;
    })
    .catch(err =>{
        console.log(`error ${err}`)
    });
}
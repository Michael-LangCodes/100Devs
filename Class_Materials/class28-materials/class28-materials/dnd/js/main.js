//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  refreshSubclasses()
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       //document.querySelector('h3').innerText = data.classes[0].name;
       //document.querySelector('h4').innerText = data.subclasses[0].name;
       data.subclasses.forEach(element => {
        console.log(element.name);
        //create an li
        const li = document.createElement('li');
        //add text to li
        li.textContent = element.name;
        //append the li to the ul
        document.querySelector('ul').appendChild(li);
       });
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function refreshSubclasses(){
    document.querySelector('ul').innerHTML = '';
}
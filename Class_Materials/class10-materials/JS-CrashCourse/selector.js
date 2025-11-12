//Window is the top level object
console.log(window);

//Single element selectors (selects the first element if more than one)
const form = document.getElementById('my-form');
console.log(form);

const form2 = document.querySelector('h1'); //Preferred
console.log(form2);

//Multiple element selectors
items = document.querySelectorAll('.item'); //Preferred
console.log(items)

items.forEach((item) => console.log(item));

//Not Preferred
console.log(document.getElementsByClassName('item'))
const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h4>Hello</h4>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';
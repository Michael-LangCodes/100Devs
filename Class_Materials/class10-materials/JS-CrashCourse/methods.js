const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h4>Hello</h4>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form')
    .style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
    .lastElementChild.innerHTML = '<h1>Hello</h1>'
})
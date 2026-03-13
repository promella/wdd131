const menuButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
nav.classList.toggle('open');
});


const year = document.querySelector('#year');
const lastModified = document.querySelector('#lastModified');

year.textContent = new Date().getFullYear();
lastModified.textContent = "Last Modified: " + document.lastModified;
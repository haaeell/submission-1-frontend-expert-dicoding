import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../scripts/main.js';

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const bodyElement = document.querySelector('body');

hamburgerButtonElement.addEventListener('click', event => {
    drawerElement.classList.toggle('open');
    event.stopPropagation();
});

bodyElement.addEventListener('click', event => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
})

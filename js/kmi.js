import { header } from './header.js';
header();

const formDOM = document.forms[0];
const weightDOM = document.getElementById('weight');
const heightDOM = document.getElementById('height');
const screenDOM = document.getElementById('screen');
const resetDOM = document.getElementById('reset');

formDOM.addEventListener('submit', event => {
    event.preventDefault();

    const weight = +weightDOM.value;
    const height = +heightDOM.value;
    const kmi = weight / height / height * 10000;

    screenDOM.innerText = kmi.toFixed(2);
    screenDOM.style.display = 'block';
    resetDOM.hidden = false;
});

resetDOM.addEventListener('click', () => {
    resetDOM.hidden = true;
    screenDOM.style.display = 'none';
});
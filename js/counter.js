import { header } from "./header.js";
header();

const plusDOM = document.getElementById('plus');
const minusDOM = document.getElementById('minus');
const screenDOM = document.getElementById('screen');

let count = 0;
screenDOM.innerText = 'Score: ' + count;

function increment() {
    ++count;
    screenDOM.innerText = 'Score: ' + count;
}

function decrement() {
    --count;
    screenDOM.innerText = 'Score: ' + count;
}

plusDOM.addEventListener('click', increment);
minusDOM.addEventListener('click', decrement);
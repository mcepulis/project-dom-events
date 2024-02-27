import { header } from "./header.js";
header();

const firstBtnDOM = document.getElementById('first');
const secondBtnDOM = document.getElementById('second');

function hello() {
    console.log('Labas rytas, Lietuva!');
}

function bye() {
    console.log('Iki greito, Lietuva!');
}

// (koks ivykis, ka daryti)
firstBtnDOM.addEventListener('click', hello);
secondBtnDOM.addEventListener('click', bye);
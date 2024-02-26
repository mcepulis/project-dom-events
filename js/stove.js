const stove = document.getElementById("stoveID");

function getStoveTop () {
    let burners = ''
    for (let i= 0; i < 4; i++) {
       burners += '<div class="burners"></div>';
    }
    return `<div class="stove-top">${burners}</div>`;

}

function getStoveFront () {
    let knobs = ''
    for (let i= 0; i < 4; i++) {
       knobs += '<div class="knobs"></div>';
    }
    return `<div class="stove-front">${knobs}</div>`;
  
}

const stoveDisign = getStoveTop() + getStoveFront();
stove.innerHTML = stoveDisign;


const getKnob1 = document.querySelector('.stove-front .knobs:nth-child(1)');
const getKnob2 = document.querySelector('.stove-front .knobs:nth-child(2)');
const getKnob3 = document.querySelector('.stove-front .knobs:nth-child(3)');
const getKnob4 = document.querySelector('.stove-front .knobs:nth-child(4)');

const getBurners1 = document.querySelector('.stove-top .burners:nth-child(1)');
const getBurners2 = document.querySelector('.stove-top .burners:nth-child(2)');
const getBurners3 = document.querySelector('.stove-top .burners:nth-child(3)');
const getBurners4 = document.querySelector('.stove-top .burners:nth-child(4)');

let clicks = [0, 0, 0, 0];

function burnerOnOff(arrIDX, knobNumber, burnerNumber) {
    if (clicks[arrIDX] === 0) {
        knobNumber.style.transition = "background-color 2s ease"; 
        knobNumber.style.backgroundColor = "red";
        burnerNumber.style.border = "3px solid blue";
        
        clicks[arrIDX]++;
    } else {
        knobNumber.style.transition = "background-color 2s ease"; 
        knobNumber.style.backgroundColor = "";
        burnerNumber.style.border = ""
        clicks[arrIDX] = 0;
    }
}



getKnob1.addEventListener('click', () => burnerOnOff(0, getBurners1, getKnob1));
getKnob2.addEventListener('click', () => burnerOnOff(1, getBurners2, getKnob2));
getKnob3.addEventListener('click', () => burnerOnOff(2, getBurners3, getKnob3));
getKnob4.addEventListener('click', () => burnerOnOff(3, getBurners4, getKnob4));

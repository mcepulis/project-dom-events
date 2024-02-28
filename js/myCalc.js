const DOMcalc = document.querySelector('.calc');

const symbolsArr = ["C", "=", ".", "+", "7", "8", "9", "-", "4", "5", "6", "/", "1", "2", "3", "*"];

let DOMbutton = '';
for (let i = 0; i < symbolsArr.length; i++) {
     DOMbutton +=  `<button>${symbolsArr[i]}</button>`;
}

let HTML = `<div class="screen">
<h1></h1>
</div>
<div class="keypad">
${DOMbutton}
</div>`;


DOMcalc.innerHTML = HTML;

const screen = document.querySelector('h1');

const btnClear = document.querySelector('button:nth-of-type(1)');
const btnEqual = document.querySelector('button:nth-of-type(2)');
const btnDot = document.querySelector('button:nth-of-type(3)');
const btnPlus = document.querySelector('button:nth-of-type(4)');
const btn7 = document.querySelector('button:nth-of-type(5)');
const btn8 = document.querySelector('button:nth-of-type(6)');
const btn9 = document.querySelector('button:nth-of-type(7)');
const btnMinus = document.querySelector('button:nth-of-type(8)');
const btn4 = document.querySelector('button:nth-of-type(9)');
const btn5 = document.querySelector('button:nth-of-type(10)');
const btn6 = document.querySelector('button:nth-of-type(11)');
const btnDivision = document.querySelector('button:nth-of-type(12)');
const btn1 = document.querySelector('button:nth-of-type(13)');
const btn2 = document.querySelector('button:nth-of-type(14)');
const btn3 = document.querySelector('button:nth-of-type(15)');
const btnMultiply = document.querySelector('button:nth-of-type(16)');


const buttons = [btnClear, btnEqual, btnDot, btnPlus, btn7, btn8, btn9, btnMinus, btn4, btn5, btn6, btnDivision, btn1, btn2, btn3, btnMultiply];

function btn(btnArrays) {
for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            if (symbolsArr[i] === "C") {
                screen.innerText = "";
            } else {
            screen.innerText += symbolsArr[i];
            }
        });
    }
}

btn(buttons);


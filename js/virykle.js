import { header } from "./header.js";
header();

function virykle(elementId, size = 4) {
    const rowSize = Math.ceil(Math.sqrt(size));

    const DOM = document.getElementById(elementId);
    const HTML = `
        <div class="top">
            ${'<div class="skyle"></div>'.repeat(size)}
        </div>
        <div class="bottom">
            ${'<div class="jungiklis"></div>'.repeat(size)}
        </div>
    `;

    DOM.classList.add('virykle');
    DOM.innerHTML = HTML;
    DOM.style.width = (rowSize * 9 + 1.2) + 'rem';

    const skylesDOM = DOM.querySelectorAll('.skyle');
    const jungikliaiDOM = DOM.querySelectorAll('.jungiklis');

    for (let i = 0; i < size; i++) {
        jungikliaiDOM[i].addEventListener('click', () => {
            jungikliaiDOM[i].classList.toggle('active');
            skylesDOM[i].classList.toggle('active');
        });
    }
}

virykle('virykle-1', 1);
virykle('virykle-2', 2);
virykle('virykle-3', 4);
virykle('virykle-4', 9);
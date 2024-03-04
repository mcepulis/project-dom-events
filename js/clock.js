import { header } from './header.js';
header();

const clockDOM = document.getElementById('clock');

// 1sec = 1000ms
setTimeout(() => {
    console.log('Laikrodis....');
}, 1000);

// for (let i = 1; i < 60; i++) {
//     setTimeout(() => {
//         clockDOM.innerText = i + 's';
//     }, i * 1000);
// }

let count = 0;
setInterval(() => {
    ++count;

    const seconds = count % 60;
    const minutes = ((count - seconds) / 60) % 60;
    const hours = (count - seconds - minutes * 60) / 3600;

    let time = seconds + 'sec';
    if (count >= 60) {
        time = minutes + 'min ' + time;
    }
    if (count >= 3600) {
        time = hours + 'val ' + time;
    }

    clockDOM.innerText = time;
}, 1000);
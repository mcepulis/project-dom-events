import { header } from './header.js';
header();

const clockDOM = document.getElementById('clock');

const start = new Date();
console.log('val', start.getHours());
console.log('min', start.getMinutes());
console.log('sec', start.getSeconds());

const startInMiliSec = Date.now();
console.log(startInMiliSec);

let lastSecond = -1;

function updateClock() {
    const now = Date.now();
    const diff = Math.floor((now - start) / 1000);

    const seconds = diff % 60;
    if (seconds !== lastSecond) {
        const minutes = ((diff - seconds) / 60) % 60;
        const hours = (diff - seconds - minutes * 60) / 3600;

        let time = seconds + 'sec';
        if (diff >= 60) {
            time = minutes + 'min ' + time;
        }
        if (diff >= 3600) {
            time = hours + 'val ' + time;
        }

        clockDOM.innerText = time;
        lastSecond = seconds;
    }

    requestAnimationFrame(updateClock);
}

requestAnimationFrame(updateClock);

// setInterval(updateClock, 100);
// import { header } from './header.js';
// header();

const listDOM = document.getElementById('list');
const formDOM = document.forms[0];
const inputDOM = document.getElementById('task');

const localStorageKey = 'tasks';
const localTasks = localStorage.getItem(localStorageKey);
const taskList = localTasks ? JSON.parse(localTasks) : [];

let HTML = '';

for (const item of taskList) {
    HTML += `<li>${item}</li>`;
}

listDOM.innerHTML = HTML;


formDOM.addEventListener('submit', event => {
    event.preventDefault();

    const text = inputDOM.value;
    taskList.push(text);

    listDOM.insertAdjacentHTML(
        'beforeend',
        `<li>${text}</li>`
    );

    localStorage.setItem(localStorageKey, JSON.stringify(taskList));
});
function header() {
    const navDOM = document.querySelector('.main-nav');
    const localhost = 'http://localhost:4810';
    const github = 'https://front-end-by-rimantas.github.io/48-grupe-dom-events';
    const href = location.hostname === 'localhost' ? localhost : github;

    const HTML = `
        <a href="${href}/">Home</a>
        <a href="${href}/single-button-click">Single button click</a>
        <a href="${href}/counter/">Counter</a>
        <a href="${href}/basketball/">Basketball</a>
        <a href="${href}/virykle/">Virykle</a>
        <a href="${href}/cart/">Prekiu krepselis</a>
        <a href="${href}/clock/">Laikrodis</a>
        <a href="${href}/better-clock/">Geresnis laikrodis</a>
        <a href="${href}/kmi/">KMI</a>
        <a href="${href}/todo/">Todo</a>
    `;
    navDOM.innerHTML = HTML;
}

export { header };
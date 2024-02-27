function header() {
    const navDOM = document.querySelector('.main-nav');
    // const href = location.hostname === 'localhost' ? '/' : './';
    const href = location.hostname === 'localhost' ? '/' : window.location.pathname.split('/').slice(0, -1).join('/') + '/';


    const HTML = `
        <a href="${href}">Home</a>
        <a href="${href}single-button-click">Single button click</a>
        <a href="${href}counter/">Counter</a>
        <a href="${href}basketball/">Basketball</a>
        <a href="${href}virykle/">Virykle</a>
    `;
    navDOM.innerHTML = HTML;
}

export { header };
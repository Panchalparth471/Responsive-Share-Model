let a = document.querySelector('.modal');
let b = document.querySelector('span');
b.addEventListener('click',close);

function change() {
    a.setAttribute("style", "scale:1");
}
function close() {
    a.setAttribute("style", "scale:0");
}
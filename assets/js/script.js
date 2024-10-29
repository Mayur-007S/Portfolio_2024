
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none"
})

const burger = document.getElementById('burger');

function show() {
    return document.getElementById('nav-list').style = "opacity: 1; transition:  250ms ease-in-out; display: flex; flex-direction: column; position: absolute; background-color: #Def2f1;";
}
function disable() {
    return document.getElementById('nav-list').style = "opacity: 0; transition: opacity 250ms ease-out";
}
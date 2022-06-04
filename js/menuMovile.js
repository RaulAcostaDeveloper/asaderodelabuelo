const elementoDOM = document.getElementById('menuMovile');
let toggleMenu=true;
const abrirMenuMovile = ()=>{
    if (toggleMenu) {
        elementoDOM.classList.remove("displayNone");
        elementoDOM.classList.add("menuMovile");
        toggleMenu=false;
    } else {
        elementoDOM.classList.add("displayNone");
        elementoDOM.classList.remove("menuMovile");
        toggleMenu=true;
    }
}
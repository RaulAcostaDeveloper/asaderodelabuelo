const elementoDOM = document.getElementById('menuMovile');
let toggleMenu=true;
const abrirMenuMovile = ()=>{
    if (toggleMenu) {
        elementoDOM.classList.remove("displayNone");
        elementoDOM.classList.remove("animacionDesaparecer");
        elementoDOM.classList.add("displayBlock");
        elementoDOM.classList.add("animacionAparecer");
        toggleMenu=false;
    } else {
        elementoDOM.classList.remove("animacionAparecer");
        elementoDOM.classList.add("animacionDesaparecer");
        setTimeout(() => {
            elementoDOM.classList.remove("displayBlock");
            elementoDOM.classList.add("displayNone");
        }, 1000);
        toggleMenu=true;
    }
}
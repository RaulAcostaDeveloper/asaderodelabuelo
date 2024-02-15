let pop =  new Audio('/sounds/click.mp3');

const reproducirPop = () => {
    pop.play();
}
const copiarContenido = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      reproducirPop();
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
}
function crearCarrucel(idContenedor, numeroVistas, intervaloDeTiempo) {
    let vistaActual = 1; //Empieza en 1, no es un arreglo
    let reproduccionAutomatica; //Reproduccion automática Play
    //Métodos
    const aparecerVista = (id) => {
        let vista = document.getElementById('contenedorVista'+id+idContenedor);
        vista.classList.remove("animacionDesplazarHaciaIzquierda");
        vista.classList.remove("displayNone");
        vista.classList.add("displayFlex");
        vista.classList.add("animacionDesplazarDesdeDerecha");
        console.log(vista);
    }
    const desaparecerVista = (id) => {
        let vista = document.getElementById('contenedorVista'+id+idContenedor);
        vista.classList.remove("animacionDesplazarDesdeDerecha");
        vista.classList.add("animacionDesplazarHaciaIzquierda");
        console.log(vista);
        setTimeout(() => {
            vista.classList.remove("displayFlex");
            vista.classList.add("displayNone");
        }, 800);
    }
    const avanzarVista = () => {
        if(vistaActual >= numeroVistas) {
            desaparecerVista(vistaActual);
            vistaActual = 1;
            aparecerVista(vistaActual);
        } else {
            desaparecerVista(vistaActual);
            vistaActual++;
            aparecerVista(vistaActual);
        }
    }
    const retrocederVista = () => {
        if(vistaActual < numeroVistas) {
            desaparecerVista(vistaActual);
            vistaActual = numeroVistas;
            aparecerVista(vistaActual);
        } else {
            desaparecerVista(vistaActual);
            vistaActual--;
            aparecerVista(vistaActual);
        }
    }
    const iniciarIntervalo = ()=> {
        reproduccionAutomatica = setInterval(() => {
            avanzarVista();
        }, intervaloDeTiempo);
        botonStop.removeAttribute('disabled');
        botonPlay.setAttribute('disabled', true);
        botonDerecho.setAttribute('disabled', true);
        botonIzquierdo.setAttribute('disabled', true);
    }
    const terminarIntervalo = () => {
        clearInterval(reproduccionAutomatica);
        botonDerecho.removeAttribute('disabled');
        botonIzquierdo.removeAttribute('disabled');
        botonPlay.removeAttribute('disabled');
        botonStop.setAttribute('disabled', true);
    }

    //Botones
    let botonDerecho = document.getElementById(`botonDerecho${idContenedor}`);
    let botonIzquierdo = document.getElementById(`botonIzquierdo${idContenedor}`);
    let botonPlay = document.getElementById(`botonPlay${idContenedor}`);
    let botonStop = document.getElementById(`botonStop${idContenedor}`);

    //Eventos al iniciar el carrucel
        //Desaparece las otras vistas al inicio
        for (let index = 1; index <= numeroVistas; index++) {
            document.getElementById('contenedorVista'+index+idContenedor).classList.add("displayNone");
        }
        //Siempre se va a mostrar la primera vista
        aparecerVista(1);
        //Siempre inicia con el intervalo
        iniciarIntervalo();

    //Eventos de botones
    botonDerecho.addEventListener('click', ()=> {
        avanzarVista();
    });
    botonIzquierdo.addEventListener('click', ()=> {
        retrocederVista();
    });
    botonPlay.addEventListener('click', ()=>{
        iniciarIntervalo();
    });
    botonStop.addEventListener('click', ()=>{
        terminarIntervalo();
    })
}

function crearCarrucel(idContenedor, numeroVistas, intervaloDeTiempo) {
    let vistaActual = 1; //Empieza en 1, no es un arreglo
    let reproduccionAutomatica; //Reproduccion automática Play
    //Métodos
    const desaparecerVista = (id) => {
        let vista = document.getElementById('contenedorVista'+id+idContenedor);
        vista.style.display='none';
        gsap.to(vista, {opacity:0,duration: 0.8});
    }
    const aparecerVista = (id) => {
        let vista = document.getElementById('contenedorVista'+id+idContenedor);
        vista.style.display='flex';
        gsap.to(vista, {opacity:1,duration: 0.8});
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
    }
    const terminarIntervalo = () => {
        clearInterval(reproduccionAutomatica);
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
            desaparecerVista(index);
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

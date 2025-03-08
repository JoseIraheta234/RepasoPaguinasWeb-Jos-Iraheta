const botonesPregunta = document.querySelectorAll('.boton-pregunta');

botonesPregunta.forEach(boton => {
    boton.addEventListener('click', () => {
        const respuesta = boton.nextElementSibling;
        respuesta.classList.toggle('mostrar');
    });
});
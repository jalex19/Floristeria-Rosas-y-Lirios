function mostrarSeccion(seccion) {
    var secciones = document.getElementsByClassName('component');
    for (var i = 0; i < secciones.length; i++) {
        secciones[i].style.display = 'none';
    }

    var seccionAMostrar = document.getElementById(seccion);
    if (seccionAMostrar) {
        seccionAMostrar.style.display = 'block';
    }

    resaltarBotonActual(seccion);
}

function resaltarBotonActual(botonId) {
    var botones = document.getElementsByTagName('button');
    for (var i = 0; i < botones.length; i++) {
        botones[i].classList.remove('resaltado');
    }

    var botonActual = document.getElementById('btn' + botonId.charAt(0).toUpperCase() + botonId.slice(1));
    if (botonActual) {
        botonActual.classList.add('resaltado');
    }
}

// Agregar funcionalidad para los nuevos botones
document.getElementById('btnIniciarSesion').addEventListener('click', function () {
    mostrarSeccion('iniciarSesion');
   
});

document.getElementById('btnRegistrarse').addEventListener('click', function () {
    mostrarSeccion('registrarse');
   
});

document.getElementById('formIniciarSesion').addEventListener('submit', function (event) {
    event.preventDefault();

    const usuario = event.target.usuario.value;
    const contrasena = event.target.contrasena.value;


    // Mostrar una alerta de inicio de sesión exitoso (simulada)
    alert('¡Inicio de sesión exitoso!');
});

document.getElementById('formRegistrarse').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = event.target.nombre.value;
    const correo = event.target.correo.value;
    const contrasenaRegistro = event.target.contrasenaRegistro.value;


    // Mostrar una alerta de registro exitoso 
    alert('¡Registro exitoso!');
});
function buscar() {
    var searchTerm = document.getElementById('searchInput').value;
    
    
    alert('Buscando: ' + searchTerm);
}


    window.onload = function() {
        mostrarSeccion('inicio');
    };


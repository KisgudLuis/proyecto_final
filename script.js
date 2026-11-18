
/* ==========================================
   SIMTELE-WEB
   FUNCIONES GENERALES Y NAVEGACION
========================================== */

// Seleccionamos los botones del menu.
const botones = document.querySelectorAll(".boton-menu");

// Seleccionamos todos los modulos.
const modulos = document.querySelectorAll(".modulo");

// Cambiar entre los cuatro modulos.
botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        // Ocultamos todos los modulos.
        modulos.forEach(function(modulo) {
            modulo.classList.add("oculto");
        });

        // Quitamos el color activo de los botones.
        botones.forEach(function(b) {
            b.classList.remove("activo");
        });

        // Mostramos el modulo seleccionado.
        document.getElementById(boton.dataset.modulo)
                .classList.remove("oculto");

        // Marcamos el boton seleccionado.
        boton.classList.add("activo");
    });
});


/* ==========================================
   MODULO 1: DETENCION DE EMERGENCIA
========================================== */

// Capturamos el formulario.
const formEmergencia = document.getElementById("formEmergencia");

formEmergencia.addEventListener("submit", function(event) {

    // Evitamos que la pagina se recargue.
    event.preventDefault();

    // Obtenemos los datos ingresados.
    let velocidad = parseFloat(document.getElementById("velocidad").value);
    let tiempo = parseFloat(document.getElementById("tiempo").value);

    let resultado = document.getElementById("resultadoEmergencia");

    // Verificamos que los valores sean correctos.
    if (isNaN(velocidad) || isNaN(tiempo) ||
        velocidad <= 0 || tiempo <= 0) {

        resultado.textContent = "Ingrese valores mayores que cero.";
        return;
    }

    // Convertimos km/h a metros por segundo y calculamos distancia.
    let distancia = (velocidad / 3.6) * tiempo;

    // Clasificamos el resultado.
    let mensaje = "";

    if (distancia < 50) {
        mensaje = "Condición normal de reacción.";
    }
    else if (distancia <= 100) {
        mensaje = "Precaución: revisar las condiciones de operación.";
    }
    else {
        mensaje = "Alerta: distancia de reacción elevada.";
    }

    // Mostramos el resultado.
    resultado.innerHTML =
        "<strong>Distancia recorrida:</strong> " + distancia.toFixed(2) + " metros<br>" +
        "<strong>Evaluación:</strong> " + mensaje;

    // Limpiamos el formulario.
    formEmergencia.reset();
});


/* ==========================================
   MODULO 2: CONTROL DE MANTENIMIENTO
========================================== */

// Arreglo donde guardamos los componentes.
let componentes = [];

// Capturamos el formulario.
const formMantenimiento = document.getElementById("formMantenimiento");

// Funcion para mostrar los componentes en la tabla.
function mostrarComponentes() {

    let tabla = document.getElementById("tablaMantenimiento");
    let mensaje = document.getElementById("mensajeMantenimiento");

    // Limpiamos la tabla antes de actualizarla.
    tabla.innerHTML = "";

    // Recorremos el arreglo.
    for (let i = 0; i < componentes.length; i++) {

        let fila = tabla.insertRow();

        fila.insertCell().textContent = componentes[i].nombre;
        fila.insertCell().textContent = componentes[i].horas;
        fila.insertCell().textContent = componentes[i].estado;

        // Creamos el boton para eliminar.
        let celda = fila.insertCell();
        let boton = document.createElement("button");

        boton.textContent = "Eliminar";
        boton.className = "eliminar";

        // Eliminamos el componente seleccionado.
        boton.addEventListener("click", function() {

            componentes.splice(i, 1);

            mostrarComponentes();
        });

        celda.appendChild(boton);
    }

    // Mostramos un mensaje si no hay registros.
    if (componentes.length === 0) {
        mensaje.textContent = "No hay componentes registrados.";
    }
    else {
        mensaje.textContent = "Total de componentes: " + componentes.length;
    }
}


// Evento para agregar un componente.
formMantenimiento.addEventListener("submit", function(event) {

    event.preventDefault();

    let nombre = document.getElementById("componente").value.trim();
    let horas = parseFloat(document.getElementById("horas").value);
    let estado = document.getElementById("estado").value;

    // Validamos los datos.
    if (nombre === "" || isNaN(horas) || horas < 0) {
        alert("Complete correctamente todos los campos.");
        return;
    }

    // Creamos un objeto con los datos.
    let nuevoComponente = {
        nombre: nombre,
        horas: horas,
        estado: estado
    };

    // Agregamos el objeto al arreglo.
    componentes.push(nuevoComponente);

    // Actualizamos la tabla.
    mostrarComponentes();

    formMantenimiento.reset();
});


/* ==========================================
   MODULO 3: VIENTO Y OSCILACION
========================================== */

// Capturamos el formulario.
const formViento = document.getElementById("formViento");

formViento.addEventListener("submit", function(event) {

    event.preventDefault();

    // Creamos un arreglo para guardar las cinco mediciones.
    let mediciones = [];

    // Obtenemos las cinco mediciones.
    for (let i = 1; i <= 5; i++) {

        let valor = parseFloat(
            document.getElementById("medicion" + i).value
        );

        // Verificamos que sean valores válidos.
        if (isNaN(valor) || valor < 0) {
            document.getElementById("resultadoViento").textContent =
                "Ingrese cinco valores válidos y no negativos.";
            return;
        }

        // Guardamos cada medicion.
        mediciones.push(valor);
    }

    // Calculamos la suma y buscamos el valor mayor.
    let suma = 0;
    let maximo = mediciones[0];

    for (let i = 0; i < mediciones.length; i++) {

        suma = suma + mediciones[i];

        if (mediciones[i] > maximo) {
            maximo = mediciones[i];
        }
    }

    // Calculamos el promedio.
    let promedio = suma / mediciones.length;

    // Clasificamos la velocidad promedio.
    let clasificacion = "";

    if (promedio <= 20) {
        clasificacion = "Viento suave";
    }
    else if (promedio <= 40) {
        clasificacion = "Viento moderado";
    }
    else {
        clasificacion = "Viento fuerte";
    }

    // Mostramos los resultados.
    document.getElementById("resultadoViento").innerHTML =
        "<strong>Promedio:</strong> " + promedio.toFixed(2) + " km/h<br>" +
        "<strong>Valor máximo:</strong> " + maximo + " km/h<br>" +
        "<strong>Clasificación:</strong> " + clasificacion;

    formViento.reset();
});


/* ==========================================
   MODULO 4: REGISTRO DE SENSORES
========================================== */

// Arreglo donde guardamos los sensores registrados.
let sensores = [];

// Capturamos el formulario.
const formSensores = document.getElementById("formSensores");

// Funcion para mostrar los sensores en la tabla.
function mostrarSensores() {

    let tabla = document.getElementById("tablaSensores");

    tabla.innerHTML = "";

    // Recorremos el arreglo de sensores.
    for (let i = 0; i < sensores.length; i++) {

        let fila = tabla.insertRow();

        fila.insertCell().textContent = sensores[i].codigo;
        fila.insertCell().textContent = sensores[i].tipo;
        fila.insertCell().textContent = sensores[i].lectura;
    }
}


// Evento para registrar un sensor.
formSensores.addEventListener("submit", function(event) {

    event.preventDefault();

    let codigo = document.getElementById("codigo").value.trim().toUpperCase();
    let tipo = document.getElementById("tipo").value;
    let lectura = parseFloat(document.getElementById("lectura").value);

    let resultado = document.getElementById("resultadoSensor");

    // Expresion regular para validar el codigo.
    let formato = /^SEN-\d{3}$/;

    // Comprobamos el formato y la lectura.
    if (!formato.test(codigo)) {

        resultado.textContent =
            "Código inválido. Utilice el formato SEN-001.";

        return;
    }

    if (isNaN(lectura)) {

        resultado.textContent =
            "Ingrese una lectura numérica válida.";

        return;
    }

    // Comprobamos que no exista otro sensor con el mismo codigo.
    let existe = false;

    for (let i = 0; i < sensores.length; i++) {

        if (sensores[i].codigo === codigo) {
            existe = true;
        }
    }

    if (existe) {

        resultado.textContent = "Este código de sensor ya está registrado.";
        return;
    }

    // Creamos un objeto con los datos del sensor.
    let nuevoSensor = {
        codigo: codigo,
        tipo: tipo,
        lectura: lectura
    };

    // Guardamos el sensor en el arreglo.
    sensores.push(nuevoSensor);

    // Actualizamos la tabla.
    mostrarSensores();

    resultado.textContent = "Sensor registrado correctamente.";

    formSensores.reset();
});

//indicar edad

function edad() {
    let edadRecogida = document.getElementById("edad").value;
    if (edadRecogida == "") {
        let edadMensaje = "Introduce una edad válida";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    } else if (edadRecogida < 0) {
        edadMensaje = "Introduce una edad válida";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    } else if (edadRecogida == 0) {
        edadMensaje = "Just born";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    } else if (edadRecogida < 16) {
        edadMensaje = "Eres menor de edad";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    } else if (edadRecogida ==16) {
        edadMensaje = "Puedes conducir en USA";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    } else if (edadRecogida < 18) {
        edadMensaje = "Eres menor de edad";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    } else if (edadRecogida >= 18 && edadRecogida <= 25) {
        edadMensaje = "Eres mayor de edad";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    } else if (edadRecogida >= 26 && edadRecogida <= 65) {
        edadMensaje = "Te estas haciendo viejo";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    } else if (edadRecogida > 65 && edadRecogida < 110) {
        edadMensaje = "Jubilate y cuidate";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    } else if (edadRecogida >= 110 && edadRecogida < 119) {
        edadMensaje = "¿Todavía no estas muerto?";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    } else {
        edadMensaje = "Introduzca una edad válida";
        document.getElementById("edadMensaje").innerHTML = edadMensaje;
    }
}
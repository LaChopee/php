function ShowSelected() {
    let opcion = document.getElementById("opcion").value;
    switch (opcion) {
        case "nevera":
            document.getElementById("resultado").innerHTML = "Potencia de la nevera es entre ";
            break;
        case "vitroceramica":
            document.getElementById("resultado").innerHTML = "Potencia de la vitroceramica es entre ";
            break;
        case "microondas":
            document.getElementById("resultado").innerHTML = "Potencia de la microondas es entre ";
            break;
        case "horno":
            document.getElementById("resultado").innerHTML = "Potencia de la horno es entre ";
            break;
        case "lavavajillas":
            document.getElementById("resultado").innerHTML = "Potencia de la lavavajillas es entre ";
            break;
        case "lavadora":
            document.getElementById("resultado").innerHTML = "Potencia de la lavadora es entre ";
            break;
        case "television":
            document.getElementById("resultado").innerHTML = "Potencia de la television es entre ";
            break;
        case "aireacondicionado":
            document.getElementById("resultado").innerHTML = "Potencia de la aireacondicionado es entre ";
            break;
        case "calefaccion":
            document.getElementById("resultado").innerHTML = "Potencia de la calefaccion es entre ";
            break;
        default:
            document.getElementById("resultado").innerHTML = "Seleccione una opción";
            break;
    }
}
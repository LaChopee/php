function ShowSelected() {

    let opcion = document.getElementById("opcion").value;

    switch (opcion) {
        case "prnatal":
            document.getElementById("resultado").innerHTML = "Las vacunas que necesita son: Difteria,  Tétanos,  Tosferina";
            break;
        case "dosMeses":
            document.getElementById("resultado").innerHTML = "Las vacunas que necesita son: Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Meningococo B, Neumococo Conjugada";
            break;
        case "cuatroMeses":
            document.getElementById("resultado").innerHTML = "Las vacunas que necesita son: Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Meningcoco C, Meningococo B, Neumococo Conjugada";
            break;
        case "onceMeses":
            document.getElementById("resultado").innerHTML = "Las vacunas que necesita son: Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Neumococo Conjugada";
            break;
        case "doceMeses":
            document.getElementById("resultado").innerHTML = "Las vacunas que necesita son: Sarampión, Rubeola, Parotiditis, Meningococo C, Meningococo B";
            break;
        case "quinceMeses":
            document.getElementById("resultado").innerHTML = "Las vacuna que necesita es: Varicela";
            break;
        case "cuatro":
            document.getElementById("resultado").innerHTML = "Las vacunas que necesita son: Sarampión, Rubeola, Parotiditis, Varicela";
            break;
        case "seis":
            document.getElementById("resultado").innerHTML = "Las vacunas que necesita son: Difteria, Tétanos, Tosferina, Polimielitis";
            break;
        case "doce":
            document.getElementById("resultado").innerHTML = "Las vacunas que necesita son: Varicela, Meningococo ACWY, Papilomavirus";
            break;
        case "catorce":
            document.getElementById("resultado").innerHTML = "Las vacunas que necesita son: Difteria, Tétanos";
            break;
        default:
            document.getElementById("resultado").innerHTML = "Seleccione una opción";
            break;
    }

}
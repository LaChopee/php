/*
Bucles while

while(condicion){**se repite mientras la condicion -> positiva
    //bloque de codigo
}
Ejemplo: mostrar en la consola los numeros del 1-15


cuando se trabaja con numeros u otros elementos, tenemos que evaluar o buscar la manera que salga del bucle
*/

function arraysWhile() {
    let num = 0;
    while (num <= 15) {
        console.log(num);
        //si no se incrementa el valor de num el bucle nunca terminará
        num++;
    }

    let interruptor = false;
    while (!interruptor) {
        console.log(interruptor);
        let a = "María", b = "juan";
        //si no cambio el valor del interruptor a true nunca terminara
        if (a != b) {
            interruptor = true;
            console.log(interruptor);
        }
    }
}

function coches() {
    //Declaramos una constrante arraty de marcaCoches
    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    //indice que nos va a permitir salir del bucle
    let i = 0;
    //texto qur mostrará con todos los valores segun vaya recorriendoi el bucle
    let text = "";
    while (cars[i]) {
        text += cars[i] + " ";
        console.log(text);
        i++
    }
}

function texto2() {
    let text2 = " ";
    while (text2 == " ") {
        text2 = prompt("Escribe un nombre");
        console.log(text2);
    }
    alert("Salió del bucle")
}

//ejercicio: lee un número hasta que sea par, sino sigue leyendo

function numPar() {
    let numero;
    while (numero % 2 != 0) {
        numero = parseInt(prompt("Escribe un número par"));
        console.log(numero);
    }
    console.log(numero);
}

/*
Bucle do while: hacer mientras.......

Es ikgual a whule, con la diferencia que siempre se ejecuta al menos 1 vez

do{
    //bloque de intrucciones.....
}while(condicion);

Ejemplo: pedimos al usuario que escriba el nombre ? y mientras lo vuelva a pedir

*/

function nombreDoWhile(){
    let nombre=" ";
    do{
        nombre=prompt("Adivina el nombre");
    }while(nombre!="Antonia");
    alert("Has acertado")
}
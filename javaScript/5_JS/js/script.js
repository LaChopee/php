/*
if - else -> también existe otra estructura de control de flujo switch-case
Su función es: el parametro o valor que contengam pude realizar una serie de opciones
Ejm:
switch(expresión/valor){
    case x:
        //code block
        break;  //para salir del switch y no seguir evaluando los siguientes pasos
    case y:
        //code block
        breeak;
    default:
        //code block
}

Así es como funciona:
La expresión de cambio se avalua una vez.
El alor de la expresión se compara con los valores de cada caso.
Si hay una coincidencia,m se ejecuta el bloque de código asociado.
Si no hay ninguna coincidencia, se ejecuta el bloque de cógo predeterminado (default)
*/

//Ejemplo sencillo
let dia=new Date().getDay()
console.log(dia);
let diaS;// declaramos una variable donde guardqamos el nombre del día
switch(dia){ //5
    case 1:
        diaS="lunes";
        break; //salga del sswitch
    case 2:
        diaS="martes";
        break;
    case 3:
        diaS="miércoles";
        break;
    case 4:
        diaS="jueves";
        break;
    case 5:
        diaS="viernes";
        break;
    case 6:
        diaS="sábado";
        break;
    case 7:
        diaS="domingo";
        break;
    default:
        diaS="Este día no existe"
}
document.getElementById("dia").innerHTML=diaS;


/*
Ejercicio:
De la base de la puntución numérica de los alumnos, indicamos que del 0 al 1 -> Insuficiente
        5 al 6 -> Bien
        7 al 8 -> Notable
        9 al 10 -> Sobresaliente
*/
function calcNota(){
let nota=parseInt(document.getElementById("nota").value);
let notaAlumno;
switch(nota){
    case 0:
        notaAlumno="insuficiente";
        break;
    case 1:
        notaAlumno="insuficiente";
        break;
    case 2:
        notaAlumno="insuficiente";
        break;
    case 3:
        notaAlumno="insuficiente";
        break;
    case 4:
        notaAlumno="insuficiente";
        break;
    case 5:
        notaAlumno="suficiente";
        break;
    case 6:
        notaAlumno="bien";
        break;
    case 7:
        notaAlumno="notable";
        break;
    case 8:
        notaAlumno="notable";
        break;
    case 9:
        notaAlumno="sobresaliente";
        break;
    case 10:
        notaAlumno="sobresaliente";
        break;
    default:
        notaAlumno="este nota no existe"
}
document.getElementById("notaCalc").innerHTML=notaAlumno;
}

/*
for (let i=1, i<10; 1++)

Ejercicio: mostrar en  consola los números del 1 al 20 ed mayuor a menor
*/

for (let i=20; i>0; i=i-2){
console.log(i);
}

function cambiarColor(){
    let colores=["#64c2c8","#cacaca","#b4b4b4","#2c3b3d","#2c013b","#dbd08f"];

    let indice=parseInt(document.getElementById("numero").value);
    --indice;

    for (let i=0;i<colores.length; i++){
        if(i==indice){
            //cambiar el color a el div caja
            document.getElementById("caja").style.backgroundColor=colores[i];
            document.getElementById("dia").style.color=colores[i];
        }
    }

    //recorrer el array con for of
    for (let i of colores){
        //recorremos todos los elementos del array
        document.getElementById("caja2").style.backgroundColor=i;
    }
}

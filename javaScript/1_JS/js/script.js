/*
Este script enseña
    1.comentarios
    2.Insertar código en el html con document.getElementById.innerHTML
    3.leer códiogo desde el HTML con document.getElementById.value
    4.Declarar variable - tipos de variables
    5.ASignarvalores a variables
    6. Monstrar en la consola del navegador salidas -> console.log
    7.crear operaciones básicas
    8.declarar una función
    9.llamar una función desde el html / llamar una funcion desde el mismo javascript -> mifuncion()
    10.convertir un valorde cadena a un valor entero con parseInt
    11.incremento y decremento de valores 
    12. declarar constantes
    13.caracteres de escape en cadena de caracteres
    14.alertas
    15.document.write
*/

//comentarios de línea

/*
comentartio de bloque
*/

//-----alert("hola internautas")

/*acceder a los elementos por id del html
1.Crear una variable-> Un lugar en memoria donde se almacena un valor
     1.1 Declarar la variable indicando un nombre -(comenzar: letras,no numero,no caracteres especiales) $ -> comienzo de php
         debe ser en minusculas o camello -> nombreDelUsuario
         no debe contener espacios (no -> nombre del usuario)  
         se puede utilizar _ tanto en el comienzo como en el contenido    del nombre. una buena práctica es comenzar con letras o $       
*/
         
let nombre="Sofía"; //las comillas indican que es una cadena de caracteres

//declaramos una variable parrafo que se enlaza con el id del html
let parrafo=document.getElementById("p1");
//le indicamos a esa variable que inserte el valor de la otra variable nombre
parrafo.innerHTML=nombre;
//console.log -> es una intruccion que se muestra en la consola del navegador
console.log(nombre);

document.getElementById("demo").innerHTML="hola internautas"

//variables tipo entero
let numero1=45;
let numero2=25;
let suma=45+25;
console.log(suma);

let apellido="Carretón";
nombre=nombre+" "+apellido;
console.log(nombre)
document.getElementById("newName").innerHTML=nombre;

//caracteristicas de java script es que no declara el tipo de dato
numero1="uno";
suma=numero1+numero2;
console.log(suma);//manera de visualizar una salida en javascriot

/*crear mi primera funcion -> uns serie de instrucciones que se ejecutan cuando sea llamada*/

function mostrarAlerta(){
    alert("hola maricas");
    document.getElementById("p2").innerHTML="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis sapiente quas sit earum aut est excepturi vero nostrum alias corrupti iste, optio ex veniam distinctio praesentium officiis ducimus dignissimos atque";
}

//otra manera de llamarlo
/*document.getElementById("boton1").onclick=function(){
    alert("hola marikas");
}*/


/*
    Pasp de parametrod rn una funcion
*/


document.getElementById("suma").innerHTML=sumar(45,34);

function sumar(a,b){
    return a+b;
}

//sumar 2
//casting)=cambiar de un tipo a otro tipo....caracteres a numeros
function sumar2(){
let x=parseInt(document.getElementById("numero1").value);
let y= parseInt(document.getElementById("numero2").value);

document.getElementById("suma2").innerHTML="el valor de x es "+x+" y el valor de y es "+y+" y la suma de estos dos valores es "+(x+y);
}

//existe otra manera de declarar las variables <2015
var nombreAlumno="Sofía CP";
console.log(nombreAlumno);

/*
diferencias entre var y let
     1.se puede volver a declarar la misma variable 
*/
var nombreAlumno="Antonia";
console.log(nombreAlumno);

//ejemplo con let
let nombrePadre="Roberto";
console.log(nombrePadre);
 
/*---no se puede declarar de nuevo una variable con let en el mismo bloque de código---*/
function otroNombrbe(){
    let nombrePadre="Antonio";
    console.log("Dentro de la funcion->"+nombrePadre);
}
otroNombrbe();//llamamos la funcion para que se ejecute

console.log("fuera de la funcion->"+nombrePadre);

//en la declaración de las variables se puede declarar una o mas variables en la misma linea
let/*declara junto a var*/nombreMadre="Antonia", nombreNino="Herminio",colegio="Azorín"; 

//las variabeles no estas obligado a declararlas, pero es importante y una buena practica
eddad=15; //tipo de numero entero
console.log(eddad);

precio=5.8;//asume el decimal
console.log(precio);

/*--
lo que guarda una variable
    tipos->  numeros (4,5, 5.7, etc)
             cadena de caracteres ("cadena")
             booleanos(true,false) ->(verdadero, falso)
--*/

let miBooleano=true; //on-off 0-1

//las cadenas de caracteres existe la limitante de utilizar "" dentro de una cadena
//existen caracteres de escaoe en cadenas de texto
let cadena="esta es la 1 cadena \"muy importante\"";
console.log(cadena);
//se puede combinar las dobles comillas con las comillas simples
let cadena2='esta es la 2 cadena "muy importante"';
console.log(cadena2);
cadena='esta es la 3 cadena \'muy importante\'';
console.log(cadena);
//salto de linea \n
cadena="esta es la 4 cadena 'muy importante' \n de JavaScript";
console.log(cadena);

/*--
operadores matematicos
    +*-/ -> operaciones básicas
    % -> modulo o resto de la division de dos números
*/

x=10;
y=2;
let modulo=10%2; //va a dar como resultado el resto de la division
console.log("Ell módulo entre 10/2 es "+modulo)
let operacion=(x+2)*2 - (y/3);
console.log(operacion);

/*
operadores de asignación
    = signa 
    += incrementa el número
    -=
    /=
    *=
*/

x+=2;//x=12
console.log(x)
x-=8;//x=
console.log(x)
x/=0.5;//x=
console.log(x)
x*=4;//x=
console.log(x)

//se puede usar el operador de asignacion += en las cadenas de caracteres
cadena+=cadena2;
console.log(cadena);


//Operador de exponencial
x=y**10;
console.log(x);
//Operador de incremento
++y;
console.log(y);
//Operador de decremento
--y;
//salida de pantalla directamente insetandok el tyexto en la última línea disponible
document.write("El valor de y es "+y);

/*
    -constantes-
    no cambian en el resto del programa, se declara con la "palabra reservada" const y se debe asignar su valor cuando es declarada

    palabras reservadas= propias del lenguaje
    let, 
*/

const PI=3.141618;//las constantes se declaran e3n mayusculas
const MONEDA=5;

//area de un circulo a=r**2xPI
let area=(50**2)*PI
console.log(area);
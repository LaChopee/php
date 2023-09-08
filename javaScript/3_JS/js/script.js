/*

Matrices o vectores -> Arrays (arreglos)

*/

/*----La declaración de variables aisladas como por ejemplo los días de la semana----*/
let dia1="Lunes";
let dia2="Martes";

/*------Aunque la declaración anterior es correcta, es más eficiente cuando tenemos una coleccion de datos que guardan relación, crear Arrays-
Su sintaxis se compone de:
let nombre_array=[valore1, valor2, valor3.......]-----*/
let dias=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

/*
Aspectos importantes para el uso del Array
1. CAda elemento tiene un indice
2. Los indices comienzan en 0
3. Para acceder a un elemento lo tenemos que llamar con el nombre del Array y su indice -> dias[0] -> lunes
4. Puedo conocer el numero de elementos de un Array
*/

document.getElementById("dias0").innerHTML=dias[0]
document.getElementById("dias1").innerHTML=dias[1]
document.getElementById("dias2").innerHTML=dias[2]
document.getElementById("dias3").innerHTML=dias[3]
document.getElementById("dias4").innerHTML=dias[4]
document.getElementById("dias5").innerHTML=dias[5]
document.getElementById("dias6").innerHTML=dias[6]

/*
Ejercicio: realizar un Array con los meses del año y muestra en pantalla al menos 3 meses del año.
*/

let mes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

document.getElementById("mes1").innerHTML=mes[0];
document.getElementById("mes2").innerHTML=mes[1];
document.getElementById("mes3").innerHTML=mes[2];
document.getElementById("mes4").innerHTML=mes[3];
document.getElementById("mes5").innerHTML=mes[4];
document.getElementById("mes6").innerHTML=mes[5];
document.getElementById("mes7").innerHTML=mes[6];
document.getElementById("mes8").innerHTML=mes[7];
document.getElementById("mes9").innerHTML=mes[8];
document.getElementById("mes10").innerHTML=mes[9];
document.getElementById("mes11").innerHTML=mes[10];
document.getElementById("mes12").innerHTML=mes[11];

/*
A partir del siguiente Array que se proporciona
*/
let valores=[true, 5, false, "hola", "adios", 2];
/*
1.Determinar cual de los dos elementos numéricos es mayor
2.utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro false
3. determinar el resultado de kas 5 operaciones matemáticas realizadas con los dos elementos numericos
*/

//1
let res1=valores[1]>valores[5]?"El valor del índice 1 es mayor":"El valor del índice 5 es mayor";
document.getElementById("res1").innerHTML=res1;

//2
let res2=valores[0]||valores[2];
document.getElementById("res2").innerHTML=res2;

//3
let res3=valores[0]&&valores[2];
document.getElementById("res3").innerHTML=res3;

//4
let res4=valores[1]+valores[5];
document.getElementById("res4").innerHTML="La suma de los valores "+valores[1]+" y "+valores[5]+" es igual a "+res4;

//5
let res5=valores[1]-valores[5];
document.getElementById("res5").innerHTML="La resta de los valores "+valores[1]+" y "+valores[5]+" es igual a "+res5;

//6
let res6=valores[1]*valores[5];
document.getElementById("res6").innerHTML="La multiplicación de los valores "+valores[1]+" y "+valores[5]+" es igual a "+res6;

//7
let res7=valores[1]/valores[5];
document.getElementById("res7").innerHTML="La división de los valores "+valores[1]+" y "+valores[5]+" es igual a "+res7;

//8
let res8=valores[1]%valores[5];
document.getElementById("res8").innerHTML="El módulo del valor "+valores[1]+" entre "+valores[5]+" es igual a "+res8;


/*----CoONDICIONAL UIF-ELSE-----*/
let edad=18; 
let nombre="María";
if(edad>=18){
    ++edad;
    let cumple="El año que viene tendrás "+edad;
    let mensaje="Ya puedes ir"
    document.getElementById("mensajes").innerHTML=cumple + " años y "+mensaje;
}else{
    let mensaje="espera un poco"
    document.getElementById("mensajes").innerHTML=mensaje;
}
let mostrar=false

if (mostrar){
    document.getElementById("mostrado").innerHTML="Entro al if porque mostrado es verdadero";
}else {
    document.getElementById("mostrado").innerHTML="Entro al 'else' porque mostrado es falso";
}

//Cuando necesitamos evaluar la negación de un booleano(true/false), utilizamos el simbolo ! antes de la variable

if (!mostrar){
    document.getElementById("mostrado2").innerHTML="Entro al if porque mostrado es falso";
}else {
    document.getElementById("mostrado2").innerHTML="Entro al 'else' porque mostrado es verdadero";
}

//ejercicio

let num1=5;
let num2=8;

/*if(num1<=num2){
    alert("num1 no es mayor que num2");
}

if(num2>0){
    alert("num2 es positivo");
}

if(num1 !=0 || num1<0){
    alert("num1 es negativo o distinto de 0");
}

if(++num1<=num2){
    alert("Incrementar en 1 unidad el valor de num1 no lo hace mayor o igual que num2");
}
*/

/** Existe la opción de anidar if - else - if- else */

/** Si eres <12 añs eres pequeño, si eres <19 adolescente
 * si eres <35 años sigues sindo joven
 * sino.l........."cuidate mucho"
 */

let edaD=56;
let msnedaD;
if (edaD<12){
    msnedaD="Todavía eres muy pequeño";
}else if(edaD<19){
    msnedaD="Eres adolescente";
}else if(edaD<35){
    msnedaD="Todavía eres joven";
}else{
    msnedaD="Cuidate mucho";
}
document.getElementById("msnedaD").innerHTML=msnedaD;
/*
Concepto básico de funciones o métodos:

Una función JS es un bloque de código diseñado para realizar una tarea *partícular.
Una función JS se ejecuta cuando "algo" lo invoca (lo llama)

Las funciones pueden ser propias, como por ejemplo:
    function guardarNombre(){
            .................bloque de instrucciones
    }

Para que ejecute ese bloque de instrucciones, la función tiene que ser invocada ya sea en un javaScript o desde el HTML
guardarNombre();
    o desde el HTML .... onclick="guardarNombre()"

También existen funciones propias del lenguaje, que nos realizan algunas tareas de manera automática.

Ejemplo: Funciones útiles para cadenas de texto
*/


//funcion para conocer la longitud de una cadena, incluyendo los espacios
let cadena1="AA AAAAAAAAAA A AAAAAA A aa AAAAAA";
let nLetras=cadena1.length;
console.log(nLetras);

//funcion que concatena
let cadena2="AAA AAAA Aaa AAAAAAAAAAAA";
let cadena=cadena1.concat(cadena2);
console.log(cadena)

//concatenar en un bucle
for (let i=1;i<cadena1.length;i++){
    cadena+=cadena1;
}
console.log(cadena)

//funcion para pasar a mayusculas (toUpperCase()) o minusculas(toLowerCase()) una cadena

cadena1=cadena1.toLowerCase();
console.log(cadena1);

//funcion para obtener el caracter que se encuentra en la posicion indicada

let letra=cadena1.charAt(0);//retorna
console.log(letra)

//función indexOf(letra) calcula la posición en la que se encuentra la letra indicada, siempe mostrará ña primera posición

let posicion=cadena1.indexOf('a');
console.log(posicion);

//lastIndexOf calcula la ultima posicion del caracter indicado
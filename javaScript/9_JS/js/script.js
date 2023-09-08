/**
 * Las funciones anónimas son comunes en JavaScript, donde se nombra la function() pero no
 * tienen nombre, pero se le puede asignar una variable, que se invoca a través de esta.
 */

//es con una variable
let hola=function(){
    alert("Jelou Evribody")
}

//otros ejemplos

//una constante
const cuadrado=function(numero){
    return numero*numero;
}
console.log(cuadrado(5));
/*
    Bucle 'for': la estructura for permite realizar repeticiones for (iniciación; condición; incremento){

    }
 */

for(let i=0;i<10;i++){
    console.log(i);
}
console.log("salida del bucle")

/*
La idea del funcionamiento de un bucle for es la siguiente: "mientras la condición indicada se siga cumpliendo, repite la ejecucuión de las instrucciones definidas dentro del for. Además, después de cada repetición, actualiza el calor de las variables que se utilizan en la condición "
*/

//ejemplo de un buvle con los diferentes <hx> del HTML

function salidaH(){
for(let i=1;i<=6;i++){
    document.write("<h"+i+">"+"Encabezado"+i+"</h"+i+">")
}
}

/*
Ejercicio
El factorial de un número entero n es una operacion matematica que consiste en multiblicar todos los 
factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
Utilizando la estructura for, crear un script que calcule el factorial de un número etero 
*/

function calFact(){
    let numero=document.getElementById("numero").value;
    //borrar el contenido de esos selectores
    document.getElementById("mnsError").innerHTML="";
    document.getElementById("resultadoFact").innerHTML="";
    //verificar corresctamente el numero
    console.log(numero);
    if(isNaN(numero)){//si no es un numero
        //ha cometido error al introducir el numero
        let mnsError="Indica un número, ¡NO LETRAS!";
        document.getElementById("mnsError").innerHTML=mnsError;
    }else{
        //bucle factorial
        let resultado=1;
        for(let i=1;i<=numero; i++){
            resultado*=i;
        }
        document.getElementById("resultadoFact").innerHTML=resultado;
    }
}

/*
Una estructura de control derivada de for es la estructura for......in. Su definición exacta implica el uso de objetos, que es un elemento de programaciíón avanzada.
    estructura for.....in adaptada a su uso en arrays
*/
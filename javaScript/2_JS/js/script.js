/*
    1.operadores comparacion
    2.operadores lógicos - Y/O

*/

//1.OPERADORES DE COMPARACION
//devuelven un resultado booleaeno,indicando si la comparación se cumple o no

let x=2,y=3;

//comparar si son iguales
let resultado=(x==y);
document.getElementById("comp1").innerHTML=resultado;

//comparar si son diferentes
resultado=(x!=y);
document.getElementById("comp2").innerHTML=resultado;

//comparar si un numero es mayor que otro
resultado=(x>y);
document.getElementById("comp3").innerHTML=resultado;

//comparar si un numero es mayor o igual
resultado=(x>=y);
document.getElementById("comp4").innerHTML=resultado;

//comparar si un numero es menor que otro
resultado=(x<y);
document.getElementById("comp5").innerHTML=resultado;

//comparar si un numero es menor o igual
resultado=(x<=y);
document.getElementById("comp6").innerHTML=resultado;

//comparar si son iguales en contenido y en tipo de dato
let z="2";
resultado=(x===z);
document.getElementById("comp7").innerHTML=resultado;


//2.OPERADORES LOGICOS
//&& operador logico (y) 
resultado=(x==y) && (x===z); // false    false -> false
document.getElementById("comp8").innerHTML=resultado;
resultado=(x==y) && (x==z); // false    true -> false
document.getElementById("comp9").innerHTML=resultado;
resultado=(x<y) && (x==z); // true    true -> true
document.getElementById("comp0").innerHTML=resultado;
//|| operador logico (o)
resultado=(x==y) || (x===z); // false    false -> false
document.getElementById("comp11").innerHTML=resultado;
resultado=(x==y) || (x==z); // false    true -> true
document.getElementById("comp12").innerHTML=resultado;
resultado=(x<y) || (x==z); // true    true -> true
document.getElementById("comp13").innerHTML=resultado;
//operador ternario -> evaluar una condicion y si se cumple hace algo y si no se cumple hace otra cosa
//estructura -> expresión ? calor o ejecucion si es verdadero : valor o ejecucion si es falso
let muestra=x<y?"X es menor que Y":"X es mayor que Y";
document.getElementById("muestra").innerHTML=muestra;
//


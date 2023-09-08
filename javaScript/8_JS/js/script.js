/*
Funciones en JavaScript
    Es un bloque de código con un nombre, que puede ser invocada desde el mismo JS o desde el HTML 
*/
function sumar(){
    let a=5,b=3;
    let suma= a+b;
    return suma; //retorna un valor
}
console.log(sumar()); //recibimos el resultado de ka operacion en la funcion

/*
Otro ejemplo donde los valores de a y b no estan definidas
*/
function suma2(){
    let suma=a+b;
    return suma;
}
let a=12, b=15;
console.log(suma2());
//tenemos que declarar las variables


/*
funcion con argumento o calores que recibe
*/
function multiplicar(priemrN,segundoN){
    return priemrN*segundoN
}
//se tiene que pasar los argumentos que necesita para realizar la operación
console.log(multiplicar(25,3))
console.log(multiplicar(2,4))

function dividir(priemrN, segundoN){
    return(segundoN/priemrN);
}
console.log(dividir(5,0));

/*
ejercicio: calcula el precio+iva de los siguientesproductos
leche=0.76
agua=1.05
cerealess=2.35
mermelada=1.96

tomando en cuenta que el iva es el 4%
*/
function calcIva(precio,iva){
    return(precio*iva);
}
console.log(calcIva(0.76, 1.04).toFixed(2));
console.log(calcIva(1.05, 1.04).toFixed(2));
console.log(calcIva(2.35, 1.04).toFixed(2));
console.log(calcIva(1.96, 1.04).toFixed(2));


//se puede almacenar el resultafo de una funcion en una variable
a=multiplicar(4,85);
b=dividir(32, 64);
let r3=suma2();

console.log(r3)
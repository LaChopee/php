

/*
    Cuando la ventana o el documento se ha leido o ha cargado invocamos un evento en la poágina

    objeto.addEventListener("accion", funcion)
    la funcion en esta estructura no lleva ()
*/


window.addEventListener("load", function(){
 //contenido de la función anónima al leer el documento
 console.log(document);
 //acceder a cada uno de los elementos
 const card2=this.document.getElementById("card-2");
 console.log(card2);
 let elements=this.document.getElementsByTagName("p");
 console.log(elements);
/*
convertir un htmlCollection en array para manipular
Existen dos maneras:
    1.let elements=[...document.getElementsByTagName("p")];
    2.let elements=Array.from(document.getElementsByTagName("p"))
*/
let elementsDiv=[...document.getElementsByTagName("div")];
console.log(elementsDiv);
let elementsParrafo=Array.from(document.getElementsByTagName("p"));
console.log(elementsParrafo)
let primerP=elementsParrafo[0];
primerP.style.backgroundColor="#4b4b4b";
primerP.style.color="white";
/*
acceder a los elementos diguiendo un evento
*/
primerP.addEventListener("click",function(){
    primerP.style.backgroundColor="white";
    primerP.style.color="black";
})
let segundoP=elementsParrafo[1];
/*
Una funcion anónima, es decir function() se puede utilizar de la siguiente manera
()=>{
    ..instrucciones
}
*/
segundoP.addEventListener("click", ()=>{
    let colorRed=random(255);
    let colorGreen=random(255);
    let colorBlue=random(255);
    let colorFondo="rgba("+colorRed+","+colorGreen+","+colorBlue+",0.5)";
    console.log(colorFondo);
    this.document.body.style.backgroundColor=colorFondo;
})
/*
cambiar color el titulo de la caja 3 si pulsa click
*/
let titulos=Array.from(document.getElementsByClassName("tit1"));
console.log(titulos)
let tit3=titulos[2];
tit3.addEventListener("click",()=>{
    let colorRed=random(255);
    let colorGreen=random(255);
    let colorBlue=random(255);
    let colorFondo="rgba("+colorRed+","+colorGreen+","+colorBlue+",0.5)";
    console.log(colorFondo);
    tit3.style.color=colorFondo;
})

/*
cambiar el color de todos los encabezados
*/
let tit4=titulos[3];
tit4.addEventListener("click",()=>{
    titulos.forEach(cambiarColor);
});

/*
cambiar la letra a cursiva a los parrafos cuando pulse en el 1er parrafo
*/
let par3=elementsParrafo[2];
par3.addEventListener("click",()=>{
    elementsParrafo.forEach(italia)
})

/*
hacer que desaparezca la tarjeta 5
*/
let div5=elementsDiv[5];
div5.addEventListener("mouseover",()=>{
    div5.style.opacity="0.5";
})
div5.addEventListener("mouseout",()=>{
    div5.style.opacity="1";
})

let imagn=Array.from(this.document.getElementsByClassName("imagn"));
let final=imagn[0]
final.addEventListener("mouseover",()=>{
    final.style.opacity="0.5";
})
final.addEventListener("mouseout",()=>{
    final.style.opacity="1";
})

});

function italia(item,index){
    console.log(item);
    console.log(index);
    item.style.fontStyle="italic";
}

function cambiarColor(item,index){
    console.log(item);
    console.log(index);
    item.style.color="red";
}

function random(numero){
    let result=Math.floor(Math.random()*(numero+1));
    return result
}



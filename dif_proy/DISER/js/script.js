alert("¡BIENVENIDOS!")

window.addEventListener('load', function (){

    var fechaActual = new Date();
    this.document.querySelector("#fecha").innerHTML = fechaActual.getDate() + "/" + (fechaActual.getMonth() + 1) + "/" + fechaActual.getFullYear();

    var horaActual = new Date();
    this.document.querySelector("#hora").innerHTML = horaActual.getHours() + ":" + horaActual.getMinutes() + ":" + horaActual.getSeconds();
})

window.addEventListener("load", function(){
    let imagn=Array.from(this.document.getElementsByClassName("imagn"));
    let final1=imagn[0]
    final1.addEventListener("mouseover",()=>{
    final1.style.width="400px";
})
    final1.addEventListener("mouseout",()=>{
    final1.style.width="300px";
})
    let final2=imagn[1]
    final2.addEventListener("mouseover",()=>{
    final2.style.width="400px";
})
    final2.addEventListener("mouseout",()=>{
    final2.style.width="300px";
})
    let final3=imagn[2]
    final3.addEventListener("mouseover",()=>{
    final3.style.width="400px";
})
    final3.addEventListener("mouseout",()=>{
    final3.style.width="300px";
})

})

window.addEventListener("click", function(){
    let nombre=this.document.getElementById("nombre").value;
    if (nombre==""){
        document.getElementById("fallo").innerHTML="Introduzca un nombre";
    }
})

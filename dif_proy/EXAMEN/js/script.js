
function calcPrecio(){
    let destino=document.getElementById("destino").value;
    console.log(destino);
    let peso=document.getElementById("peso").value;
    console.log(peso);
   
    let mnsError=document.querySelector(".mnsError");
    
    if (destino==""||peso=="") {
       alert("Introduce un valor válido")
    } else {
        let precioTotal=parseInt(destino)+ parseFloat(peso);
        mnsError.innerHTML="El precio de tu envío es de " + precioTotal.toFixed(2)+"€";
    }
}

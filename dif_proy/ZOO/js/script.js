

//--------COMPRAR ENTRADAS--------

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


//---------BANER QUE CAMBIA LA IMAGEN----------------

let arrayImg=new Array(4)  //-declarar unidades del array-
arrayImg[0]=new Image();
arrayImg[0].src="img/jimmi-el-mono.webp";
arrayImg[1]=new Image();
arrayImg[1].src="img/cabarceno.webp";
arrayImg[2]=new Image();
arrayImg[2].src="img/tucan.webp";
arrayImg[3]=new Image();
arrayImg[3].src="img/mapache.webp";
contador=0

function cambiarImagen(){
  document.querySelector("#fotosBaner").src=arrayImg[contador].src;
  contador++;
  //operador ternario
  contador=contador==4?contador=0:contador=contador;
  setTimeout("cambiarImagen()", 5000);//se llama a sí mismo  
}

let mnsError=document.querySelector("#mnsError");
let mns="";
window.addEventListener("load", function(){
    let seleccion=document.querySelector("#formcontacto");
    //declarar div ocultos
    let divTel=document.querySelector(".teleOculto");
    let divEmail=document.querySelector(".emailOculto");
    let divCorreo=document.querySelector(".cpOculto");
    seleccion.addEventListener("change", ()=>{
        let valorSeleccion=seleccion.value;
        switch (valorSeleccion) {
            case "telefono":{
                divTel.style.display="block";
                divEmail.style.display="none";
                divCorreo.style.display="none";
                break;
            }               
            case "email":{
                divEmail.style.display="block";
                divTel.style.display="none";
                divCorreo.style.display="none";
                break;
            }
            case "correo":{
                divCorreo.style.display="block";
                divTel.style.display="none";
                divEmail.style.display="none";
                break;
            }
        }
    })

    let boton=document.querySelector("#enviar");
    boton.addEventListener("click",()=>{
        let nombre=document.querySelector("#nombre");
        let apellidos=document.querySelector("#lname");
        let mensaje=document.querySelector("#mensaje");
        console.log(nombre+" "+apellidos+" "+mensaje);
        validarNombre(nombre);
        validarApellido(apellidos);
        validarMensaje(mensaje);
        let telefono=document.querySelector("#telefono");
        let email=document.querySelector("#email");
        let direccion=document.querySelector("#direccion");
        validarContacto(telefono,email,direccion);
        let inputs=document.querySelectorAll(".bien");
        inputs.forEach(items=>{
            items.addEventListener("focus",()=>{
                items.style.background="none";
                items.style.border="none";
                items.style.borderBottom="1px solid #fff";
            })
        })
        let area=document.querySelectorAll("#mensaje");
        area.forEach(items=>{
            items.addEventListener("focus",()=>{
                items.style.background="none";
            })
        })
    })
})

function validarNombre(nombre){
    if (nombre.value==null||nombre.value==""||nombre.value==" "){
        nombre.style.background="rgba(238, 98, 98, 0.527)";
        nombre.style.border="1px solid #fff";
        nombre.setAttribute("placeholder", "Indique un nombre válido")
    }else{
        nombre.style.background="none";
        nombre.style.border="none";
        nombre.style.borderBottom="1px solid #fff";
    }
}
function validarApellido(apellidos){
    if (apellidos.value==null||apellidos.value==""||apellidos.value==" "){
        apellidos.style.background="rgba(238, 98, 98, 0.527)";
        apellidos.style.border="1px solid #fff";
        apellidos.setAttribute("placeholder", "Indique un apellido válido")
    }else{
        apellidos.style.background="none";
        apellidos.style.border="none";
        apellidos.style.borderBottom="1px solid #fff";
    }
}

function validarContacto(telefono,email,direccion){
     let seleccion=document.querySelector("#formcontacto");
    if (telefono.value==""||email.value==""||direccion.value==""){
        seleccion.style.background="rgba(238, 98, 98, 0.527)";
        seleccion.style.border="1px solid #fff";
    } else {
        seleccion.style.background="none";
        seleccion.style.border="none";
        seleccion.style.borderBottom="1px solid #fff";
    }
}
function validarMensaje(mensaje){
    if (mensaje.value==null||mensaje.value==""||mensaje.value==" "){
        mensaje.style.background="rgba(238, 98, 98, 0.527)";
        mensaje.style.border="1px solid #fff";
        mensaje.setAttribute("placeholder", "Indique el mensaje")
    }else{
        mensaje.style.background="none";
    }
}


window.addEventListener("load", ()=>{
  cambiarImagen();
})
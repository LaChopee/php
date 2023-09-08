window.addEventListener("load", function(){
    let mensaje=document.querySelector("#mensaje");
    let mns="";
    //no enviar el formulario
    let boton=document.querySelector(".boton");

    boton.addEventListener("click", function(){
        mns="";
        let nombre=document.querySelector("#nombre").value;
        console.log(nombre);
        if(nombre==""||nombre==null){
            mns="Introduzca un nombre válido";
        }
        let contra=document.querySelector("#pas").value;
        console.log(contra)
        if (contra==""||contra==null) {
            mns=mns+"<br>El campo de la contraseña no puede estar vacío";
        }else if (contra.length<8||contra.length>12) {
            mns=mns+"<br>La contraseña tiene que tener entre 8 y 12 dígitos";
        }
        mensaje.innerHTML=mns;
    })
});

window.addEventListener("load", function() {
    let mensaje=document.querySelector("#calculoIMC");
    let mns="";
    let boton2=document.querySelector(".boton2")
    boton2.addEventListener("click", function(){
        mns="";
        let peso=document.querySelector("#peso").value;
        let altura=document.querySelector("#altura").value;
        console.log(peso);
        console.log(altura);
        let imc=peso/(altura**2);
        console.log(imc);
        if (imc<18.5) {
            mns=document.querySelector("#calculoIMC").innerHTML="Usted tiene bajo peso";
        } else if(imc>=18.5&&imc<25) {
            mns=document.querySelector("#calculoIMC").innerHTML="Usted tiene Normopeso"
        }else if(imc<=25&&imc<27) {
            mns=document.querySelector("#calculoIMC").innerHTML="Usted tiene sobrepeso de grado 1";
        }else if(imc>=27&&imc<30) {
            mns=document.querySelector("#calculoIMC").innerHTML="Usted tiene sobrepeso de grado 2";
        }else if(imc>=30&&imc<35) {
            mns=document.querySelector("#calculoIMC").innerHTML="Usted tiene obesidad de tipo 1";
        }else if(imc>=35&&imc<40) {
            mns=document.querySelector("#calculoIMC").innerHTML="Usted tiene obesidad de tipo 2";
        }else if(imc>=40&&imc<50) {
            mns=document.querySelector("#calculoIMC").innerHTML="Usted tiene obesidad de tipo 3(Mórbida)";
        }else if(imc>=50) {
            mns=document.querySelector("#calculoIMC").innerHTML="Usted tiene obesidad de tipo 4(extrema)";
        }
        mensaje.innerHTML=mns;
    })
})
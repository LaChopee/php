window.addEventListener("load",()=>{
    let politica=document.querySelector("#inpPoliticas");
    let boton=document.querySelector("#envCont");
    politica.addEventListener("change",()=>{
       boton.addEventListener("click",()=>{
        let nombre=document.querySelector("#nombre");
        let email=document.querySelector("#email");
        let telf=document.querySelector("#telf");
        let mns=document.querySelector("#mensaje");
        if (nombre.value==""||nombre.value==" "||nombre.value==null||email.value==""||email.value==" "||email.value==null||telf.value==""||telf.value==" "||telf.value==null){
            nombre.style.background="rgba(255, 0, 0, 0.363)";
            email.style.background="rgba(255, 0, 0, 0.363)";
            telf.style.background="rgba(255, 0, 0, 0.363)";
        }else{
            alert("Eviado orrectamente")
            nombre.style.background="none";
            email.style.background="none";
            telf.style.background="none";
        }
}) 
    })
    
})

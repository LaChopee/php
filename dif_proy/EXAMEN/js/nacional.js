window.addEventListener("load",()=>{
    let img=document.querySelector(".imgNacional");
    let boton=document.querySelector(".preciosNac");
    boton.addEventListener("click",()=>{
        img.style.display="block";
        boton.style.display="none"
    })
})
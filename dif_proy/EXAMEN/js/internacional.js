window.addEventListener("load",()=>{
    let foto=document.querySelector(".imgInternacional")
    foto.addEventListener("mouseover",()=>{
        foto.style.width="55%";
    })
    foto.addEventListener("mouseout",()=>{
        foto.style.width="50%";
    })
})
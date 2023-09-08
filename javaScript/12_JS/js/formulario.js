/*
script para validar el formulario y darle dinamismo
*/

window.addEventListener("load", function(){
    let formPago=document.querySelectorAll("input[name='formaPago']");
    console.log(formPago);
    let divFormTC=document.querySelector('#formTarjetaCredito');
    let divFormPP=document.querySelector('#formPayPal');
    let divFormBiz=document.querySelector('#formBizum');
    
    for(let i=0;i<2;i++){
        formPago[i].addEventListener("change", function(){
            divFormTC.style.display="block";
            divFormPP.style.display="none";
            divFormBiz.style.display="none";
        })
    }
    formPago[2].addEventListener("change", function(){
        divFormTC.style.display="none";
        divFormPP.style.display="block";
        divFormBiz.style.display="none";
    });
    formPago[3].addEventListener("change", function(){
        divFormTC.style.display="none";
        divFormPP.style.display="none";
        divFormBiz.style.display="block";
    });
})

//dni
window.addEventListener("load",()=>{
    Swal.fire({
        title: 'Calcula la letra de tu DNI',
        width: 600,
        padding: '3em',
        color: '#221706',
        backdrop: `
          rgba(117, 108, 89,0.4)
        `
      })
})

function calcularLdni(){
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let numero=document.getElementById("dni").value;
    //Validación de entrada
    if (numero==""||numero<0||numero>99999999){
        let mnsError="Indique un número de DNI válido";
        document.getElementById("mnsError").
        innerHTML=mnsError;
    }else{
    console.log(numero);
    let calletra=numero%23;
    console.log(calletra);
    let letra=letras[calletra];
    console.log(letra);
    document.getElementById("resultado").innerHTML= numero+"-"+letra
}
}

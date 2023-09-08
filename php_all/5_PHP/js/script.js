window.addEventListener("load", ()=>{
   document.querySelector('.formulario').addEventListener('submit', validarFormulario)
});

function validarFormulario(e) {
    e.preventDefault();

    let nombre=document.querySelector('#nombre');
    let email=document.querySelector('#email');

    if (!nombre.value){
        nombre.style.backgroundColor='rgba(158, 47, 47,0.5)';
        return;
    }
    if (!email.value){
        email.style.backgroundColor='rgba(158, 47, 47,0.5)';
        return;
    }

    let timerInterval
    Swal.fire({
        title: 'VALIDANDO...',
        timer: 6000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
    this.submit();
}
window.addEventListener('load', function () {

    var fechaActual = new Date();
    this.document.querySelector("#fecha").innerHTML = fechaActual.getDate() + "/" + (fechaActual.getMonth() + 1) + "/" + fechaActual.getFullYear();

    var horaActual = new Date();
    this.document.querySelector("#hora").innerHTML = horaActual.getHours() + ":" + horaActual.getMinutes() + ":" + horaActual.getSeconds();

    var fechaNacimiento = new Date(2002, 10, 8);
    this.document.querySelector("#fechaNacimiento").innerHTML = fechaNacimiento.getDate() + "/" + (fechaNacimiento.getMonth() + 1) + "/" + fechaNacimiento.getFullYear();

    var hoy = Date.now();
    console.log(hoy);

    let beaM = new Date(1998, 7, 3);
    let beaL = new Date(1992, 5, 8);
    if (beaM < beaL) {
        console.log("La mayor es Bea Mena");
    } else {
        console.log("La mayor es Bea López");
    }


    let boton = this.document.querySelector("#boton");
    boton.addEventListener("click", function () {
        //  let fechaInp = document.querySelector("#fechaInp").value;
        let fechaInp = new Date(document.querySelector("#fechaInp").value);
        //  console.log(fechaInp);
        //  console.log(typeof(fechaInp));
        //  let fechaForm = new Date(fechaInp);
        console.log(fechaInp.toLocaleDateString());
    });
});
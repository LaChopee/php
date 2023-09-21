<!DOCTYPE html>
<html lang="en">
<body>

<?php
include 'header.php '
?>

    <div class="cajaNegra">
        <div class="numeracion">
            <span class="numero-activo">1</span>
            <span class="material-symbols-outlined">arrow_forward</span>
            <span class="numero-inactivo">2</span>
            <span class="material-symbols-outlined">arrow_forward</span>
            <span class="numero-inactivo">3</span>
        </div>
    </div>
    <div class="cajaBlanca">
        <h3>¡Comencemos!</h3>
        <p>Por favor necesitamos estos datos para iniciar tu proceso de alta:</p>
        <form method="post" id="formulario" class="formulario">
            <div class="inputIzquierda">
                <input type="text" id="dni" name="dni" placeholder="DNI">
                <p>00000000A</p>
                <input type="email" name="email" placeholder="EMAIL" id="email">
                <p>usuario@dominio.ext</p>
            </div>
            <div class="inputDerecha">
                <input type="text" id="movil" name="movil" placeholder="TELÉFONO MÓVIL">
                <p>000 000 000</p>
                <input type="email" name="email2" placeholder="CONFIRMA TU EMAIL" id="email2">
                <p>usuario@dominio.ext</p>
            </div>
            <div class="acciones">
                <p class="">
                    <input type="checkbox" id="casilla">
                    He leido y acepto la <a target="_blank" href="https://aepd.es">política de privacidad y protección de datos</a>
                </p>
                <p>
                    <input type="submit" class="boton" disabled name="enviar" value="Siguiente">
                    <input type="reset" class="boton" value="Limpiar">
                </p>
            </div>
        </form>
    </div>

</body>
</html>
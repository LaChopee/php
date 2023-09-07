<!--se puede eliminar lo que falta porque se incluye ya en el include-->
<?php
include 'header.php';
$nombre=$_GET['nombre'];
$email=$_GET['email'];
?>

    <div class="registro">
        <h2>¡GRACIAS <i><?=$nombre?></i> por contactar con nosotros!</h2>
        <p>En breve recibirá un email a <b><?=$email?></b></p>
    </div>

<?php
include 'footer.php';
?>

</body>
</html>
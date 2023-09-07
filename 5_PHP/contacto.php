<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>5_PHP</title>
    <script src="js/script.js"></script>
</head>
<body>

    <?php
        include 'header.php';
       ?>

    <h1 style="width: 75%; margin: 35px auto 0">FORMULARIO DE DATOS</h1>

    <form method="get" action="lectura.php" class="formulario">
        <div>
            <p>
                <label for="nombre">Nombre:</label>
                <input id="nombre" maxlength="50" name="nombre">
            </p>
        </div>
        <div>
            <p>
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email">
            </p>
        </div>
        <div>
            <p class="p-boton">
                <input type="submit" value="ENVIAR" name="enviar" class="boton">
            </p>
        </div>
        <div>
            <?php
            if (isset($_GET['mns'])){
                echo $_GET['mns'];
            }
            ?>
        </div>
    </form>
    <?php
    include 'footer.php';
    ?>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="sweetalert2.min.js"></script>
    <link rel="stylesheet" href="sweetalert2.min.css">

</body>
</html>
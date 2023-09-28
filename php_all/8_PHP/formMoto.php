<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>8_PHP</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container">
    <h1>MOTO</h1>
    <form action="Moto.php" method="get">
        <p>
            <label for="cc">CC</label>
            <input name="cc" id="cc">
        </p>
        <p>
            <label for="marca">Marca</label>
            <input name="marca" id="marca">
        </p>
        <p>
            <label for="tipo">Tipo</label>
            <input name="tipo" id="tipo">
        </p>
        <input type="submit" value="Registrar">
    </form>
    <?php
        if (!empty($_GET["mns"])) {
            echo $_GET["mns"];
        }
    ?>
</div>
</body>
</html>
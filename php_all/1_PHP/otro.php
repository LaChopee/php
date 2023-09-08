<?php
/*creamos 3 variables en php y oluego lo mostramos en el html*/
//las variables pueden empezar con una letra o un '_' y a continuación el contenido
$nombre= 'Sofía Carretón';
$hoy=date('d/m/y');
$hora=date('H:i:s');
$precio=5;
$cantidad=10;
//declarar constantes
define('ANTONIA','Sofía Carretón');
const OTRONOMBRE= 'ANTONIO';
?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>OTRO</title>
</head>
<body>

    <p>HOLA <?=$nombre?></p>
    <p>Hoy es <?=$hoy?></p>
    <p>Son las <?=$hora?></p>
    <p>El total es: <?=$precio*$cantidad?>€</p>
    <p><?php
        echo 'mi nombre es ', ANTONIA, '<br/>', 'El nombre del alumno es ', OTRONOMBRE?></p>

</body>
</html>
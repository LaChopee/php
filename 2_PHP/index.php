
<?php
    //repaso 1_PHP
    const SERVE='https://google.es';
    $usuario='Sofía\'s';
    echo 'A la hora de'.'concatenar se puede hacer tanto con'.','.'como con'.'.'.'<br/>';

    //nuevo
    $cantidad=5796;
    //al usar echo con COMILLAS DOBLES no hay hace falta concatenar
    echo "El usuario es $usuario"."<br/>";
    //Al usar las COMILLAS SIMPLES no lo reconoce
    echo 'El usuario es $usuario'.'<br/>';
    //.............................
    echo "\$usuario=$usuario".'<br/>';
    $fruta='manzana';
    echo "Una $fruta no es cara<br/>";
    echo "10 kilos de {$fruta}s si serian caras<br/>";//${fruta}s también es válido
    echo "10 kilos de ${fruta}s si serian caras<br/>";
    //accede a las letras como un array
    echo $fruta[2].'<br/>';
    $abece='ABCDEFGHIJKLMNÑOPQRSTU';
    echo $abece[9];

?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>2_PHP</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <p>El servidor que más visito es <a target="_blank" href="https://google.es"><?=SERVE?></a></p>
    <p>El usuario que más utilizo es <?=$usuario?></p>
    <p>También se pueden realizar operaciones matemáticas usando: <?=$cantidad+4+1.6?></p>

</body>
</html>
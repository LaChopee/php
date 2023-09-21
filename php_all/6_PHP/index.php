<?php

    function mostrar($cad){
        echo $cad. "<br>";
    }

    $num=23;
    mostrar("El $num con un nuevo formato de ceros delante es ".sprintf("%05d",$num));

    $num=23.2436462;
    mostrar("El $num con un nuevo formato de ceros delante es ".sprintf("%.2f",$num));

    mostrar("El $num con un nuevo formato de ceros delante es ".sprintf("%.f",$num));

    $num=sprintf("%.2f", $num);
    mostrar("Ahora \$numero es->".$num);

    $dia=12;
    $mes=6;
    $ano=2023;
    mostrar("la fecha es : ". sprintf("%02d/%02d/%04d",$dia,$mes,$ano));


    $cadena1=array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ');
    $cadena2=array('ª','&','(',')','€','=','9','-','1','¡','*','|','¿','?','º','#','~','{','$','7','[','+','/','·','^',']','__');
    $texto="esto es una prueba de cifrado";
    mostrar($resultado=str_replace($cadena1,$cadena2,$texto));
    mostrar("Ahora el descifrado");
    mostrar(str_replace($cadena2,$cadena1,$resultado));

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>6_PHP</title>
</head>
<body>

    <h1>EJERCICIO</h1>

    <h3>Frase de Gandhi sobre la forma de vivir</h3>
    <p>Vive como si fueras a morir manana. Aprende como si fueras a vivir siempre</p>

    <?php

    $frase="Vive como si fueras a morir manana. Aprende como si fueras a vivir siempre";
    $buscar=".";
    $fraseArray=explode(".","Vive como si fueras a morir manana. Aprende como si fueras a vivir siempre");

    mostrar(strtoupper($fraseArray[0]).strtolower($fraseArray[1]));
    mostrar(strtolower($frase));
    mostrar(strlen($fraseArray[0])."y".strlen($fraseArray[1]));
    mostrar(md5($fraseArray[0]));
    mostrar($resultado=str_replace($cadena1,$cadena2,$frase));

    ?>

    <h1>EJERCICIO 2</h1>

    <?php

    $nombres=array('Antonia','Ángel','Andrés','Bonifacio','Bruno','Braulio','Bea','Carlos','Clara','Carlota');

    foreach ($nombres as $nombreItem) {
        if (str_starts_with($nombreItem, "B")) {
            mostrar("El nombre '" . $nombreItem . "' empieza por B");
        } else {
            mostrar( "El nombre " . $nombreItem . " no empieza por B");
        }
    }

    ?>

</body>
</html>
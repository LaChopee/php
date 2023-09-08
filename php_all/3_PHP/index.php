
<?php
    //ver que tipo de datos y el valor que contiene es usando la funcion dump

    $numerico=67458;
    $decimal=46.523;
    $boool=true;
    $cadena='Hola marikas';

    var_dump($numerico);
    echo '<br/>';
    var_dump($decimal);
    echo '<br/>';
    var_dump($boool);
    echo '<br/>';
    var_dump($cadena);
    echo '<br/>';

    $paises=['Alemania','España','EEUU','Perú'];
    var_dump($paises);
    echo '<br/>';
    var_export($paises);
    echo '<br/>';


$nombre='Sofía';
    if(empty($nombre)){
        echo "Desconocido".'<br/>';
    }else{
        echo "El nombre es $nombre".'<br/>';
    }

    //verificar que una variable tiene valor con una negacion
    if (!empty($nombre)){
        echo "El nombre es $nombre".'<br/>';
    }else{
        echo "desconocido".'<br/>';
    }

    //ejemplo de isset

    if (isset($noe)){
        echo "La variable \$nombre SI está definida".'<br/>';
    }else{
        echo "La variable \$nombre NO está definida".'<br/>';
    }

    //destryue la variable
    unset($nombre);


    $valor='123456';
    var_dump($valor);
    echo '<br/>';
    $valor=(int)$valor;
    var_dump($valor);
    echo '<br/>';


    $valor=(float)$valor;
    echo "<br> \$valor ";
    var_dump($valor);
    echo "<br>";
    $valorString="1.53Abc";
    $valorString=(float)$valorString;
    var_dump($valorString);
    echo "<br>";
    $cadena2="esta es una cadena";
    $cadena2=ucfirst($cadena2);
    echo "$cadena2 <br>";
    $cadena2=strtoupper($cadena2);
    echo "$cadena2 <br>";
    $cadena2=strtolower($cadena2);
    echo "$cadena2 <br>";
    $valorString=strtolower($valorString); // error del programador!!
    echo  "$valorString <br>";
    //Metodos para validar si una variable tiene datos de un tipo especifico .. is_bool is_float... is......
    $nuevoValor=85456;
    if(is_string($nuevoValor)){
        echo "\$nuevoValor es una cadena <br>";
    }else{
        echo "\$nuevoValor NO es una cadena <br>";
    }
    if(is_int($nuevoValor)){
        echo"\$nuevoValor es una cadena <br>";
    }else{
        echo "\$nuevoValor es un entero <br>";
    }
    $telefono="926631153";
    if(is_numeric($telefono)){ // is_numeric evalua lo que tiene dentro
        echo "El telefono es un numero<br>";
    }else{
        echo "El teléfono NO es un numero<br>";
    }
    // Redondear un valor decimal
    $valorDecimal="14.89";
    echo "El valor de \$valorDecimal =".round($valorDecimal);


?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>3_PHP</title>
</head>
<body>

</body>
</html>
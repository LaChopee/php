<?php


    //Ambito de las variables
    //Ambito local se refiere que si utilidad y valor esta dentro de una funcion

    function variableLocal(){
        $miVariable = 5;
        echo "mi variable tiene valor de $miVariable".'<br/>';
    }
    variableLocal();

    $variableDecimal=85.499999;
    $variableG=15;
    function variableGlobal(){
        global $variableG, $variableDecimal;
        $variableG+=$variableDecimal;
        echo "ahora vale $variableG".'<br/>';
    }
    variableGlobal();
    echo "ahora fuera de la función vale $variableG".'<br/>';
    variableGlobal();
    echo "ahora fuera de la función vale $variableG".'<br/>';
    variableGlobal();
    echo "ahora fuera de la función vale $variableG".'<br/>';

    //Variables static su valor se ve afectado cada vez que se invoca la función, es convertir una variable local en usable su valor cuando se invoque nuevamente la función

    function variableStatic(){
        static $edad=5;
        echo "La edad es $edad".'<br/>';
        $edad++;
    }

    variableStatic();
    variableStatic();
    variableStatic();
    unset($edad);//despues que no la necesito NO se puede eliminar porque es estática
    variableStatic();
    echo '<br/>';

    //EJ: Declarar 3 funcio0nes como las anteriores, donde existe
    // (1)una que sus variables locales sean $x y $y
    // 2) una variable llamada $yy y declararla como global e incrementarla en 2 y que muestre su valor fuera de la funcion
    // 3) una función llamada puntuación y dentro declarar una variable static 'puntos' incrementar cada vez que se invoque

    function localEjercicio(){
        $x=6;
        $y=3;
        echo "la suma de mis variables \$x y \$y es igual a ".$x+$y.'<br/>'.'<br/>';
    }
    localEjercicio();

    $yy=2;
    function globalEjercicio(){
        global $yy;
        $yy+=2;
    }
    globalEjercicio();
    echo "Incremento de 2 a 2 = $yy".'<br/>';
    globalEjercicio();
    echo "Incremento de 4 a 2 = $yy".'<br/>';
    globalEjercicio();
    echo "Incremento de 6 a 2 = $yy".'<br/>';
    globalEjercicio();
    echo "Incremento de 8 a 2 = $yy".'<br/>';
    globalEjercicio();
    echo "Incremento de 10 a 2 = $yy".'<br/>'.'<br/>';

    function puntuacion(){
        static $puntos=1;
        $puntos++;
        echo "su puntuación es $puntos".'<br/>';
    }
    puntuacion();
    puntuacion();
    puntuacion();
    puntuacion();
    puntuacion();
    puntuacion();
    puntuacion();
    puntuacion();
    puntuacion();
    puntuacion();
    puntuacion();
    echo '<br/>';

    $paises=['ESPAÑA','Alemania','Italia','Perú','Eslovenia'];
    //mostrar cuantos elementos tiene un array
    echo "Mi array tiene ".count($paises)." paises.<br/>";
    //saber si existe un valor en mi array
    $consulta=in_array('Alemania',$paises);
    if ($consulta==1){
        echo "Alemania esta en mi array".'<br/>';
    }else{
        echo "Alemania NO esta en mi array".'<br/>';
    }

    //operador ternario
    //condición?verdadero:falso
    $resultado=$consulta==1?"si":"no";
    echo "¿Alemania esta en el array?".'<br/>'.$resultado.'<br/>';

    $indice=array_search('Alemania',$paises);
    echo "La posicion de Alemania es ".$indice.'<br/>';
    $indice=array_search('Holanda',$paises);
    echo "La posicion de Holanda es ".$indice.'<br/>';
    var_dump($indice);

    //reemplazar valores en un array => arrayOriginal y arrayReemplazo
    // array_replace(matriz matriz, matriz matriz_reemplaza[,...])
    $paisesReemplazo=[7=>'Suiza','Suecia'];
    $paises=array_replace($paises,$paisesReemplazo);
    var_dump($paises);

    /*Array con dos indices ... CA y CC*/
    $comunidades=array('Castilla-la-Mancha'=>'Toledo','Andalucia'=>'Sevilla','Madrid'=>'Madrid','Aragón'=>'Zaragoza','Castilla y Leon'=>'No declarada','Murcia'=>'Murcia');
    var_dump($comunidades);
    $reemplazo=array('Castilla y Leon'=>'Salamanca');
    $comunidades=array_replace($comunidades,$reemplazo);
    var_dump($comunidades);
    //Ejercicio: Mostrar tipo tabla... Lo mejor que se pueda... el array de comunidades....


    echo "<h2>Tabla FOREACH Comunidades Autónomas</h2>";
    $comunidades = array("Andalucía" => 'Sevilla', "Aragón" => 'Zaragoza', "Canarias" => 'Santa Cruz de Tenerife / Las Palmas de Gran Canaria   ',
        "Cantabria" => 'Santander', "Castilla y León" => 'Valladolid', "Castilla-La Mancha" => 'Toledo', "Cataluña" => 'Barcelona', "Ceuta" => 'Ceuta', "Comunidad Valenciana" => 'Valencia', "Comunidad de Madrid" => 'Madrid', "Extremadura" => 'Mérida', "Galicia" => 'Santiago de Compostela', "Islas Baleares" => 'Palma de Mallorca', "La Rioja" => 'Logroño', "Melilla" => 'Melilla', "Navarra" => 'Pamplona', "País Vasco" => 'Vitoria', "Principado de Asturias" => 'Oviedo', "Región de Murcia" => 'Murcia');
    echo "<table style='border: 2px solid black ; width: 90%; margin: auto; text-align: center'><thead><tr><th style='border: 2px solid black'>Comunidad Autónoma</th><th>Capital</th></tr></thead>";
    foreach ($comunidades as $com => $comunidadesItem) {
        echo "<tbody><tr><td>$com</td><td>$comunidadesItem</td></tr></tbody>";
    }
    echo "</table>";


    echo "<h2>Tabla Precios</h2>";
    $adidas = array("1ª Equipación Real Madrid Authentic" => '150€',"1ª Equipación Real Madrid" => '100€', "2ªEquipación Real Madrid" => '100€', "3ª Equipación Real Madrid" => '100€',"Camiseta Calentamiento Real Madrid" => '70€',  "Camiseta entrenamiento Real Madrid Tiro" => '55€', "Camiseta Portero 1ª Equipación Real Madrid" => '100€', "Camiseta 1ª Equipación España 22" => '100€', "Camiseta 1ª Equipación España 22 Authentic" => '150€', "Camiseta 2ª Equipación Selección Femenina España 22" => '90€');
    echo "<table ><th>Producto</th><th>Precio</th></tr></thead>";
    foreach ($adidas as $com => $adidasItem) {
        echo "<tbody><tr><td>$com</td><td>$adidasItem</td></tr></tbody>";
    }
    echo "</table>";









?>



<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>4_PHP</title>
    <style>
        table, th, tr, td{
            color: #ffffff;
            font-size: large;
            background-color: rgba(64, 64, 64, 0.51);
            border-collapse: collapse;
            text-align: center;
            width: 1000px;
            margin-top: 100px;
            border: 2px solid #2b2b2b;
            padding: 20px;
        }
        table{
            width:60%;
            margin: auto;
        }
    </style>
</head>
<body>

</body>
</html>
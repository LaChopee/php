
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
    $abece='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.'<br/>';
    echo $abece[14].'<br/>';
    //resultados en booleano segun valor
    if($usuario=='sofía'){
        echo "El usuario es verdadero";
    }else{
        echo 'El resultado es falso'.'<br/>'.'<br/>';
    }

    $numero=0;
    $usuario="Ana";
    if($usuario=="Sofía"){
        echo '<br>',"El nombre Ana, es verdadero";
    }else{
        echo '<br>',"El nombre no es Ana, es falso";
    }
    if($numero==0){
        echo '<br>'.'false'.'<br>';
    }else{
        echo '<br>'.'true';
    }
    $otroValor=(int) 5;
    // matriz
    $matrizDeNumero[]=array();
    for($i=0;$i<10;$i++){
        $matrizDeNumero[$i]=$i*10;
    }
    print_r($matrizDeNumero);
    $matrizEjemplo[]=array();
    for($i=0;$i<30;$i++){
        if($i<15){
            $matrizEjemplo[$i]="a";
        }else{
            $matrizEjemplo[$i]="b";
        }
    }
    print_r($matrizEjemplo);


    $mabecedario[]=array();
    for($i=0;$i<26;$i++){
        $mabecedario[$i]=$abece[$i];
    }
    print_r($mabecedario);

    echo '<br/>'.'<br/>';

    for($i=0;$i<11;$i++){
    for ($x=0;$x<11;$x++){
        echo "$i"."*"."$x"."=".$i*$x."<br/>";
    }
    echo '<br/>';
}


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
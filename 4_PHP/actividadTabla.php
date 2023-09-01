<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>tabla</title>
    <style>
        *{
            font-family: "Artifakt Element Light";
        }
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
        img{
            width: 200px;
        }
    </style>
</head>
<body>
<?php
    $productos2=array(
        array('img/madrid1authentic.avif',"1ª Equipación Real Madrid Authentic",150),
        array('img/madrid1.avif',"1ª Equipación Real Madrid",100),
        array('img/madrid2.avif',"2ª Equipación Real Madrid ",100),
        array('img/madrid3.avif',"3ª Equipación Real Madrid ",100),
        array('img/calentamiento.avif',"Camiseta Calentamiento Real Madrid",70),
        array('img/entrenamiento.avif',"Camiseta Entrenamiento Real Madrid Tiro",55),
        array('img/portero.avif',"1ª Equipación Portero Real Madrid " ,100),
        array('img/españa1authentic.avif',"1ª Equipación España 22 Authentic",150),
        array('img/españa1.avif',"1ª Equipación España 22",100),
        array('img/españa2.avif',"2ª Equipación Selección Femenina España 22",90)
    )
    ;
    $comunidades=array(
        array('Andalucía',"Sevilla",'693.229'),
        array('Castilla-la-Mancha',"Toledo",'86.906'),
        array('Madrid',"Madrid",'3.339.931'),
        array('Murcia',"Murcia",'447.182'),
        array('Aragón',"Zaragoza",'666.880'),
    )
    ;
?>
    <table>
        <thead>
            <td>Producto</td>
            <td>Descripción</td>
            <td>Precio</td>
        </thead>
        <?php
            for($fila=0;$fila<10;$fila++){
                echo "<tr>";
                for ($col=0;$col<3;$col++){

                    if ($col==0){
                        echo "<td><img src='".$productos2[$fila][$col]."'></td>";
                    }else{
                        echo "<td>".$productos2[$fila][$col]."</td>";
                    }
                }
                echo "</tr>";
            }
        ?>
    </table>
    <h2>Array bidireccional con FOREACH</h2>
    <table class="productos">
        <thead class="productos-thead">
        <th class="productos-th">Producto</th>
        <th class="productos-th">Descripción</th>
        <th class="productos-th">Precio</th>
        </thead>
        <?php
        foreach ($productos2 as $filas) {
            echo "<tr class='productos-tr'>";
            foreach ($filas as $indice => $col) {
                if ($indice == 0){
                    echo "<td class='productos-td'><img src='".$col."'></td>";
                }else{
                    echo "<td class='productos-td'>".$col."</td>";
                }
            }
        }
        echo "</tr>";
        ?>
    </table>
<br>
    <table>
        <thead>
            <th>Comunidad Autónoma</th>
            <th>Capital</th>
            <th>Población</th>
        </thead>
        <?php
        foreach ($comunidades as $filas){
            echo "<tr>";
            foreach ($filas as $indice=>$col){
                    echo "<td>$col</td>";
            }
            echo "</tr>";
        }
        ?>
    </table>
<br>
    <table>
        <thead>
            <th>Comunidad Autónoma</th>
            <th>Capital</th>
            <th>Población</th>
        </thead>
        <?php
        for ($fila = 0;$fila<5;$fila++) {
            echo "<tr>";
            for ($col=0;$col<3;$col++) {
                echo "<td>".$comunidades[$fila][$col]."</td>";
            }
        }
        ?>
    </table>
</body>
</html>
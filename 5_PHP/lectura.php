<?php
$mns="";
    if ($_GET['nombre']){
        $nombre=$_GET['nombre'];
    }else{
        $mns="<p style='color: darkred'>El nombre es Obligatorio</p>";
    }
    if ($_GET['email']){
        $email=$_GET['email'];
    }else{
        $mns=$mns."<p style='color: darkred'>El e-mail es obligatorio</p>";
    }

    if ($mns!=""){
        header("Location:http://localhost:63342/PHP/5_PHP/contacto.php?mns=$mns");
    }else{
        header("Location:http://localhost:63342/PHP/5_PHP/registro.php?nombre=$nombre&email=$email");
    }
// funcion que permite enviar /llamr de una página a otra y enviar datos


?>

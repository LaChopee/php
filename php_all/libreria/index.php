<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Inicio</title>
    <script src="js/script.js"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<?php
include 'header.php';
?>

    <div class="banner">
        <img src="img/index.jpg" alt="">
    </div>

<hr>

    <h1 style="font-variant: small-caps; text-align: center;padding: 25px; margin-top: 50px">Nuestros Servicios</h1>

    <div class="enlacesDifPag">
            <div class="column">
                <div class="loko">
                    <img src="img/blog-1.jpg" alt="Jane" style="width:100%">
                    <div class="container">
                        <h2>Tienda</h2>
                        <p class="texto-1">Aquí podrás encontrar todos los libros que buscas.</p>
                        <p><a href="tienda.php"><button class="button">IR</button></a></p>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="loko">
                    <img src="img/blog-2.jpg" alt="Mike" style="width:100%">
                    <div class="container">
                        <h2>Blog</h2>
                        <p class="texto-1">Aquí descubrirás todas las novedades sobre la literatura</p>
                        <p><a href="blog.php"><button class="button">IR</button></a></p>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="loko">
                    <img src="img/blog-3.jpg" alt="John" style="width:100%">
                    <div class="container">
                        <h2>2ª Mano</h2>
                        <p class="texto-1">Aquí encontrarás libros de 2ª mano</p>
                        <p><button class="button">IR</button></p>
                    </div>
                </div>
            </div>
    </div>

<?php
include 'footer.php';
?>
</body>
</html>
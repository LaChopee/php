<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Tienda</title>
</head>
<body>
<?php
include 'header.php';
?>

    <div class="banner">
        <img src="img/banerLibros.webp" alt="">
    </div>
<hr>
    <h1 style="font-variant: small-caps; text-align: center;padding: 25px; margin-top: 50px">Categorías</h1>
<hr>
    <div class="categorias">
        <div class="responsive">
            <div class="gallery">
                <a target="_blank" href="#">
                    <img src="img/terror.jpg" alt="">
                </a>
                <div class="desc">TERROR</div>
            </div>
        </div>
        <div class="responsive">
            <div class="gallery">
                <a target="_blank" href="#">
                    <img src="img/love.jpg" alt="">
                </a>
                <div class="desc">AMOR Y ROMANCE</div>
            </div>
        </div>
        <div class="responsive">
            <div class="gallery">
                <a target="_blank" href="#">
                    <img src="img/lgbtq.jpg" alt="">
                </a>
                <div class="desc">LGBTQ+</div>
            </div>
        </div>
        <div class="responsive">
            <div class="gallery">
                <a target="_blank" href="#">
                    <img src="img/misterio.jpg" alt="">
                </a>
                <div class="desc">TERROR Y THRILLER</div>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>

<?php
include 'footer.php';
?>
</body>
</html>
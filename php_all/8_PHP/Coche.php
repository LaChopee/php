<?php
/*
    La clase es el molde que ca a definir nuestros objetos.
    En términos de programación, define los datos y a la lógica de los objetos.
    Dentro de la clase tenemos los atributos y los métodos
 */
class Coche
{
    //ATRIBUTOS: la palabra reservada public define que el atributo se puede acceder desde cualquier otro archivo del proyecto

    public $colora;
    public $potencia;
    public $marca;

    //METODO CONSTRUCTOR: una funcion que es utilizada en el momento que se crea una instancia de un objeto

    //INSTANCIA DE UN OBJETO: son las diferentes llamadas o creaciones de objetos de una clase

    /**
     * @param $colora
     * @param $potencia
     * @param $marca
     */
    public function __construct($colora, $potencia, $marca)
        //('rojo','1.6cv','ford')
    {
        $this->colora = $colora;
        $this->potencia = $potencia;
        $this->marca = $marca;
    }

    /**
     * @return mixed
     */
    public function getColora()
    {
        return $this->colora;
    }

    /**
     * @param mixed $colora
     */
    public function setColora($colora)
    {
        $this->colora = $colora;
    }

    /**
     * @return mixed
     */
    public function getPotencia()
    {
        return $this->potencia;
    }

    /**
     * @param mixed $potencia
     */
    public function setPotencia($potencia)
    {
        $this->potencia = $potencia;
    }

    /**
     * @return mixed
     */
    public function getMarca()
    {
        return $this->marca;
    }

    /**
     * @param mixed $marca
     */
    public function setMarca($marca)
    {
        $this->marca = $marca;
    }


    /*
        get: leer
        set: asignar
        Metodos genéricos: getter setter
    */



}
$miCoche=new Coche("verde","120","antonia");
$miCoche->colora=$colora="azul";
var_dump($miCoche);
echo '<br>';
$miCoche->setColora("VerdeFosforito");
var_dump($miCoche);
echo "<br>El coche es ahora de color ".$miCoche->getColora();

$cocheAlumno1=new Coche("verde", "2.0cv","Audi");
echo "<br><br><h2>ACTIVIDAD</h2>";
echo "<br>Los datos del coche son:"."<br>Color:".$cocheAlumno1->getColora()."<br>Potencia:".$cocheAlumno1->getPotencia()."<br>Marca:".$cocheAlumno1->getMarca();



function mostrarDatosCoche($unCoche){
    echo "<br>Los datos del coche son:"."<br>Color:".$unCoche->getColora()."<br>Potencia:".$unCoche->getPotencia()."<br>Marca:".$unCoche->getMarca();
}
    
    $ultimoCoche=new Coche("Blanco","3.0cv","BMW");
    mostrarDatosCoche($ultimoCoche);
    
    
    
    
    if ($_GET["color"]!=""&&$_GET["potencia"]!=""&&$_GET["marca"]!=""){
        $colora=$_GET["color"];
        $potencia=$_GET["potencia"];
        $marca=$_GET["marca"];
        $nuevoCoche=new Coche($colora,$potencia,$marca);
        mostrarDatosCoche($nuevoCoche);
    }else{
        header("Location:http://localhost:63342/PHP/php_all/8_PHP/index.php?mns=Los Campos Son Obligatorios");
    }
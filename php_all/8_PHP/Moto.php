 <?php
    
    class Moto
    {
        public $cc;
        public $marca;
        public $tipo;
        
        /**
         * @param $cc
         * @param $marca
         * @param $tipo
         */
        public function __construct($cc, $marca, $tipo)
        {
            $this->cc = $cc;
            $this->marca = $marca;
            $this->tipo = $tipo;
        }
        
        /**
         * @return mixed
         */
        public function getCc()
        {
            return $this->cc;
        }
        
        /**
         * @param mixed $cc
         */
        public function setCc($cc): void
        {
            $this->cc = $cc;
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
        public function setMarca($marca): void
        {
            $this->marca = $marca;
        }
        
        /**
         * @return mixed
         */
        public function getTipo()
        {
            return $this->tipo;
        }
        
        /**
         * @param mixed $tipo
         */
        public function setTipo($tipo): void
        {
            $this->tipo = $tipo;
        }
        
        
        
    }
     function mostrarDatosMoto($unaMoto){
         echo "<br>Los datos de la moto son:"."<br> Cc:".$unaMoto->getCc()."<br>Marca:".$unaMoto->getMarca()."<br>Tipo:".$unaMoto->getTipo();
     }
     if ($_GET["cc"]!=""&&$_GET["marca"]!=""&&$_GET["tipo"]!=""){
         $cc=$_GET["cc"];
         $marca=$_GET["marca"];
         $tipo=$_GET["tipo"];
         $nuevaMoto=new Moto($cc,$marca,$tipo);
         mostrarDatosMoto($nuevaMoto);
     }else{
        header("Location:http://localhost:63342/PHP/php_all/8_PHP/formMoto.php?mns=Todos los Campos son obligatorios");
     }
<?php 
    class Database{

        public $bdd;
        private $host = "localhost";
        private $dbname = "utilisateurs";
        private $username = "root";
        private $password = "SuperP3scado";

        public function __construct()
        {
            $this->bdd = new PDO("mysql:host=" . $this->host . 
                                ";dbname=" . $this->dbname .
                                ";charset=utf8", $this->username , $this->password);
        }
    }
?>
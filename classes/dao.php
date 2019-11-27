<?php

const ENV="prod";

class dao{

    public $db;

    public function __construct()
    {
        if(ENV == "prod")
            $this->db = new PDO("mysql:dbname=bestiaire_main;host=mysql-bestiaire.alwaysdata.net;charset=utf8","bestiaire","580B12baa2");
        if(ENV == "dev")
            $this->db = new PDO("mysql:dbname=bestiary;host=localhost;charset=utf8","root","");
    }
}
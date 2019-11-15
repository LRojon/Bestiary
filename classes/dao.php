<?php

class dao{

    public $db;

    public function __construct()
    {
        $this->db = new PDO("mysql:dbname=bestiaire_main;host=mysql-bestiaire.alwaysdata.net;charset=utf8","bestiaire","580B12baa2");
    }
}
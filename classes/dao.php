<?php

class dao{

    public $db;
    /*private static $instance;*/

    public function __construct()
    {
        $this->db = new PDO("mysql:dbname=bestiary;host=localhost;charset=utf8","root","");
    }
/*
    public getInstance()
    {
        if($this->instance == null)
            $this->instance = new dao();
        return $this->instance;
    }*/
}
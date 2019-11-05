<?php

class dao{

    public $db;
    /*private static $instance;*/

    public function __construct()
    {
        $this->db = new PDO("mysql:dbname=bestiary;host=localhost","root","");
    }
/*
    public getInstance()
    {
        if($this->instance == null)
            $this->instance = new dao();
        return $this->instance;
    }*/
}
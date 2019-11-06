<?php

class Environment{

    public $id;         // int
    public $name;       // string
    public $rate;       // string
    public $quantity;   // string

    public function __construct($id, $name, $rate, $quantity)
    {
        $this->id = intval($id);
        $this->name = $name;
        $this->rate = $rate;
        $this->quantity = $quantity;
    }

}
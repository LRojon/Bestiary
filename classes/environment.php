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

class EncounterTable{

    public $id;         // int
    public $name;       // string
    public $creatures;  // array()

    public function __construct($id, $name, $creatures)
    {
        $this->id = $id;
        $this->name = $name;
        $this->creatures = $creatures;
    }
}
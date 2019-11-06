<?php

class Ability{

    public $id;
    public $name;
    public $limit;
    public $effect;

    public function __construct($id, $name, $limit, $effect)
    {
        $this->id = $id;
        $this->name = $name;
        $this->limit = (bool)$limit;
        $this->effect = $effect;
    }
}
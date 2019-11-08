<?php

class Skill{

    public $id;     // int
    public $name;   // string
    public $path;   // string
    public $rank;   // int
    public $limit;  // bool
    public $effect; // string

    public function __construct($id, $name, $path, $rank, $limit, $effect)
    {
        $this->id = $id;
        $this->name = $name;
        $this->path = $path;
        $this->rank = $rank;
        $this->limit = (bool)$limit;
        $this->effect = $effect;
    }
}
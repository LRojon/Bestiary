<?php

class Creature{

    public $id;             // int
    public $name;           // string
    public $description;    // string
    public $nc;             // string

    public $for;            // int
    public $con;            // int
    public $dex;            // int
    public $int;            // int
    public $sag;            // int
    public $cha;            // int
    public $def;            // int
    public $pv;             // int
    public $init;           // int

    public $attack;         // array(string)
    public $bossRank;       // int
    public $type;           // string
    public $size;           // string
    public $family;         // string
    public $environments;   // array(environment);
    public $skills;         // array(skill);
    public $abilities;      // array(ability);

    public function __construct($id, $name, $description, $nc, $stats, $attack, $type, $size, $family, $environments, $abilities, $skills, $bossRank = 0)
    {
        $this->id = $id;
        $this->name = $name;
        $this->description = $description;
        $this->nc = $nc;
        $this->type = $type;
        $this->size = $size;
        $this->family = $family;
        $this->bossRank = $bossRank;
        $this->environments = $environments;
        $this->skills = $skills;
        $this->abilities = $abilities;

        $statsTab = explode(',', $stats);
        $this->for = $statsTab[0];
        $this->con = $statsTab[1];
        $this->dex = $statsTab[2];
        $this->int = $statsTab[3];
        $this->sag = $statsTab[4];
        $this->cha = $statsTab[5];
        $this->def = $statsTab[6];
        $this->pv = $statsTab[7];
        $this->init = $statsTab[8];

        $this->attack = explode(',',$attack);
    }
}
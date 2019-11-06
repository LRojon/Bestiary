<?php

if(isset($_GET['id']))
{
    date_default_timezone_set('Europe/Paris');
    require_once '../classes/dao.php';
    require_once '../classes/environment.php';
    require_once '../classes/creature.php';
    
    $dao = new dao();
    $res = $dao->db->query("SELECT * FROM creature WHERE id=".$_GET['id'])->fetch();
    $family = $dao->db->query("SELECT * FROM family WHERE id=".$res['family_id'])->fetch()['label'];
    $type = $dao->db->query("SELECT * FROM `type` WHERE id=".$res['type_id'])->fetch()['label'];
    $size = $dao->db->query("SELECT * FROM size WHERE id=".$res['size_id'])->fetch()['label'];
    
    $resEnvironments = $dao->db->query("SELECT e.id, e.name, p.rate, p.quantity FROM environment e LEFT JOIN crea_env p ON p.environment_id = e.id WHERE p.creature_id = ".$res['id'])->fetchAll();
    $env = array();
    foreach ($resEnvironments as $resEnv) {
        array_push($env, new Environment($resEnv['id'], $resEnv['name'], $resEnv['rate'], $resEnv['quantity']));
    }
    
    $creature = new Creature(
        $res['id'],
        $res['name'],
        $res['description'],
        $res['nc'],
        $res['stats'],
        $res['attack'],
        $type,
        $size,
        $family,
        $env
    );

    var_dump($creature);
}
else{
    echo "404";
}


<?php

if(isset($_GET['id']))
{
    header('Content-Type: application/json');
    require_once '../include.php';

    $dao = new dao();
    $res = $dao->db->query("SELECT c.id, c.name, p.rate, p.quantity FROM crea_env p JOIN creature c ON c.id = p.creature_id WHERE p.environment_id = ".$_GET['id'])->fetchAll();
    $encounters = array();
    foreach ($res as $elem) {
        array_push($encounters, new Encounter($elem['id'], $elem['name'], $elem['rate'], $elem['quantity']));
    }
    $env = $dao->db->query("SELECT * FROM environment WHERE id=".$_GET['id'])->fetch();
    $table = new EncounterTable($env['id'], $env['name'], $encounters);
    echo json_encode($table);
}
else
{
    return '404';
}
<?php

if(isset($_GET['id']))
{
    //header('Content-Type: application/json');
    require_once '../include.php';

    $dao = new dao();
    $res = $dao->db->query("CALL encounter_table( ".$_GET['id'].")")->fetchAll();
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
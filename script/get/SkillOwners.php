<?php

require_once '../include.php';

if(isset($_POST['id']))
{
    $dao = new dao();
    $res = $dao->db->query("SELECT * FROM crea_skill WHERE skill_id=".$_POST['id'])->fetchAll();
    $owners = array();
    foreach ($res as $value) {
        array_push($owners, $dao->db->query("SELECT * FROM creature WHERE id=".$value['creature_id'])->fetch());
    }
    echo json_encode($owners);
}
else
{
    header('HTTP/1.0 404 Not Found');
}
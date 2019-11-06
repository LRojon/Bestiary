<?php

date_default_timezone_set('Europe/Paris');
mb_internal_encoding('UTF-8');
require_once '../classes/dao.php';

$dao = new dao();
$res = array();
$query =  $dao->db->query("SELECT * FROM creature");
foreach($query as $row)
{
    $row['description'] = trim(substr($row['description'], 0, 47)).'...';
    array_push($res, $row);
}
echo json_encode($res);
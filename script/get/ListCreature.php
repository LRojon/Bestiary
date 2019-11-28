<?php

require_once '../include.php';

$dao = new dao();
$res = array();
$query =  $dao->db->query("SELECT * FROM creature");
foreach($query as $row)
{
    $row['desc'] = trim(substr($row['description'], 0, 47)).'...';
    array_push($res, $row);
}
echo json_encode($res);
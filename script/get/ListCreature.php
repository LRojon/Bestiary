<?php

require_once '../include.php';

$dao = new dao();
$res = array();
$query =  $dao->db->query("SELECT * FROM creature")->fetchAll();
foreach($query as $row)
{
    $row['desc'] = trim(substr($row['description'], 0, 47)).'...';
    array_push($res, $row);
}
echo json_encode(utf8ize($res));

function utf8ize($d){
	if(is_array($d)){
		foreach($d as $k => $v){
			$d[$k] = utf8ize($v);
		}
	} else if (is_string($d)){
		return utf8_encode($d);
	}
	return $d;
}

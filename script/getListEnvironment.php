<?php

date_default_timezone_set('Europe/Paris');
require_once '../classes/dao.php';

$dao = new dao();
echo json_encode($dao->db->query("SELECT * FROM environment")->fetchAll());
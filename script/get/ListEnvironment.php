<?php

require_once '../include.php';

$dao = new dao();
echo json_encode($dao->db->query("SELECT * FROM environment GROUP BY name ASC")->fetchAll());
<?php

require_once '../include.php';

$dao = new dao();
echo json_encode($dao->db->query("SELECT * FROM family")->fetchAll());
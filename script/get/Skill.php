<?php

require_once '../include.php';

$dao = new dao();

echo json_encode($dao->db->query("SELECT * FROM skill WHERE id=".$_POST['id'])->fetch());
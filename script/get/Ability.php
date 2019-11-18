<?php

require_once '../include.php';

if(isset($_POST['id']))
{
    $dao = new dao();
    echo json_encode($dao->db->query("SELECT * FROM ability WHERE id=".$_POST['id'])->fetch());
}
else
{
    header('HTTP/1.0 404 Not Found');
}
